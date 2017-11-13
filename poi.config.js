module.exports = {
  presets: [
    require('poi-preset-svelte')()
  ],
  port: 8081,
  sourceMap: process.env.NODE_ENV !== "production"
}
