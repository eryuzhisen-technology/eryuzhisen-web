var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 插件
baseWebpackConfig.plugins = baseWebpackConfig.plugins.concat(function() {
    var arr = [];
    baseWebpackConfig.htmlFiles.forEach(function(htmlFile) {
        arr.push(
            new HtmlWebpackPlugin({
                template: htmlFile.pageSource,
                filename: htmlFile.filename,
                inject: 'body',
                showErrors: true,
                chunks: [htmlFile.jsChunkName, 'vendor', 'manifest']
            })
        );
    });
    return arr;
}());
baseWebpackConfig.plugins = baseWebpackConfig.plugins.concat([
    // 定义魔法变量
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    // 模块热加载
    new webpack.HotModuleReplacementPlugin(),
    // 后页面中的报错不会阻塞，但是会在编译结束后报错
    new webpack.NoEmitOnErrorsPlugin(),
    // 用于更友好地输出webpack的警告、错误等信息
]);
delete baseWebpackConfig.htmlFiles;

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    module: {
        // css-loader
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    devtool: '#cheap-module-eval-source-map'
})