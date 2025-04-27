#!/bin/bash

set -e  # Para ao primeiro erro

# 🔄 Limpa builds anteriores
echo "🧹 Limpando pastas antigas..."
rm -rf dist/
rm -rf deploy/

# 🛠️ Gera o cliente AutoRest
echo "⚙️ Gerando cliente AutoRest..."
bash autorest.sh

# 📦 Instala dependências do projeto Angular
echo "📥 Instalando dependências do Angular..."
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

# 📂 Cria pasta deploy com os arquivos prontos para o Docker
echo "📦 Preparando pasta deploy/"
mkdir deploy
cp -r $BUILD_PATH/* deploy/
cp nginx.conf deploy/

# 🐳 Construindo imagem Docker
echo "🐳 Construindo imagem Docker..."
docker build -t ghcr.io/domnum/front:${IMAGE_VERSION} \
             -t ghcr.io/domnum/front:main \
             -f Dockerfile .

echo "✅ Imagem Docker criada com sucesso com as tags:"
echo "  - ghcr.io/domnum/front:${IMAGE_VERSION}"
echo "  - ghcr.io/domnum/front:main"

echo "✅ Build.sh finalizado com sucesso!"