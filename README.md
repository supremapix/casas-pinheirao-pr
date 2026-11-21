<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1UB7Kthpn8QWb1IANP2PpaLE1XbgGTX1l

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Estilos do aplicativo

O navegador usa o CSS estático gerado pelo Tailwind, em vez do Play CDN. Depois de criar ou alterar classes utilitárias no aplicativo, execute:

```sh
npx --yes tailwindcss@3.4.17 -c tailwind.config.cjs -i styles/tailwind.input.css -o styles/site-utilities.css --minify
npm run build
```

Envie o CSS gerado junto com as alterações de classe. O CSS editorial do blog continua independente.
