/**
 * cache 1.0.0
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && 
    typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.cache = factory());
}(this, (function() {
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
        Vue.prototype.$cache = new Cache();
    }

    // 创建Cache实例
    function Cache (){
        this.memStoreMap = {};
    }
    // 创建url实例
    Cache.prototype = {
        /*
        *   设置缓存 version,value,cacheTime
        *   @param cacheTime 毫秒
        */
        setStore:function(key,value,version,cacheTime){
            try{
                if(!window.localStorage){
                    return this;
                }
            }
            catch(e){
                return this;
            }
            var content="";
            
            if(!cacheTime){  //如果没有cacheTime，就返回吧，没有意义！
                return this;
            }
            
            var d = {};
            d.version="localCachev1";
            d.dataVersion=version;
            d.cacheTime=((new Date()).getTime()+(cacheTime?parseInt(cacheTime,10):0));
            d.content=value;
            content=JSON.stringify(d);
            
            try{
                this.memStoreMap[key] = content;
                localStorage.setItem(key, content);
            }
            catch(e){
                return this;
            }
            return this;
        },
        /*
        *   获取缓存
        */
        getStore:function(key,version,forceLocal){//forceLocal强制取localstory
            try{
                if(!window.localStorage){
                    return false;
                }
            }
            catch(e){
                return "";
            }

            var content = '';
            if(forceLocal){
                content = localStorage.getItem(key);
            }else{
                content=this.memStoreMap[key] || localStorage.getItem(key);
            }
            if(!content){return "";}
            if(content.indexOf("localCachev1")>=0){
                var d=JSON.parse(content);
                //检查数据版本是否有效
                if(d.dataVersion!=version){
                    return "";
                }
                //检查cache是否有效
                if(d.cacheTime>=(new Date()).getTime()){
                    return d.content;
                }else{
                    this.removeStore(key);
                    return "";
                }
            }else{
                return content;
            }
        },
        /*
        *   删除缓存
        */
        removeStore:function(key){
            try{
                if(!window.localStorage){
                    return this;
                }
            }
            catch(e){
                return this;
            }
            localStorage.removeItem(key);
            this.memStoreMap[key] = undefined;
            delete this.memStoreMap[key];
            return this;
        }
    };

    var index = {
        install: install,
        version: '1.0.0'
    };

    return index;
})));