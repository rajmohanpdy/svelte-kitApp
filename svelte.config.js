/** @type {import('@sveltejs/kit').Config} */
//import adapter from '@sveltejs/adapter-vercel';
//import adapter from '@sveltejs/adapter-static';
import adapterNetlify from '@sveltejs/adapter-netlify'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json');


const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//adapter: adapter(),
		adapter: adapterNetlify(),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			},
		},
	}
};

export default config;