// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile, rm } from 'node:fs/promises';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://trueonlinecompass.com',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it', 'id', 'bn', 'tr', 'ur', 'ar'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		sitemap(),
		{
			name: 'single-sitemap',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					const base = fileURLToPath(dir);
					const chunk = `${base}sitemap-0.xml`;
					const target = `${base}sitemap.xml`;
					try {
						await writeFile(target, await readFile(chunk));
						await rm(`${base}sitemap-0.xml`);
						await rm(`${base}sitemap-index.xml`);
					} catch {}
				},
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
