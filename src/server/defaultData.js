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

// 全站默认数据
import avatar from '../common/images/img/avatar.png';
var defaultData = {
	avatar: avatar
}

export default {
	install
};