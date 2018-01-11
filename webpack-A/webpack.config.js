	var htmlWebpackPlugin = require('html-webpack-plugin');
	module.exports = {
		entry: {
			main: './src/script/main.js',
			a: './src/script/a.js',
			b: './src/script/b.js',
			c: './src/script/c.js'
		},
		output: {
			path: __dirname + '/dist',
			filename: 'js/[name]-[hash].js',
			publicPath: 'http://cdn.com/'
		},
		plugins: [
			new htmlWebpackPlugin({
				filename: "index.html",
				template: "index.html",
				// 使所有script标签生成在头部
				// inject: "head",
				// 不自动注入，可以手动注入
				inject: false,
				title: "webpack is good!",
				minify: {
					removeComments: true,  // 删除注释
					collapseWhitespace: true  // 压缩（删除空格）
				}
			}),
			new htmlWebpackPlugin({
				filename: "a.html",
				template: "index.html",
				inject: false,
				title: "webpack is a!",
				// 指定载入的模块
				chunks: ['main','a']
				// 排除指定的chunk，其他的chunk都将载入
				// excludeChunks: ['b','c']
			}),
			new htmlWebpackPlugin({
				filename: "b.html",
				template: "index.html",
				inject: false,
				title: "webpack is b!",
				chunks: ['main','b']
			}),
			new htmlWebpackPlugin({
				filename: "c.html",
				template: "index.html",
				inject: false,
				title: "webpack is c!",
				chunks: ['main','c']
			})
		]
	}
