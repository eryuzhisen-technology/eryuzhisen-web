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
    Vue.prototype.$version = version;
}

// 全站localstorage-版本号
var version = {
	// banner
	banner: {
		key: 'eryuzhisen_indexBanner',
		version: '1.0',
		time: 10*60*1000
	},

	// history
	history: {
		key: 'eryuzhisen_catalog_history',
		version: '1.0',
		time: 12*30*24*60*60*1000
	},

	// userInfo
	userInfo: {
		key: 'eryuzhisen_userInfo',
		version: '1.0',
		time: 60*60*1000
	},

	chapaterEdit: {
		key: 'eryuzhisen_chapaterEdit',
		version: '1.0',
		time: 1*60*1000
	},

	chapaterEdit_edit: {
		key: 'eryuzhisen_chapaterEdit_edit',
		version: '1.0',
		time: 5*60*1000
	}
}

export default {
	install
};