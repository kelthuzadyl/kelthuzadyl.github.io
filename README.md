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

## License and reuse

The website source and template are free to use, modify, and distribute under the [MIT License](LICENSE). When creating your own site, replace the personal biography, portrait, publication text, and media with your own material.

Personal images, publication videos, paper content, and other research assets are not covered by the MIT License and remain the property of their respective copyright holders.
