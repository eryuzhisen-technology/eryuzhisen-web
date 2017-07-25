/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 */
import axios from 'axios'
import Cookies from 'js-cookie';
import {url} from '../lib/vue.url';
import data from './defaultData';

// 默认数据
var defaultData = data.defaultData;

// url-token
var token = url.getUrlParam('token') || Cookies.get('token');

//  统一设置请求头部
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['client_type'] = url.getUrlParam('client_type') || Cookies.get('client_type') || (Cookies.get('isAppIOS') == 1 ? 1 : 3);
axios.defaults.headers.common['client_version'] = '1.0';

// web端区分PC和H5
// client_type为3时
if (!defaultData.ua.isPC && axios.defaults.headers.common['client_type'] == 3) {
	axios.defaults.headers.common['client_type'] = 4;
}

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
	_rejectObj,
	axios,
	token
}
