/**
 * url 1.0.0
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && 
    typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.url = factory());
}(this, (function() {
    'use strict';

    var Vue;
    function install(_Vue) {
        if (Vue) {
            console.error(
                '[url] already installed. Vue.use(url) should be called only once.'
            );
            return
        }
        Vue = _Vue;
        Vue.prototype.$url = new Url();
    }

    // 创建url实例
    function Url (){}
    // 创建url实例
    Url.prototype = {
        /**
         * 设置hash
         * @param name
         */
        setHash: function(name) {
            setTimeout(function() {
                location.hash = name;
            }, 0);
        },
        /**
         * 获取当前url中的hash值
         * @param url
         * @return String
         */
        getHash: function(url) {
            var u = url || location.hash;
            return u ? u.replace(/.*#/, "") : "";
        },
        /*
         *   根据hash获取对应的模块名
         */
        getHashModelName: function() {
            var hash = this.getHash();
            return (hash ? hash.split("&")[0].split("=")[0] : []);
        },
        /*
         *   从hash中获取action
         */
        getHashActionName: function() {
            var hash = this.getHash();
            if (hash == "") return "";
            return (hash ? hash.split("&") : [])[0].split("=")[1];
        },
        /*
         * 从hash中获取name对应的值
         */
        getHashParam: function(name) {
            var result = this.getHash().match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
            return result != null ? result[2] : "";
        },
        /*
         *   从URL中获取参数对应的值
         */
        getUrlParam: function(name, url) {
            //参数：变量名，url为空则表从当前页面的url中取
            var u = arguments[1] || window.location.search;
            if (!u) {
                return '';
            }
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
                r = u.substr(u.indexOf("\?") + 1).match(reg);
            return r != null ? r[2] : "";
        },
        /*
         *   获取所有HASH的参数，剔除model.
         */
        getParams: function() {
            var param = [],
                hash = this.getHash();
            paramArr = hash ? hash.split("&") : [];
            for (var i = 1, l = paramArr.length; i < l; i++) {
                param.push(paramArr[i]);
            }
            return param;
        },
        decodeUrl: function(url) {
            url = decodeURIComponent(url);
            var urlObj = this.parseUrl(url),
                decodedParam = [];
            $.each(urlObj.params, function(key, value) {
                value = decodeURIComponent(value);
                decodedParam.push(key + "=" + value);
            });
            var urlPrefix = url.split("?")[0];
            return urlPrefix + "?" + decodedParam.join("&");
        },
        parseUrl: function(url) {
            var a = document.createElement('a');
            a.href = url;
            return {
                source: url,
                protocol: a.protocol.replace(':', ''),
                host: a.hostname,
                port: a.port,
                query: a.search,
                params: (function() {
                    var ret = {},
                        seg = a.search.replace(/^\?/, '').split('&'),
                        len = seg.length,
                        i = 0,
                        s;
                    for (; i < len; i++) {
                        if (!seg[i]) {
                            continue;
                        }
                        s = seg[i].split('=');
                        ret[s[0]] = s[1];
                    }
                    return ret;
                })(),
                file: (a.pathname.match(/([^\/?#]+)$/i) || [, ''])[1],
                hash: a.hash.replace('#', ''),
                path: a.pathname.replace(/^([^\/])/, '/$1'),
                relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
                segments: a.pathname.replace(/^\//, '').split('/')
            };
        },
        replaceParam: function(param, value, url, forceReplace) {
            url = url || location.href;
            var reg = new RegExp("([\\?&]" + param + "=)[^&#]*");
            if (!url.match(reg)) {
                return (url.indexOf("?") == -1) ? (url + "?" + param + "=" + value) : (url + "&" + param + "=" + value);
            }
            if (forceReplace) {
                return url.replace(reg, function($0, $1) {
                    return $1 + value;
                });
            }
            return url;
        },
        /**
         * 批量替换url参数
         * @param  {[type]} urlStr [description]
         * @param  {[type]} param  [description]
         * @return {[type]}        [description]
         */
        replaceParams: function(urlStr, param) {
            var orginUrl = urlStr;
            if (typeof param == 'string') {
                var paramData = param.split('&');
            } else if (typeof param == 'object' && !param.slice) {
                var paramData = [];
                for (var key in param) {
                    paramData.push(key + '=' + param[key]);
                }
            }
            for (var i = 0; i < paramData.length; i++) {
                var keyVal = paramData[i].split('=');
                orginUrl = this.replaceParam(keyVal[0], keyVal[1] || '', orginUrl, true);
            }
            return orginUrl;
        },
        getHashObj: function(v) {
            var href = v || location.href;
            var theRequest = {},
                pound = '',
                l = 0,
                hash = this.getHash(),
                paramArr = [];
            if (hash) {
                paramArr = hash.split("&");
                for (var i = 0, l = paramArr.length; i < l; i++) {
                    theRequest[paramArr[i].split("=")[0]] = unescape(paramArr[i].split("=")[1]);
                }
            }
            return theRequest;
        },
        getParamsObj: function(v) {
            var v = v || location.href;
            var theRequest = {},
                hash = '',
                params = '',
                str = '',
                paramArr = [];
            if (v.indexOf("?") != -1) {
                str = v.substr(v.indexOf("?") + 1);
                if (str.indexOf('#') > -1) {
                    hash = str.substr(str.indexOf('#'));
                    params = str.substr(0, str.indexOf('#'));
                } else {
                    params = str;
                }
                paramArr = params.split("&");
                for (var i = 0; i < paramArr.length; i++) {
                    theRequest[paramArr[i].split("=")[0]] = unescape(paramArr[i].split("=")[1]);
                }
                if (hash.length > 0) {
                    //theRequest['#'] = hash;
                }
            }
            return theRequest;
        },
        getUrlObj: function(v) {
            var v = v || location.href;
            return {
                param: this.getParamsObj(v),
                hash: this.getHashObj(v)
            };
        },
        /**
         * Build url from a object
         * url.makeUrl({hash: {a: 1}: param: {b: 2}});
         * url.makeUrl('www.baidu.com', {hash: {a: 1}: param: {b: 2}});
         * url.makeUrl('www.baidu.com', {hash: {a: 1}: param: {b: 2}}, false);
         * url.makeUrl('www.baidu.com', {a:1, b:2});
         * 
         * @param  {string} [v]       default to window.location.href
         * @param  {object} [params]  {hash: {a: 1}: param: {b: 2}}
         * @param  {boolean} [keepOld] default to true, keep old params or not
         * @return {string}  URL
         */
        makeUrl: function(v, params, keepOld) {
                var paramStr = '',
                    hashStr = '',
                    k = null,
                    obj = null,
                    paramObj = null,
                    hashObj = null;
                (typeof(arguments[1]) === 'boolean') && (keepOld = arguments[1]);
                (typeof(arguments[0]) === 'object') && (params = arguments[0]) && (v = location.href);
                v = v || location.href;
                obj = this.getUrlObj(v);
                params = params || obj;
                if (params.param || params.hash) {
                    paramObj = params.param ? params.param : {};
                    hashObj = params.hash ? params.hash : {};
                } else {
                    paramObj = params;
                    hashObj = {};
                }
                (keepOld === undefined) && (keepOld = true);

                if (keepOld) {
                    for (k in paramObj)
                        if (paramObj[k] === undefined)
                            delete obj.param[k];
                        else
                            obj.param[k] = paramObj[k]
                    for (k in hashObj)
                        if (hashObj[k] === undefined)
                            delete obj.hash[k];
                        else
                            obj.hash[k] = hashObj[k];

                    paramObj = obj.param;
                    hashObj = obj.hash;
                }
                for (k in paramObj) {
                    paramStr += k + '=' + encodeURIComponent(paramObj[k]) + '&';
                }
                for (k in hashObj) {
                    hashStr += k + '=' + encodeURIComponent(hashObj[k]) + '&';
                }
                (paramStr.length) && (paramStr = paramStr.substring(0, paramStr.length - 1));
                (hashStr.length) && (hashStr = hashStr.substring(0, hashStr.length - 1));

                v = v.replace(/\?.*/i, '').replace(/\#.*/i, '');
                (paramStr) && (v += '?' + paramStr);
                (hashStr) && (v += '#' + hashStr);
                return v;
            }
            /**
             * 添加url参数
             * @author delanhuang
             * @param string url 需要修改的url
             * @param string param 参数名
             * @param string value 参数值
             * @examples
             * var newUrl = addUrlParam('http://www.example.com?medebug=1#index=init', 'my', 1);
             * //上面返回：http://www.example.com?medebug=1&my=1#index=init
             */
            ,
        addUrlParam: function(url, param, value) {
                var a = document.createElement('a'),
                    regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/gi;
                var match, str = [];
                a.href = url;
                while (match = regex.exec(a.search)) {
                    if (encodeURIComponent(param) != match[1]) {
                        str.push(match[1] + (match[2] ? "=" + match[2] : ""));
                    }
                }
                str.push(encodeURIComponent(param) + (value ? "=" + encodeURIComponent(value) : ""));
                a.search = str.join("&");
                return a.href;
            }
            /**
             * 添加mdebug参数
             */
            ,
        addDebugParam: function(url) {
            var mdebug = module.exports.getUrlParam('mdebug');
            if (mdebug) {
                url = module.exports.addUrlParam(url, 'mdebug', mdebug);
            }

            return url;
        }
    };

    var index = {
        install: install,
        url: new Url(),
        version: '1.0.0'
    };

    return index;
})));