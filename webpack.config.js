module.exports = {
  entry: {
    "index.js": "./lib/index.js",
    "docs/index.js": "./lib/index.js"
  },
  output: {
    filename: "[name]",
    libraryTarget: 'umd',
    library: 'createElementClass',
    umdNamedDefine: true
  }
}
