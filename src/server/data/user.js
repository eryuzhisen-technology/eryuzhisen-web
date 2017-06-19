import {baseUrl, _reject, _rejectObj, axios} from '../config'
import Cookies from 'js-cookie';
var token = Cookies.get('token');

/**
 * 获取图形验证码
URL:http://domain/eryuzhisen-server/auth/getPicVerifyCode
Method:GET
response:
body json:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"pic_vid":"xxxxx",//图形验证码id
	"pic_vcode":"xxxx"//图形验证码图片 base64编码
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getPicVerifyCode(option){
	var url = baseUrl + 'auth/getPicVerifyCode';
	var prosime = axios({
		method: 'GET',
		url: url,
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 获取手机号验证码
URL:http://domain/eryuzhisen-server/auth/getPhoneVerifyCode
Method:GET
request:
params:
verifyType:"0"//0注册验证，1重置密码验证
phoneNum:"177xxxxx"//手机号
picVcode:"xxxx"//图形验证码
picVid:"xxxx"图形验证码id

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"phone_num":"177xxxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getPhoneVerifyCode(option){
	var url = baseUrl + 'auth/getPhoneVerifyCode';
	return axios({
		method: 'GET',
		url: url,
		params: option,
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * http://domain/eryuzhisen-server/auth/sigin
Method:POST
request:
body json:
{
	"phone_num":"xxxxx",//手机号
	"password":"xxxx",//密码
	"device_no":"xxx",//设备号,没有则新生成一个,统计用
	"pic_vid":"xxxx",//密码错误次数超过5次时,需要单独调用图形验证码
	"pic_vcode":"xxxx",//密码错误5超过5次,需要校验图形验证码
}

response:
body json:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"uid":"xxxx"//用户id,已做加密处理
	"token":"xxxx",//目前有效期7天 后期协议需要在header中带上校验
	"device_no":"xxxx",//设备号,request传入原样返回,没有则新生成
	"info_status":"1"//用户资料完整度状态 1:已完善 预留字段,目前没有强制用户输入某些信息
	
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function sigin(option){
	var url = baseUrl + 'auth/sigin';
	var _header = option._header || {};
	delete option._header;
	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});
}

/**
 * 注册
URL:http://domain/eryuzhisen-server/auth/sigup
Method:POST
request:
body json:
{
	"phone_num":"xxxxx",//手机号
	"password":"xxxx",//密码,目前只有长度限制:6-12位
	"device_no":"xxx",//设备号,没有则新生成一个,统计用
	"pic_vid":"xxxx",//图形验证码id
	"pic_vcode":"xxxx",//校验图形验证码
	"phone_vcode":"xxxx",//手机号验证码
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"uid":"xxxx"//用户id,已做加密处理
	"token":"xxxx",//目前有效期7天 后期协议需要在header中带上校验
	"device_no":"xxxx",//设备号,request传入原样返回,没有则新生成
	"user":{
		"uid":"xxxx",
		"nick_name":"xxxx",//昵称
		"avatar_url":"xxxx",//头像url
		"signature":"xxx",//签名,
		"c_age":"1年5个月12天",//论坛年龄
	}
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function sigup(option){
	var url = baseUrl + 'auth/sigup';
	var _header = option._header || {};
	delete option._header;

	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
		headers: _header
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * http://domain/eryuzhisen-server/auth/resetPwd
Method:POST
request:
{
	"phone_num":"xxxx",
	"phone_vcode":"xxx",//手机号验证码
	"password":"xxxx",//新密码
}
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function resetPwd(option){
	var url = baseUrl + 'auth/resetPwd';
	var _header = option._header || {};
	delete option._header;
	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
		headers: _header
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * 解除手机号绑定(此协议不做实际解除操作,只是记录标识,重新绑定手机号,必须先通过此协议)
URL:http://domain/eryuzhisen-server/auth/unboundPhone
Method:POST
request:
{
	"phone_num":"12345678",//解除绑定的手机号
	"phone_vcode":"1111",//手机号验证码
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function unboundPhone(option){
	var url = baseUrl + 'auth/unboundPhone';


	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
		headers: {
			token: token
		}
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * 重新绑定手机号
URL:http://domain/eryuzhisen-server/auth/reBindPhone
Method:POST
request:
{
	"phone_num":"1234567",//新手机号
	"phone_vcode":"1111",//手机号验证码
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function reBindPhone(option){
	var url = baseUrl + 'auth/reBindPhone';

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
		headers: {
			token: token
		}
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * 改用户信息
URL:http://domain/eryuzhisen-server/user/updateUserInfo
Method:POST
request body
{
	"nick_name":"xxxx",
	"avatar_url":"http://xxxxx.png",
	"signature":"xxxxxxx"
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function updateUserInfo(option){
	var url = baseUrl + 'user/updateUserInfo';
	var _header = option._header || {};

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'POST',
		url: url,
		data: JSON.stringify(option),
		headers: {
			token: token
		}
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

/**
 * 获取用户信息
URL:http://domain/eryuzhisen-server/user/getUserInfo
Method:GET

request:
params:
userId:"xxxx"//需要获取指定用户id的信息,如果header中uid不同,则会返回用户间关系

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"info":{
		"uid":"xxxx",
		"nick_name":"xxxx",//昵称
		"avatar_url":"xxxxx",//头像url
		"signature":"xxxx",//签名
		"c_age":"xxxx",//论坛年龄
		"relation":"0"//关系 0 没有关注 1 关注 2 粉丝 3 相互关注
	}
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getUserInfo(option){
	var url = baseUrl + 'user/getUserInfo';
	var _header = option._header || {};

	// 没有登录态
	if (!token && !option.userId) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'GET',
		url: url,
		params: option,
		headers: {
			token: token
		}
	}).then(function (response) {
		if (response.data.ret != 0) {
			return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
	    return _rejectObj(error);
	});
}

export {
	getPicVerifyCode,
	getPhoneVerifyCode,
	sigin,
	sigup,
	resetPwd,
	unboundPhone,
	reBindPhone,
	updateUserInfo,
	getUserInfo,
	_reject
}


