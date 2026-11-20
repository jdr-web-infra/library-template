import path from 'node:path'

import { liangmi } from '@liangmi/vp-config'
import type { AliasOptions } from 'vite-plus'

const alias: AliasOptions = {
  '@': path.resolve(__dirname, './src')
}

export default liangmi({
  /* Your own config, deeply merged over the preset */
  resolve: {
    alias
  },
  test: {
    alias
  }
})
