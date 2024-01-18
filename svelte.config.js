import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter({
      strict: false,
      pages: 'build',
      assets: 'build'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/gubasso.xyz' : ''
    }
  }
}

export default config
