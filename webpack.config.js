var glob = require('glob');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sourceObj = getSource();

// 获取源文件
function getSource(){
    var source = {
        htmlFiles: [],
        entry: {}
    };

    var entry = {}; // 存储 all
    var _path = path.resolve(__dirname, './static/dist');
    var pageSource = glob.sync('./static/view/**/*.html');
    var jsSource = glob.sync('./static/view/**/*.js');

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

var plugins = (function() {
    var arr = [];
    sourceObj.htmlFiles.forEach(function(htmlFile) {
        arr.push(
            new HtmlWebpackPlugin({
                template: htmlFile.pageSource,
                filename: htmlFile.filename,
                inject: 'body',
                hash: true,
                cache: true,
                showErrors: true,
                chunks: [htmlFile.jsChunkName]
            })
        );
    });
    return arr;
}());
var packCSS = new ExtractTextPlugin('css/[name].css');
plugins.push(packCSS);
plugins.push()

module.exports = {
    cache: true,
    entry: sourceObj.entry,
    output: {
        path: path.join(__dirname, './static/dist'),
        publicPath: '/static/dist/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                   'less': ExtractTextPlugin.extract({
                        loader: 'css-loader!less-loader',
                        fallbackLoader: 'vue-style-loader'
                    }),
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: "html-loader?-minimize"
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'imgs/[name]-[hash].[ext]'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.less'],
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    plugins: plugins,
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
