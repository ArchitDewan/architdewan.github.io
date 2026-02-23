# Dev Portfolio

Minimal, content-driven developer portfolio built with Astro.

## Stack

- Astro
- Tailwind CSS
- Markdown content collections with schema validation (zod)
- Static deployment on Vercel

## Run locally

```bash
npm install
npm run dev
```

## Project content workflow

1. Add a Markdown file under `src/content/projects/`.
2. Fill required frontmatter fields.
3. Run `npm run check` and `npm run build`.

Build will fail if required fields are missing or invalid.

## Deploy to Vercel

1. Push repo to GitHub.
2. Import project into Vercel.
3. Use defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
