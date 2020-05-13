### Stage 1: Build ###
FROM node:12.0-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

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