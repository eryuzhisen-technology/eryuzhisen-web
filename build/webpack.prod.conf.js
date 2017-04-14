var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 插件
baseWebpackConfig.plugins = baseWebpackConfig.plugins.concat(function() {
    var arr = [];
    baseWebpackConfig.htmlFiles.forEach(function(htmlFile) {
        arr.push(
            // html
            new HtmlWebpackPlugin({
                template: htmlFile.pageSource,
                filename: htmlFile.filename,
                inject: 'body',
                hash: true,
                cache: true,
                showErrors: true,
                chunks: [htmlFile.jsChunkName, 'vendor', 'manifest'],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
            })
        );
    });
    return arr;
}());
delete baseWebpackConfig.htmlFiles;

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[chunkhash].js',
        publicPath: '/dist/'
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    plugins: [
        // copy static
        new CopyWebpackPlugin([{
            from: path.join(__dirname + '/../src/common/images'),
            to: path.join(__dirname + '/../dist/images'),
            toType: 'dir'
        }]),
        // 魔法变量
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        // 模块压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // css模块提取出来
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin()
    ]
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig