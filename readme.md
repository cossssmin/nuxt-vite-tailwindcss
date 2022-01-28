# Nuxt 2 + Vite + Tailwind CSS 3.x

This is a Nuxt 2.x starter project that uses Vite and Tailwind CSS 3.x.

## HMR issues

By default, Tailwind changes aren't reflected through HMR when developing locally in Nuxt 2.x, because of an issue that Nuxt has with PostCSS 8.

To fix this, we add the following to the `nuxt.config.js` file:

```js
build: {
  loaders: {
    css: {
      modules: false, // this fixes HMR with Tailwind's JIT
    },
  },
  // ...
},
```

## Vite

The current version of `nuxt-vite` (0.3.5) is not fully compatible with Nuxt 2.x - sometimes, changes aren't reflected via HMR and you need to refresh the page.

In order to avoid this issue, the starter pins `nuxt-vite` to `0.2.4`.
