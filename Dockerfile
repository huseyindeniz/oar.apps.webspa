### Stage 1: Build ###
FROM node:12.0-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ARG REACT_APP_ENV_VAR
ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT

ENV REACT_APP_ENV_VAR $REACT_APP_ENV_VAR
ENV REACT_APP_API_HOST $REACT_APP_API_HOST
ENV REACT_APP_API_PORT $REACT_APP_API_PORT

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./package.json

RUN npm install react-scripts@3.4.1 -g --silent 
RUN npm install --production --silent

COPY . .

RUN npm run build

### Stage 2: Production Environment ###
FROM nginx:1.13.12-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]