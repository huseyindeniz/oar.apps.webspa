### Stage 1: Build ###
FROM node:10.13-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install react-scripts@3.4.1 -g --silent 
RUN npm install --production --silent

COPY . /usr/src/app

RUN npm run build

### Stage 2: Production Environment ###
FROM nginx:1.13.12-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]