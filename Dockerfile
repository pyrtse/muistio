FROM nginx:alpine

COPY js/ /usr/share/nginx/html/js/
COPY index.html /usr/share/nginx/html

expose 80