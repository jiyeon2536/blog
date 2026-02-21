// @ts-check
import { defineConfig } from 'astro/config';

// For GitHub Pages: BASE_PATH is set in the deploy workflow (e.g. /HR for repo "HR")
const base = process.env.BASE_PATH || '/';
const site = 'https://arlettevarda.github.io';

export default defineConfig({
  site: base === '/' ? site : `${site}${base}`,
  base,
});
