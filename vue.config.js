const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	devServer: {
		client: {
			overlay: false,
		},
		// 此处为前端代理，解决跨域问题
		proxy: {
			// /api 是请求的前缀
			'/api': {
				target: 'http://localhost:5000',
				// 重写路径，把所有路径中包含/api的路径替换为空字符串
				pathRewrite: { '^/api': '' },
				// 用于支持websocket
				ws: true,
				// 用于控制请求头中的host值
				changeOrigin: true,
			},
		},
	},
});
