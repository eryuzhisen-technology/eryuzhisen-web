# eryuzhisen - web项目
> * Web前端代码结构
> * 项目框架实现：webpack + vue + vuex + less
> * JS文件规范：babel + ES6
> * vue文件规范：vue文件包括了 js 、 html、 css
> 	* js 用vue框架写，处理业务逻辑、渲染逻辑，数据结构
>   * html 用template模块结合vue指令来写，尽量不写复杂的条件或者执行代码
>   * css 样式用less语言来写，css有default.less设计规范，common.less通用基类样式，component.less通用组件样式

## 项目结构
```
----build  ## 本地工程化配置文件（webpack） 
----config ## 本地工程化配置文件
----dist ## 工程化编译后的生产环境代码文件
    |----css ## 样式文件
    |----html ## html入口文件
    |----images ## 图片资源
    |----js ## js模块
    |----manifest.json ## 项目模块依赖结构
----n  ## node代码文件 -- 后续会抽离出去 
----p  ## php代码文件 -- 后续会抽离出去
    |----application  ## 应用模块
    |----system       ## 系统核心模块
    |----index.php    ## php入口文件
----src ## 源代码文件
    |----common ## 公共文件
        |----css  ## 样式文件
        |----html  ## 入口模板
        |----iamges ## 图片资源
        |----js  ## 公共js模块
   |----component ## 业务公共组件模块
   |----lib ## 类库模块
   |----server ## 数据交互模块（可mock数据）
   |----view ## 页面入口文件
        |----article  ## 文章类的页面
        |----author  ## 作者类的页面
        |----company  ## 公司类的页面：关于、联系等
        |----index  ## 首页：发现、标签页
        |----mark  ## 收藏、历史页面
        |----message  ## 消息页面
        |----search  ## 搜索页面
        |----setting  ## 个人设置页面
        |----user  ## 用户登陆、注册、找回页面
            |##------------------------------------
            |页面结构，每一个页面都规范这个结构
            |----*.js 页面入口模块，处理一些模块引用、配置、初始化
            |----*.vue 页面业务模块，处理页面结构、渲染、数据交互
            |##-------------------------------------
```

## 开发操作
``` bash
#前提安装 node 和 npm
#设置好环境变量

# install dependencies
# 安装目录所需的依赖
npm install

# serve with hot reload at localhost:8080
# 本地开发 - 时时编译
npm run dev

# build for production with minification
# 编译生产环境文件 -> dist文件夹中
npm run build
```
