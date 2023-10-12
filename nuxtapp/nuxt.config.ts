// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../base', // Extend from a local layer
  ],
  typescript: {
    includeWorkspace: true,
  },
});
