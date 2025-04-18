FROM nginx:alpine

# Apaga conteúdo default
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

# Copia os arquivos da build Angular (vindo da pasta deploy)
COPY deploy/ ./

# Copia a config custom do nginx
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
