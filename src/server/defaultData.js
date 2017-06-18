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
import mbavatar from '../common/images/mb/author-avatar.png';
var defaultData = {
	avatar: avatar,
    mbavatar: mbavatar
}

export default {
	install
};