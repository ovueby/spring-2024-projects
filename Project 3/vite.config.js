import { resolve } from 'path'

import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      '~bootstrap-icons': resolve(__dirname, 'node_modules/bootstrap-icons')
    }
  },
	base: '/project-3',
	server: {
	  port: 8080,
	  hot: true
	},

	plugins: [preact()],
});
