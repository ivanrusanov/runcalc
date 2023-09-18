FROM nginx:alpine

WORKDIR /runcalc

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf