/************************************************************************************************************/
var chalk = require('chalk')  // 控制台输出样式
var semver = require('semver') // 版本对比，运算
var packageConfig = require('../package.json')

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  },
  {
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  }
]

var warnings = []
for (var i = 0; i < versionRequirements.length; i++) {
var mod = versionRequirements[i]
if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
  warnings.push(mod.name + ': ' +
    chalk.red(mod.currentVersion) + ' should be ' +
    chalk.green(mod.versionRequirement)
  )
}
}

if (warnings.length) {
console.log('')
console.log(chalk.yellow('To use this template, you must update following to modules:'))
console.log()
for (var i = 0; i < warnings.length; i++) {
  var warning = warnings[i]
  console.log('  ' + warning)
}
console.log()
process.exit(1)
}
/************************************************************************************************************/

// 设置开发环境
var config = require('./config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
// 项目区分name = npm run dev pc
// 页面区分page = npm run dev pc index
var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
}   catch(ex) {
    argv = process.argv;
}
var project_name = argv[2] || 'pc';

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    })
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(express.static(staticPath))

var uri = 'http://localhost:' + port + '/dist/'+project_name+'/html/index.html'

devMiddleware.waitUntilValid(function() {
    console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})