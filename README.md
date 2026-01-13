# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local Development

```bash
pnpm start
```
## Deployment

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Add videos to the website

Videos are store in s3 bucket and are served via cloudfront.

### Upload the video
Go to s3://archispec-help-center-assets/videos/ and upload the video.

### Use the video in the website
`<VideoPlayer url="https://d3hm1231ux02pa.cloudfront.net/videos/YOUR_VIDEO_NAME.mp4" />`