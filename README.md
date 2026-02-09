# Decap CMS (Netlify CMS) para gerenciamento de imóveis

## Como acessar o painel de administração

1. Acesse `/admin` no seu site local ou hospedado.
2. Faça login usando o Netlify Identity (ou configure o git-gateway conforme necessário).

## Como cadastrar imóveis

1. No painel, clique em "Imóveis" e depois em "Novo Imóvel".
2. Preencha os campos: Título, Preço, Descrição, Imagem e Categoria (Venda/Aluguel).
3. As imagens serão salvas em `public/images/uploads` e os arquivos Markdown em `src/content/imoveis/`.

## Exibição das imagens

O componente de listagem de imóveis (`PropertyList.tsx`) já está preparado para exibir corretamente as imagens enviadas pelo CMS, usando o caminho `/images/uploads/nome-da-imagem.ext`.

## Dependências necessárias

Instale a dependência para leitura dos arquivos Markdown:

```bash
npm install gray-matter
```

## Observação

Se você quiser exibir os imóveis cadastrados dinamicamente, utilize o componente `PropertyList` no seu app React. Ele já faz a leitura dos arquivos `.md` usando `import.meta.glob` do Vite.
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
