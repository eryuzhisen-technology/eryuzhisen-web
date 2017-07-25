import {baseUrl, _reject, _rejectObj, axios, token} from '../config'
import Cookies from 'js-cookie';

/**
 * 获取首页banner
ULR:http://domain/eryuzhisen-server/getHomeBanner
Method:GET
response:
body json:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现,详情请查看附录
	"errinfo":"xxxx",
	"list":[
		{
		"title":"xxxx",//标题
		"image_url":"http://xxxx",//图片地址
		"jumpui":{
			"page_id":"xx",//跳转的页面id,后期协商
			"arguments":{"":""},//跳转某个页面需要带的参数,后期协商
			}
		},
	....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getHomeBanner(option){
	var url = baseUrl + 'getHomeBanner';
	var prosime = axios({
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

	return prosime;
}

/**
 * 获取阿里OSS上传文件的签名及上传policy
URL:http://domain/eryuzhisen-server/upload/getPolicyAndAccess
Method:GET
request:
params:
"type":"1"//上传类型  1 用户相关 2 作品相关

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"accessid":"xxxx",//指的用户请求的accessid。注意仅知道accessid, 对数据不会有影响.
	"policy":"xxxx",//指的是用户表单上传的策略policy，是经过base64编码过的字符串
	"signature":"xxxxx",//是对上述变量policy签名后的字符串
	"dir":"xxx",//上传到那个目录
	"host":"xxxx",//指的是用户要往哪个域名发往上传请求.
	"expire":"xxxx"//指的是当前上传策略失效时间
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getPolicyAndAccess(option){
	var url = baseUrl + 'upload/getPolicyAndAccess'; 

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}
	
	var prosime = axios({
		method: 'GET',
		url: url,
		params: option,
		headers: {
			token: token
		}
	}).then(function (response) {
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 添加用户反馈信息
URL:http://domain/eryuzhisen-server/report/addFeedback
Method:POST
request:
{
	"content":"xxxxxx",//文本内容
	"img_url":"http://xxxx",//图片url
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 */
function addFeedback(option){
	var url = baseUrl + 'report/addFeedback';

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}
	
	var prosime = axios({
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

	return prosime;
}

/**
 * 举报
URL:http://domain/eryuzhisen-server/report/addReport
Method:POST
request:
{
	"report_reason":"xxxx",//举报原因
	"content_id":"1111",//举报内容id
	"content_type":"1"举报内容类型 1 作品章节 2 评论 3 作者
	"add_reason":"xxxxxxxx"//附加信息
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function addReport(option){
	var url = baseUrl + 'report/addReport';

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	var prosime = axios({
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

	return prosime;
}

export {
	getHomeBanner,
	getPolicyAndAccess,
	addFeedback,
	addReport,
	_reject,
	_rejectObj
}


