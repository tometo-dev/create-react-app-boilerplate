const presets = [
  [
    "@babel/preset-env", {
      debug: true,
      useBuiltIns: "usage",
      corejs: 3,
    }
  ],
]

const plugins = []

module.exports = { presets, plugins }