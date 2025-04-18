FROM nginx:alpine

# Apaga conteúdo default
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

# Copia os arquivos da build Angular
COPY dist/domnum/ ./

# Copia a config custom do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
