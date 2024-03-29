// vim: set ft=javascript fdm=marker et ff=unix tw=80 sw=2:
// author: allex_wang <http://iallex.com>

import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import builtins from 'rollup-plugin-node-builtins'
import globals from '@allex/rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'

import { version, name, author, license, description, dependencies } from '../package.json'
import babelrc from '../.babelrc'

const banner = (name, short = false) => {
  let s;
  if (short) {
    s = `/*! ${name} v${version} | ${license} licensed | ${author.name || author} */`
  } else {
    s = `/**
 * ${name} v${version} - ${description}
 *
 * @author ${author}
 * Released under the ${license} license.
 */`
  }
  return s
}

const resolve = p => path.resolve(__dirname, '.', p)
const plugin = (name, ctor) => ctor ? (ctor.$name = name, ctor) : name

const plugins = [
  plugin('builtins', builtins),
  plugin('resolve'),
  plugin('typescript', typescript),
  plugin('commonjs'),
  plugin('babel', babel),
  plugin('globals', globals)
]

export default {
  destDir: resolve('../lib'),
  dependencies: { events: true, ...dependencies },
  pluginOptions: {
    babel (rollupCfg) {
      const cfg = {
        ...babelrc,
        babelrc: false,
        externalHelpers: false,
        runtimeHelpers: true
      }
      if ([ 'es', 'cjs' ].includes(rollupCfg.output.format)) {
        cfg.comments = true
      }
      return cfg
    },
    resolve: {
      alias: {
        'debug': path.resolve('../node_modules/debug/src/browser.js'),
        'readable-stream': require.resolve('rollup-plugin-node-builtins/src/es6/stream.js')
      }
    },
    commonjs: {
      sourceMap: false
    },
    replace: {
      __VERSION__: version
    },
    typescript: {
      typescript: require('@allex/typescript')
    }
  },
  entry: [
    {
      input: resolve('../src/index.ts'),
      plugins,
      output: [
        { format: 'es', file: 'animate.esm.js', banner: banner(name, true) },
        { format: 'umd', name: 'animate', file: 'animate.js', banner: banner(name) }
      ]
    }
  ]
}
