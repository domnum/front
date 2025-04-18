#!/bin/bash

# Limpa pastas anteriores
rm -rf dist/
rm -rf node_modules/
rm -rf deploy/

# Instala dependências
npm ci

# Build Angular para produção
npm run build -- --configuration production

# Verifica se a build foi gerada
if [ ! -f dist/domnum/index.html ]; then
  echo "❌ Build do Angular falhou. Arquivo index.html não encontrado."
  exit 1
fi

# Build imagem Docker
docker build -t domnum-frontend-prod -f Dockerfile .