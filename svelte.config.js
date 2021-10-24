/** @type {import('@sveltejs/kit').Config} */
//import adapter from '@sveltejs/adapter-vercel';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
// const pkg = require('./package.json');
//import adapter from '@sveltejs/adapter-node';
//import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
		// adapter: adapter({
		// 	// default options are shown
		// 	out: 'build',
		// 	precompress: false,
		// 	env: {
		// 		host: 'HOST',
		// 		port: 'PORT'
		// 	}
		// }),
		target: '#svelte',
		vite: {
			ssr: {
			  noExternal: Object.keys(pkg.dependencies || {}),
			},
		  },
	},
};

export default config;