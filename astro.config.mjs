import { defineConfig } from 'astro/config';
import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Set `SITE_REPO` for a project page; leave it empty for username.github.io.
const repository = process.env.SITE_REPO ?? '';
const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const dependenciesRoot = realpathSync(new URL('./node_modules', import.meta.url));
const researchConfigPath = fileURLToPath(new URL('./src/data/research.ts', import.meta.url));
/** @type {string | undefined} */
let lastCompleteResearchConfig;

/** @type {import('vite').Plugin} */
const stableResearchConfig = {
  name: 'stable-research-config',
  enforce: 'pre',
  async load(id) {
    if (id.split('?')[0] !== researchConfigPath) return null;

    let source = '';
    for (let attempt = 0; attempt < 6; attempt += 1) {
      source = await readFile(researchConfigPath, 'utf8');
      if (source.trimEnd().endsWith('};')) {
        lastCompleteResearchConfig = source;
        return source;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (lastCompleteResearchConfig) return lastCompleteResearchConfig;
    return source;
  },
};

export default defineConfig({
  site: 'https://kelthuzadyl.github.io',
  base: repository ? `/${repository}` : '/',
  trailingSlash: 'never',
  vite: {
    plugins: [stableResearchConfig],
    server: {
      fs: {
        allow: [projectRoot, dependenciesRoot],
      },
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 300,
          pollInterval: 50,
        },
      },
    },
  },
});
