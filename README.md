# Astro Decap Site Builder



Astro Decap Site Builder is a modular static-site builder for developers who want fast, secure, and maintainable websites without databases or server dependencies. Built on Astro, styled with Tailwind CSS, and powered by DecapCMS, it follows a strict atomic-design architecture.

## Demo & Screenshots

🌐 Live Demo

Explore the builder in action:

**Landing Page Example**

**Blog Listing & Article**

**Modular Block Layout**

>Screenshots highlight how pages are composed from reusable blocks, styled with Tailwind, and managed through DecapCMS. Fully static and production-ready.

## Features

* Modular, block-based page building
* JSON-driven content structure
* MDX-based blog system
* Atomic design (atoms, molecules, organisms)
* Centralized UI components
* Global JSON configuration (/src/config/*.json)
* DecapCMS integration (collections, widgets)
* Zero-backend, fully static output
* Hot-reload for rapid development

## Quick Folder Structure
```css
components/
├── atoms/
├── molecules/
├── organisms/
└── ui/
src/
├── pages/
├── content/
│   ├── pages/
│   └── articles/
├── config/
└── layouts/
```

## Installation

```bash
git clone https://github.com/your-user/astro-decap-site-builder.git

cd astro-decap-site-builder
npm install
npm run dev
```

Run Decap CMS

```bash
npx decap-server
```

Build and preview:

```bash
npm run build
npm run preview
```

Final static files are in /dist ready for deployment.

## Deployment

Works on:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Any static hosting (just upload /dist)

## Contributing & Support ❤️

This project is free, open, and created to help anyone build clean, minimal, and reliable static sites.
If this system saves you time or improves your workflow, consider supporting:

👉 [Buy me a coffee](https://buymeacoffee.com/creos.sk) ❤️

GitHub Sponsors support will be added soon.

Created by **Pali from Creos**.

## License

Completely free to use, modify, and adapt. Support is appreciated but optional.

