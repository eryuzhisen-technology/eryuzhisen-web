var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')
var sourceObj = getSource();

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// 获取源文件
function getSource(){
    var source = {
        htmlFiles: [],
        entry: {}
    };

    var entry = {};
    var pageSource = glob.sync(resolve('/src/view/**/*.html'));
    var jsSource = glob.sync(resolve('/src/view/**/*.js'));

    jsSource.forEach(function(item) {
        entry[path.basename(item, '.js')] = item;
    });

    pageSource.forEach(function(page) {
        var jsChunkName = path.basename(page, '.html');
        source.htmlFiles.push({
            filename: 'html/' + path.basename(page),
            pageSource: page,
            jsChunkName: jsChunkName
        });

        source.entry[jsChunkName] = entry[jsChunkName];
    });
    return source;
}

module.exports = {
    htmlFiles: sourceObj.htmlFiles,
    entry: sourceObj.entry,
    resolve: {
        extensions: ['.js', '.vue', '.css', '.less', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }, 
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            }, 
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }, 
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 提前加载模块并全局
        new webpack.ProvidePlugin({
            $: 'webpack-zepto'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
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
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
}