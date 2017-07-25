'use strict';

var Vue;

function install(_Vue) {
    if (Vue) {
        console.error(
            '[cache] already installed. Vue.use(cache) should be called only once.'
        );
        return
    }
    Vue = _Vue;
    Vue.prototype.$defaultData = defaultData;
}

function isIOS(){
    var ua = navigator.userAgent;
    var isIos = (ua.indexOf("iPhone") > -1
                || ua.indexOf("iPad") > -1
                || ua.indexOf("iPod") > -1);
    return isIos
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
};  

// 全站默认数据
var defaultData = {
    catalog: require('../common/images/mb/catalog-feng.png'),
	avatar: require('../common/images/img/avatar.png'),
    mbavatar: require('../common/images/mb/author-avatar.png'),
    
    // 游览器ua信息
    ua: {
        isIOS: isIOS(),
        isPC: isPC(),
        isWX: navigator.userAgent.indexOf('MicroMessenger') >= 0 ? true : false
    },
    // 内容过滤规则
    xssSimple: {
        whiteList: {},
        stripIgnoreTag: true
    },
    xssRule: {
        whiteList: {
            br: [],
            img: ["src"],
            // span: [],
            i: [],
            b: [],
            p: ['style'],
            strike: []
        },
        onTagAttr (tag, name, value, isWhiteAttr) {
            // 匹配图片地址是否合法
            if (tag === 'img' && name === 'src' && !/\.jpg$|\.jpeg$|\.png$/i.test(value) && value.indexOf('https://eryu.oss-cn-shanghai.aliyuncs.com') != 0 && value.indexOf('http://eryu.oss-cn-shanghai.aliyuncs.com') != 0) {
                return '';
            } else if (tag === 'img' && name === 'src' && value.indexOf('?') > -1) {
                value = value.substr(0, value.indexOf('?'));
                return name + '="'+ value + '"';
            }
            // 格式化文本标签
            if (tag === 'p' && name === 'style') {
                return name + '="'+ value + '"';
            }
            // 不返回任何值，表示还是按照默认的方法处理
        },
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['style', 'link', 'script', 'meta']
    },
    // PC默认资源
    pcDate: {
        enter: [
            {
                url: './about.html',
                img: require("../common/images/index/enter-1.png")
            },
            {
                url: "./explain.html",
                img: require("../common/images/index/enter-2.png")
            },
            {
                url: './login.html',
                img: require("../common/images/index/enter-3.png")
            },
            {
                url: "./mobile.html",
                img: require("../common/images/index/enter-4.png")
            }
        ]
    },
    // MB默认资源
    mbData: {
        menus: [
            {
                title: '故事',
                url: './index.html',
                page: 'index'
            },
            {
                title: '收藏',
                url: './mark.html',
                page: 'mark',
                needLogin: true
            }
        ],
        catalog: require('../common/images/mb/catalog-feng.png'),
        logo: require('../common/images/mb/logo.png'),
        domain: 'https://m.eryuzhisen.com',
        shareImg: require('../common/images/mb/share-logo.png'),
        enter: [
            {   
                img: require('../common/images/mb/enter-1.png'),
                url: './notice.html',

            },
            {
                img: require('../common/images/mb/enter-2.png'),
                url: './welfare.html'
            }
        ],
        noticeImg: require('../common/images/mb/notice.png'),
        welfareImg: require('../common/images/mb/welfare.png'),
        downUrl: 'https://itunes.apple.com/cn/app/id1218806020'
    }
}

export default {
	install,
    defaultData
};