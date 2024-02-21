<!--

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt3 Contentful
- Package name: nuxt3-contentful
- Description: Nuxt module for easy integration to Contentful
-->

# Nuxt 3 Contentful Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This is a Nuxt module for easy integration to Contentful

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

## Quick Setup

1. Add `nuxt3-contentful-module` dependency to your project

```bash
# Using npm
npm install --save-dev nuxt3-contentful-module
```

2. Add `nuxt3-contentful` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt3-contentful'
  ]
})
```

That's it! You can now use Contentful in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Add Contentful settings
CONTENTFUL_SPACE_ID=<YOUR SPACE ID>   
CONTENTFUL_ACCESS_TOKEN=<YOUR ACCESS TOKEN>

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```