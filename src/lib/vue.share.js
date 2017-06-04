/**
 * share 1.0.0
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && 
    typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.share = factory());
}(this, (function() {
    'use strict';

    var Vue;
    
    function install(_Vue) {
        if (Vue) {
            console.error(
                '[share] already installed. Vue.use(share) should be called only once.'
            );
            return
        }
        Vue = _Vue;
        Vue.prototype.$share = new Share();
    }

    // 创建Share实例
    function Share (){
        this.memStoreMap = {};
    }
    // 创建url实例
    Share.prototype = {
        shareToAPP (option){
            var app = option.app;
            switch (app){
                case 'qq':
                    this.shareToQQ(option);
                    break;
                case 'tb':
                    this.shareToTieba(option);
                    break;
                case 'kong':
                    this.shareToQzone(option);
                    break;
                case 'wb':
                defalt:
                    this.shareToSinaWB(option);
                    break;
            }
        },
        shareToSinaWB (option){            
            var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey，必选参数 
                _shareUrl += '&url='+ encodeURIComponent(option.url||document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
                // _shareUrl += '&title=' + encodeURIComponent(option.title||document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
                _shareUrl += '&title=' + encodeURIComponent(option.desc||'');    //参数title设置分享的标题|默认当前页标题，可选参数
                _shareUrl += '&source=' + encodeURIComponent(option.source||'');
                _shareUrl += '&sourceUrl=' + encodeURIComponent(option.sourceUrl||'');
                _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
                _shareUrl += '&pic=' + encodeURIComponent(option.pic||'');  //参数pic设置图片链接|默认为空，可选参数
                window.open(_shareUrl,'width='+option.width+',height='+option.height+',top='+option.top+',left='+option.left+',toolbar=no,menubar=no,scrollbars=no, resizable=1,location=no,status=0');
        },
        shareToQzone (option){
            var _shareUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
                _shareUrl += 'url=' + encodeURIComponent(option.url||document.location);   //参数url设置分享的内容链接|默认当前页location
                _shareUrl += '&desc=' + encodeURIComponent(option.desc||'分享的描述');    //参数desc设置分享的描述，可选参数
                _shareUrl += '&summary=' + encodeURIComponent(option.summary||'分享摘要');    //参数summary设置分享摘要，可选参数
                _shareUrl += '&title=' + encodeURIComponent(option.title||document.title);    //参数title设置分享标题，可选参数
                _shareUrl += '&site=' + encodeURIComponent(option.site||'');   //参数site设置分享来源，可选参数
                _shareUrl += '&pics=' + encodeURIComponent(option.pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
                window.open(_shareUrl,'width='+option.width+',height='+option.height+',top='+option.top+',left='+option.left+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
        },
        shareToTieba (option){
            var _shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi?';
                _shareUrl += 'title=' + encodeURIComponent(option.title||document.title);  //分享的标题
                _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
                _shareUrl += '&desc=' + encodeURIComponent(option.desc||'分享的描述');    //参数desc设置分享的描述，可选参数
                _shareUrl += '&url=' + encodeURIComponent(option.url||document.location);  //分享的链接
                _shareUrl += '&pics=' + encodeURIComponent(option.pic||'');    //分享的图片
                window.open(_shareUrl,'width='+option.width+',height='+option.height+',left='+option.left+',top='+option.top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
        },
        shareToQQ (option){
            var _shareUrl = 'http://connect.qq.com/widget/shareqq/index.html?';
                _shareUrl += 'url=' + encodeURIComponent(option.url||document.location);   //参数url设置分享的内容链接|默认当前页location
                _shareUrl += '&desc=' + encodeURIComponent(option.desc||'分享的描述');    //参数desc设置分享的描述，可选参数
                _shareUrl += '&summary=' + encodeURIComponent(option.summary||'分享摘要');    //参数summary设置分享摘要，可选参数
                _shareUrl += '&title=' + encodeURIComponent(option.title||document.title);    //参数title设置分享标题，可选参数
                _shareUrl += '&site=' + encodeURIComponent(option.site||'');   //参数site设置分享来源，可选参数
                _shareUrl += '&pics=' + encodeURIComponent(option.pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
                window.open(_shareUrl,'width='+option.width+',height='+option.height+',top='+option.top+',left='+option.left+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');          
        }
    };

    var index = {
        install: install,
        version: '1.0.0'
    };

    return index;
})));