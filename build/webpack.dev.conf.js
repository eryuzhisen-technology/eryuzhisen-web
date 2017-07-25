var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ChunkManifestPlugin = require('webpack-manifest-plugin')
var WebpackChunkHash = require("webpack-chunk-hash")
var InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin")

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 项目区分name = npm run dev pc
// 页面区分page = npm run dev pc index
var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
}   catch(ex) {
    argv = process.argv;
}
var project_name = argv[2] || 'pc';

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
                favicon: htmlFile.favicon,
                chunks: [htmlFile.jsChunkName, 'vendor-modules', 'vendor-business'],
                // chunks: [htmlFile.jsChunkName, 'vendor']
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

// 分析依赖
// baseWebpackConfig.plugins = baseWebpackConfig.plugins.concat([new BundleAnalyzerPlugin()]);

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, '../dist' + project_name),
        filename: 'js/[name].js',
        publicPath: '/dist/' + project_name + '/'
    },
    module: {
        // css-loader
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        }),
        noParse: /jquery|lodash/
    },
    devtool: '#cheap-source-map',
    plugins: [
        // split vendor js into its own file
        /*new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor-business'],
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js|\.vue$/.test(module.resource) &&
                    (
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0 ||
                        module.resource.indexOf(
                            path.join(__dirname, '../src/component')
                        ) === 0 || 
                        module.resource.indexOf(
                            path.join(__dirname, '../src/lib')
                        ) === 0 ||
                        module.resource.indexOf(
                            path.join(__dirname, '../src/server')
                        ) === 0
                    )
                )
            }
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor-modules'],
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })*/
    ]
})