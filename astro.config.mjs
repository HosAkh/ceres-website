import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

const forGitHubPages = process.env.DEPLOY_FOR_GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';

export default defineConfig({
  site: forGitHubPages && owner ? `https://${owner}.github.io` : 'https://cerestech.co',
  base: forGitHubPages && repo ? `/${repo}/` : '/',
  integrations: [
    preact({ compat: true }),
    tailwind({ applyBaseStyles: false }),
  ],
});
