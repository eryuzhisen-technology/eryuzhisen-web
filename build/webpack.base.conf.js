var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')

var os = require('os'); 
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

var sourceObj = getSource();

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// 获取源文件
function getSource() {
    var source = {
        htmlFiles: [],
        entry: {}
    };

    var pageSource = glob.sync(resolve('/src/common/html/index.html'))[0];
    var jsSource = glob.sync(resolve('/src/view/**/*.js'));

    jsSource.forEach(function(item) {
        var name = path.basename(item, '.js');
        source.htmlFiles.push({
            filename: 'html/' + name + '.html',
            pageSource: pageSource,
            jsChunkName: name
        });
        source.entry[name] = item;
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
                // loader: 'babel-loader',
                loader: 'happypack/loader?id=happybabel',
                include: [resolve('src/component'), resolve('src/server'), resolve('src/view')]
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
            $: 'jquery',
            'jQuery': 'jquery'
        }),

        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool,
            cache: true,
            verbose: true
        })
    ]
}