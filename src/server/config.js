/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 */
var baseUrl; 
var imgBaseUrl = '';
var distUrl = '';
var isdebug = window.location.href.indexOf('isdebug=1') > 0;

if (process.env.NODE_ENV == 'development') {
	baseUrl = '/java/eryuzhisen-server/';
	distUrl = '/dist/html/';
	imgBaseUrl = '';
}else{
	baseUrl = '/java/eryuzhisen-server/';
	distUrl = '/';
	imgBaseUrl = '';
}

function _reject (response){
	// 跳转登录
	if (response.errcode == 30001) {
		// window.location.href = './login.html';
	}
	return Promise.reject(response);
}

function _rejectObj(error){
	if (!!error && !!error.ret && error.ret > 0) {
		return _reject(error);
	}
    return _reject({
    	ret: error && error.ret || -1,
		msg: error && error.msg || '网络异常',
		error: error
    })
}

export {
	isdebug,
	baseUrl,
	imgBaseUrl,
	distUrl,
	_reject,
	_rejectObj
}