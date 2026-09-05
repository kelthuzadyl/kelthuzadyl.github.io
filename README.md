# Research homepage

An Astro template for a personal research homepage, designed for GitHub Pages.

## Edit the content

All personal content lives in [`src/data/research.ts`](src/data/research.ts). Update the profile fields, social links, and the entries in `papers`. Each paper supports a title, venue, year, authors, summary, links, and an optional preview video.

The current portrait is stored at `public/profile_square.jpg`. Replace that file to use a different image, or change the `portrait` value in the config.

## Run locally

```bash
npm install
npm run dev
```

To verify the production output:

```bash
npm run check
npm run build
```

## Deploy to GitHub Pages

The included workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. For the account site `kelthuzadyl.github.io`, the default root base path is correct. For a project site, set the repository name when building:

```bash
SITE_REPO=your-repository npm run build
```

In the repository settings, set **Pages / Source** to **GitHub Actions**.

### Optional Cloudflare analytics

Analytics are disabled by default so people who clone this template cannot accidentally send traffic to your Cloudflare property. To enable them for your own site:

1. Create a Cloudflare Web Analytics property and copy its beacon token.
2. In the GitHub repository, open **Settings / Secrets and variables / Actions** and add a repository secret named `CLOUDFLARE_ANALYTICS_TOKEN`.
3. Push to `main` or run the deployment workflow manually.

The workflow exposes that secret as `PUBLIC_CF_ANALYTICS_TOKEN` only while building the production site. The token is expected to be visible in the generated HTML, but it must be unique to your own Cloudflare property. Do not use a Cloudflare API token or account key here.

For local production builds, copy `.env.example` to `.env.local` and fill in your own token. If a token has ever been committed publicly, rotate or replace it in Cloudflare after moving it to the secret above.

## License and reuse

The website source and template are free to use, modify, and distribute under the [MIT License](LICENSE). When creating your own site, replace the personal biography, portrait, publication text, and media with your own material.

Personal images, publication videos, paper content, and other research assets are not covered by the MIT License and remain the property of their respective copyright holders.
