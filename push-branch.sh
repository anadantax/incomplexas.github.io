#!/bin/bash

# Script para fazer push da branch setup-github-pages
# Execute este script no terminal para inserir suas credenciais

cd "$(dirname "$0")"

echo "🚀 Fazendo push da branch setup-github-pages..."
echo ""
echo "Quando solicitado, insira:"
echo "  - Username: anadantax"
echo "  - Password: Seu Personal Access Token do GitHub"
echo ""
echo "Se você não tem um token, crie um em:"
echo "https://github.com/settings/tokens"
echo ""

git push -u origin setup-github-pages

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push realizado com sucesso!"
    echo ""
    echo "Agora você pode criar o Pull Request em:"
    echo "https://github.com/anadantax/incomplexas.github.io/compare/main...setup-github-pages"
else
    echo ""
    echo "❌ Erro ao fazer push. Verifique suas credenciais."
fi

