import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-static'

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
    paths: {
      // base: process.env.NODE_ENV === 'production' ? '/gubasso.xyz' : ''
      base: ''
    }
  }
}

export default config
