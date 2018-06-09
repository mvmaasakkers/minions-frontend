FROM nginx:latest

COPY ./build/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/LiveAsAServiceUI/ /usr/share/nginx/html
