# Research homepage

An Astro template for a personal research homepage, designed for GitHub Pages.

## Edit the content

All personal content lives in [`src/data/research.ts`](src/data/research.ts). Update the profile fields, GitHub link, and the four entries in `papers`. Each paper supports a title, venue, year, authors, summary, tags, and links.

The supplied portrait is copied to `public/profile_image.PNG`. Replace that file to use a different image, or change the `portrait` value in the config.

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
