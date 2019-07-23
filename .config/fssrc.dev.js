import path from 'path'
import fs from 'fs'
import serve from 'rollup-plugin-dev-server'
import livereload from 'rollup-plugin-livereload'
import config from './fssrc'

const devPlugins = [
  serve({
    port: 8080,
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
      passphrase: ''
    },
    allowCrossOrigin: true,
    contentBase: path.dirname(__dirname)
  }),
  livereload(path.resolve(__dirname, '..', 'lib'))
]

config.entry.slice(1).forEach(o => {
  o.plugins.push(...devPlugins)
})

export default config
