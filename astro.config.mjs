import { defineConfig } from 'astro/config';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
export default defineConfig({site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://namalak0145.github.io'),base: process.env.BASE_PATH ?? (repository && !repository.endsWith('.github.io') ? `/${repository}` : '/'),output:'static',trailingSlash:'always'});
