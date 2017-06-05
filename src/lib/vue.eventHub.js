/**
 * eventHub 1.0.0
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && 
    typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.eventHub = factory());
}(this, (function() {
    'use strict';

    var Vue;
    function install(_Vue) {
        if (Vue) {
            console.error(
                '[eventHub] already installed. Vue.use(eventHub) should be called only once.'
            );
            return
        }
        Vue = _Vue;
        Vue.prototype.$eventHub = new EventHub();
    }

    // 创建eventHub实例
    function EventHub (){
        this._vm = new Vue();
    }
    EventHub.prototype = {
        $on: function(event, fn){
            this._vm.$on(event, fn);
            return this;
        },
        $emit: function(event, payload){
            this._vm.$emit(event, payload);
            return this;
        }
    }

    var index = {
        install: install,
        version: '1.0.0'
    };

    return index;
})));