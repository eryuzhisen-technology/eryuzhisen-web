/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 */
var baseUrl; 
var imgBaseUrl = '';
var distUrl = '';

if (process.env.NODE_ENV == 'development') {
	baseUrl = '/java/eryuzhisen-server/';
	distUrl = '/dist/html/';
	imgBaseUrl = '';
}else{
	baseUrl = '/java/eryuzhisen-server/';
	distUrl = '/';
	imgBaseUrl = '';
}

function _reject (option){
	return Promise.reject(option);
}

function _rejectObj(error){
	if (!!error.ret && error.ret > 0) {
		return _reject(error);
	}
    return _reject({
    	ret: error.ret || -1,
		msg: error.msg || '网络异常',
		error: error
    })
}

export {
	baseUrl,
	imgBaseUrl,
	distUrl,
	_reject,
	_rejectObj
}