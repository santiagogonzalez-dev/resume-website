import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['/[[lang]]', '/en', '/es']
		},
		paths: {
			base:
				process.env.NODE_ENV === 'production' ? '/resume-website' : ''
		}
	}
}

export default config
