const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	devServer: {
		client: {
			overlay: false,
		},
		// 此处为前端代理，解决跨域问题
		proxy: {
			'/api': {
				target: '<url>',
				ws: true,
				changeOrigin: true,
			},
		},
	},
});
