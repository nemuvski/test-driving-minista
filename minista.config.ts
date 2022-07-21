import { resolve } from 'path'
import { defineConfig } from 'minista'

const NODE_ENV = (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development'
const ROOT_DIR_PATH = resolve('src')

console.info('[BUILD MODE]', NODE_ENV)

export default defineConfig({
  base: '/sub/',
  resolve: {
    alias: [{ find: '~', replacement: ROOT_DIR_PATH }],
  },
})
