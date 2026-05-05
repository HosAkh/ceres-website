import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// Use a custom flag so Cloudflare Pages builds (which also run in CI)
// correctly get base '/' instead of the GitHub Pages sub-path.
const forGitHubPages = process.env.DEPLOY_FOR_GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';

export default defineConfig({
  site: forGitHubPages && owner ? `https://${owner}.github.io` : 'https://ceres.majorkeysse.com',
  base: forGitHubPages && repo ? `/${repo}` : '/',
  integrations: [
    preact({ compat: true }),
    tailwind({ applyBaseStyles: false }),
  ],
});
