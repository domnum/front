# Etapa de build Angular
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

# Etapa de runtime com NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# ARGs que virão do GitHub Actions
ARG BACKEND_URL
ARG API_KEY

# Copia os arquivos do Angular build
COPY --from=build /app/dist/ ./

# Copia o template do env.js
COPY env.template.js .

# Substitui os placeholders do env.js com as variáveis reais
RUN apk add --no-cache gettext && \
    envsubst < env.template.js > env.js && \
    rm env.template.js

# Copia nginx config customizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
