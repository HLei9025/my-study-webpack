
const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output:{ // 指定输出选项
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ // 所有 webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),// 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面的名称
        })
    ],
    module: { // 配置所有的第三方loader模块
        rules: [ // 第三方模块的匹配规则
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg|JPG)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是byte，如果我们应用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64格式的字符串
            { test: /\.(ttf|svg|eot|woff|woff2)$/, use: 'url-loader'}, //处理字体的 loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } //配置babel来转换高级大的ES语法
        ]
    }
}