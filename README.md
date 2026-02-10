# Deploy e CMS no Netlify

## Checklist para funcionamento correto

1. Certifique-se de que o CSS está sendo carregado corretamente (verifique se está incluído no index.html ou importado nos componentes).
2. Todos os assets (imagens, uploads) devem estar na pasta `public/images`.
3. A pasta `public/images/uploads` deve existir para o Decap CMS salvar imagens.
4. O backend do Decap CMS deve estar como `git-gateway` e o Netlify Identity e Git Gateway devem estar habilitados no painel Netlify.
5. O arquivo `config.yml` deve estar correto (veja exemplo na pasta `public/admin`).
6. O script de identidade deve estar incluído no `index.html` do admin.
7. O build deve ser feito com `npm run build` e o diretório de publicação deve ser `dist`.
8. O componente `PropertyList.tsx` lê os imóveis da pasta `src/content/imoveis`.

## Como cadastrar imóveis

1. Acesse `/admin` no seu site Netlify.
2. Faça login (se não funcionar, habilite Identity e Git Gateway no painel Netlify).
3. Cadastre imóveis normalmente.

## Problemas comuns

- Se o site aparece "quebrado" (sem CSS), verifique se o build está correto e se o CSS está sendo incluído.
- Se o Decap CMS volta para a página inicial, habilite Identity e Git Gateway no painel Netlify.
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
