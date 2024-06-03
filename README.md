# EntityDecode

A fully client-side tool to encode and decode HTML Entities from text (e.g. `&raquo;` → `»`)  and decode URL components (e.g. `%23` → `#`)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/RobBrazier/entitydecode.com/fly.yml)
![Codacy grade](https://img.shields.io/codacy/grade/a003cbb1e93148e8bd7ef0cfc0243ce0)
![GitHub License](https://img.shields.io/github/license/RobBrazier/entitydecode.com)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
## Running Locally

Packages are installed with [pnpm](https://pnpm.io/)

```bash
pnpm install
```

To run the app, use
```bash
pnpm run dev
```
## Maintenance

I may do the occasional rewrite of this app as a test for other technologies, but remain the same functionality.

It's essentially feature complete for what I have intended to write, so just 'maintenance mode' - responding to dependabot constantly pinging me about dependencies needing to be updated.
## Deployment

This project is deployed on fly.io via a Docker Container (Dockerfile in the root of the repo)

This can also be deployed anywhere as a static site (e.g. Vercel, Netlify) by using the standard Astro preset.

**DISCLAIMER** No support is provided for other deployments - this is intended as a small tool that I have deployed for my use.
