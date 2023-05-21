import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	plugins: [
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		vue({
			template: {
				compilerOptions: {
					// 将所有带media的标签名视为自定义元素
					isCustomElement: tag => tag.includes('media'),
				},
			},
		}),
	],
	// 使用@代替src作为绝对路径
	resolve: {
		alias: {
			'@': '/src',
		},
	},
})
