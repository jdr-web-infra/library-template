import { fileURLToPath, URL } from 'node:url'

import { liangmi } from '@liangmi/vp-config'
import type { AliasOptions } from 'vite-plus'

const alias: AliasOptions = {
  '@': fileURLToPath(new URL('src', import.meta.url))
}

export default liangmi({
  /* Your own config, deeply merged over the preset */
  pack: {
    attw: true,
    publint: true
  },
  resolve: {
    alias
  },
  test: {
    alias,
    disableConsoleIntercept: true
  },
  run: {
    tasks: {
      app: 'vpx --env-file=.env.test ./src/app.ts'
    }
  }
})
