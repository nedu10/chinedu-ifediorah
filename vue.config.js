var manifestJSON = require("./public/manifest.json");

pwaArgs = {
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color
};

module.exports = {
  lintOnSave: false,
  pwa: {
    themeColor: "#ba00db",
    "msapplication-TileColor": "#000"
  },
  configureWebpack: {
    entry: ["babel-polyfill", "whatwg-fetch", "./src/main.js"]
  },
  chainWebpack: config => {
    config.plugin("pwa").tap(args => {
      return [pwaArgs];
    });
  }
};
