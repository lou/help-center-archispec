# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local Development

```bash
pnpm start
```

French is the default locale. To preview English:

```bash
pnpm start:en
```

Or pass the locale directly (without an extra `--`):

```bash
pnpm start --locale en
```

### Test the language switcher locally

The dev server only serves **one locale at a time** (Docusaurus limitation). To use the FR/EN dropdown, build and serve the production output:

```bash
pnpm preview
```

Then open [http://localhost:3000](http://localhost:3000) — both `/` and `/en/` are available.

## Internationalization

- French source docs: `docs/`
- English translations: `i18n/en/docusaurus-plugin-content-docs/current/`
- French UI strings for Typesense search: `i18n/fr/code.json` (needed because `docusaurus-theme-search-typesense` does not load the built-in Algolia FR translations)
- After adding or renaming French pages, run `pnpm write-translations -- --locale en` to refresh translation keys, then update the English files.

URLs:
- French: `https://help.archispec.fr/`
- English: `https://help.archispec.fr/en/`
## Deployment


## Deploy to Production

We are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```bash
GIT_USER=<Your GitHub username> npm run deploy
```


## Add videos to the website

Videos are store in s3 bucket and are served via cloudfront.

### Upload the video
Go to s3://archispec-help-center-assets/videos/ and upload the video.

### Use the video in the website
`<VideoPlayer url="https://d3hm1231ux02pa.cloudfront.net/videos/YOUR_VIDEO_NAME.mp4" />`