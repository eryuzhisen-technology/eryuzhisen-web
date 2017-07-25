var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./config')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var os = require('os'); 
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


// 项目区分name = npm run dev pc
// 页面区分page = npm run dev pc index
var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
}   catch(ex) {
    argv = process.argv;
}
var project_name = argv[2] || 'pc';
var page_name = argv[3] || '';
    page_name = page_name.split(',');

// 项目定义enter入口
// 项目定义html
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

    var pageSource = glob.sync(resolve('/src/common/html/'+ project_name +'.html'))[0];
    var jsSource = glob.sync(resolve('/src/view/**/*.js'));
    if (!pageSource || !jsSource) {
        return source;
    }

    // 根据项目区分 | 页面区分进行筛选
    for (var i = 0, len = jsSource.length; i < len;) {
        var _module = jsSource[i];
        if (_module && _module.indexOf('/view/'+ project_name) < 0) {
            jsSource.splice(i, 1);
        } else {
            i++;
        }
    }
    for (var i = 0; i < jsSource.length;) {
        var isHave = false;
        var _module = jsSource[i];
   
        for (var j = 0, _len = page_name.length; j < _len; j++) {
            if (_module && _module.indexOf('/view/'+ project_name + '/' + page_name[j]) > -1) {
                isHave = true;
                break;
            }
        }

        if (!isHave) {
            jsSource.splice(i, 1);
        } else {
            i++;
        }
    }

    jsSource.forEach(function(item) {
        var name = path.basename(item, '.js');
        source.htmlFiles.push({
            filename: 'html/' + name + '.html',
            pageSource: pageSource,
            jsChunkName: name,
            favicon: resolve('/src/common/images/favicon.png')
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
            '@': resolve('./src'),
            '@common': resolve('./src/common'),
            '@css': resolve('./src/common/css'),
            '@js': resolve('./src/common/js'),
            '@lib': resolve('./src/lib'),
            '@server': resolve('./src/server'),
            '@component': resolve('./src/component')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: process.env.NODE_ENV === 'production'
                          ? config.build.productionSourceMap
                          : config.dev.cssSourceMap,
                        extract: process.env.NODE_ENV === 'production'
                    })
                }
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
            $: project_name == 'mb' ? 'webpack-zepto' : 'jquery',
            'zepto': project_name == 'mb' ? 'webpack-zepto' : 'jquery',
            'jQuery': project_name == 'mb' ? 'webpack-zepto' : 'jquery'
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