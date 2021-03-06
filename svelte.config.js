import { windi } from 'svelte-windicss-preprocess';
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [windi(), preprocess()],

	kit: {
		adapter: staticAdapter(),
		target: '#svelte'
	}
};

export default config;
