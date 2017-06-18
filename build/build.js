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


// 项目区分name = npm run dev pc
// 页面区分page = npm run dev pc index
var argv;
try {
    argv = JSON.parse(process.env.npm_config_argv).original;
}   catch(ex) {
    argv = process.argv;
}
var project_name = argv[2] || 'pc';

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('./config')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

rm('dist/'+ project_name, err => {
    if (err) throw err
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')

        console.log(chalk.cyan('  Build complete.\n'))
    })
})