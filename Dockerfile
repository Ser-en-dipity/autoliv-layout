FROM node:18.19 AS build-env

WORKDIR /app

COPY ./package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest AS runtime

COPY --from=build-env /app/dist/client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
