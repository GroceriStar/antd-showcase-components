'use strict'

const path = require('path')

const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
]

const plugins = [
  [
    require.resolve('@babel/plugin-proposal-class-properties')
  ],
  [
    require.resolve('@babel/plugin-transform-react-jsx')
  ],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '~': './src/components',
        '@v': './src/views'
      }
    }
  ]

]

module.exports = { presets, plugins }
