#!/bin/bash

set -e  # Para ao primeiro erro

# 🔄 Limpa builds anteriores
echo "🧹 Limpando pastas antigas..."
rm -rf dist/
rm -rf deploy/

# 📦 Instala dependências
echo "📥 Instalando dependências..."
npm ci

# ⚙️ Build Angular
echo "⚙️ Gerando build de produção do Angular..."
npm run build -- --configuration production

# 📁 Caminho real de saída da build (com SSR/prerender ativo)
BUILD_PATH="dist/domnum/browser"

# 🕵️‍♂️ Verifica se o index.html foi realmente gerado
echo "🔍 Verificando arquivos gerados em $BUILD_PATH..."
ls -la "$BUILD_PATH"

if [ ! -f "$BUILD_PATH/index.html" ]; then
  echo "❌ Build do Angular falhou. 'index.html' não encontrado em $BUILD_PATH"
  exit 1
fi

# 📂 Cria pasta deploy com os arquivos prontos pro Docker
echo "📦 Preparando pasta deploy/"
mkdir deploy
cp -r $BUILD_PATH/* deploy/
cp nginx.conf deploy/

# 🐳 Build da imagem Docker
echo "🐳 Construindo imagem Docker..."
docker build -t domnum-frontend-prod -f Dockerfile .

echo "✅ Build.sh finalizado com sucesso!"
