# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## How to build and run this project

Prerequisites:

- Node 18+ (or newer) and npm (or yarn/pnpm)

Development:

```bash
cd final
npm install
npm run dev     # start vite dev server
```

Build and Preview Production Bundle:

```bash
npm run build   # produce optimized build in final/dist
npm run preview # preview the built files
```

Linting:

```bash
npm run lint
```

Deployment Notes:

- The build output is written to `final/dist` by default. Deploy that directory to any static hosting provider (Netlify, Vercel, Surge, GitHub Pages, etc.).
- If you're deploying on Netlify, set your publish directory to `final/dist` and make sure you have a rule to handle SPA fallback (_redirects).

Tailwind & Styling:

- This project uses Tailwind integrated into Vite via `@tailwindcss/vite`. To change global styles, update `src/index.css` (or `src/App.css` as used).


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
