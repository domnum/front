#!/bin/bash

set -e

# Limpa build anterior
rm -rf dist/
rm -rf deploy/

# Instala dependências
npm ci

# Build Angular
npm run build -- --configuration production

# Novo path real de saída
BUILD_PATH="dist/domnum/browser"

echo "📦 Conteúdo de $BUILD_PATH:"
ls -la "$BUILD_PATH"

if [ ! -f "$BUILD_PATH/index.html" ]; then
  echo "❌ Build do Angular falhou. 'index.html' não encontrado."
  exit 1
fi

# Prepara para docker
mkdir deploy
cp -r $BUILD_PATH/* deploy/
cp nginx.conf deploy/

# Build da imagem Docker
docker build -t domnum-frontend-prod -f Dockerfile .
