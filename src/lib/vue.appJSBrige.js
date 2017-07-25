/**
 * appJSBrige 1.0.0
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && 
    typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.appJSBrige = factory());
}(this, (function() {
    'use strict';
    function getUrlParam(name, url) {
        //参数：变量名，url为空则表从当前页面的url中取
        var u = arguments[1] || window.location.search;
        if (!u) {
            return '';
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    }

    var Vue;
    function install(_Vue) {
        if (Vue) {
            console.error(
                '[appJSBrige] already installed. Vue.use(appJSBrige) should be called only once.'
            );
            return
        }
        Vue = _Vue;
        Vue.prototype.$appJSBrige = new AppJSBrige();
    }

    // 创建url实例
    function AppJSBrige (){
        this.isApp = getUrlParam('isAppIOS') == 1 || getUrlParam('isAppAndroid') == 1;
        this.isIos = getUrlParam('isAppIOS');
        this.isAndroid = getUrlParam('isAppAndroid') == 1;
    }
    // 创建url实例
    AppJSBrige.prototype = {
        executeFn: function(name, data){
            var data = data || {};
            if (!this.isApp) {
                console.log('error - no AppJSBrige:' + JSON.stringify(data));
                return false;
            }
            if (this.isIos) {
                window.webkit.messageHandlers[name].postMessage(data);
            }
        }
    };

    var index = {
        install: install,
        appJSBrige: new AppJSBrige(),
        version: '1.0.0'
    };

    return index;
})));