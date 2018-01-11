var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.(jpg|png|gif|svg)$/i, // 忽略大小写
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 20000,  // base64 单位 k
							name: 'assets/[name]-[hash:5].[ext]'  // 目标路径
						}
					},
					'image-webpack-loader'  // 图片压缩
				]
			},
			{
				test: /\.js$/, // 正则
				loader: 'babel-loader', // 需要同时安装babel-core包
				include: path.resolve(__dirname, 'src'), // 指定范围
				exclude: path.resolve(__dirname, 'node_modules'), // 排除
				options: {
					presets: 'ES2015' // 需要babel-preset-es2015
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1  // import文件的数量
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [
									require('postcss-import')(),  // 使import的文件也能添加前缀
									require("autoprefixer")({ 
										browsers: ['last 5 versions'] // 自动添加浏览器前缀
									})
								]
							}
						}
					}
				]
			},
			{
	      test: /\.less$/,
	      use: [
	        "style-loader", 
	        "css-loader",
	        {
	          loader: 'postcss-loader', 
	          options:{
	            plugins:function(){
	              return [ 
	                require('postcss-import')(),
	                require('autoprefixer')({
	                  browsers: ['last 5 versions']
	                })
	              ]
	            }
	          }
	        },
	        "less-loader"  // less-loader会自动处理import的文件
	      ],
	   },
	   {
	      test: /\.scss$/,
	      use: [
	        "style-loader", 
	        "css-loader",
	        {
	          loader: 'postcss-loader', 
	          options:{
	            plugins:function(){
	              return [ 
	                require('postcss-import')(),
	                require('autoprefixer')({
	                  browsers: ['last 5 versions']
	                })
	              ]
	            }
	          }
	        },
	        "sass-loader"  // less-loader会自动处理import的文件
	      ],
	    }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
			inject: 'body'
		})
	]
}