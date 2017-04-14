import axios from 'axios'
import {baseUrl, _reject, _rejectObj} from './config'
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
			var msg;
            switch(Number(response.data.errcode)){
                default:
                    msg = '网络异常';
                    break;
            }
            return _reject({
            	ret: response.data.ret,
				msg: msg
            })
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 获取标签列表
URL:http://domain/eryuzhisen-server/opus/getLabelList
Method:GET
request:
params:
"categoryId":"xxxx"//类别Id，可选

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"list":["xxxx","xxxxx",....]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getLabelList(option){
	var url = baseUrl + 'opus/getLabelList';
	var prosime = axios({
		method: 'GET',
		url: url,
		params: option
	}).then(function (response) {
		if (response.data.ret != 0) {
			var msg;
            switch(Number(response.data.errcode)){
                default:
                    msg = '网络异常';
                    break;
            }
            return _reject({
            	ret: response.data.ret,
				msg: msg
            })
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 获取作品分类列表(******所有类别关联的数据，以二级类别为准，如目前只有一级类，会创建一个同名的二级子类，方便以后扩展********)
URL:http://domain/eryuzhisen-server/opus/getCategoryList
Method:GET

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"list":[
		{//一级类
			"category_id":"1111",
			"category_desc":"xxxx",//描述
			"category_title":"漫画"，//标题
			"category_cover_url":"http://xxxx",//扩展字段，封面
			"sub_node":[{//子类
				"category_id":"1111",
				"category_desc":"xxxx",//描述
				"category_title":"漫画"，//标题
				"category_cover_url":"http://xxxx",//扩展字段，封面
			},.....]
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getCategoryList(option){
	var url = baseUrl + 'opus/getCategoryList';
	var prosime = axios({
		method: 'GET',
		url: url,
		params: option
	}).then(function (response) {
		if (response.data.ret != 0) {
			var msg;
            switch(Number(response.data.errcode)){
                default:
                    msg = '网络异常';
                    break;
            }
            return _reject({
            	ret: response.data.ret,
				msg: msg
            })
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 分页获取作品目录列表
http://domain/eryuzhisen-server/opus/getCatalogList
Method:POST //由于条件较多,参用post请求

request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10

body://全部为可选
{
	"user_id":"xx",//查询某人的作品目录列表
	"category_id":"11",//查询某一类的目录
	"fuzzy_query":"xxxx",//模糊查询文字
	"catalog_status":"1",//目录状态  0 连载中 1 已完结
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getCatalogList(option){
	var url = baseUrl + 'opus/getCatalogList'; 
	var prosime = axios({
		method: 'POST',
		url: url,
		params: option.params,
		data: JSON.stringify(option.body)
	}).then(function (response) {
		if (response.data.ret != 0) {
			var msg;
            switch(Number(response.data.errcode)){
                default:
                    msg = '网络异常';
                    break;
            }
            return _reject({
            	ret: response.data.ret,
				msg: msg
            })
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

/**
 * 根据作者名称模糊查询用户列表
URL:http://domain/eryuzhisen-server/user/getUserList
Method:GET

request:
params:
"query":"xxxx"//模糊查询文字
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"0",//是否还有更多 0 没有 1 还有更多,供没有页码的客户端使用
	"list":[
		{
			"uid":"xxxx",
			"nick_name":"xxxxx",//昵称
			"avatar_url":"xxxxx",//头像url
			"signature":"xxxxx",//签名
			"c_age":"xxx",//论坛年龄
			"relation":"0"//关系 0 没有关注 1 关注 2 粉丝 3 相互关注

		},
	....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getUserList(option){
	var url = baseUrl + 'user/getUserList'; 
	var token = Cookies.get('token');

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
		if (response.data.ret != 0) {
			var msg;
            switch(Number(response.data.errcode)){
                default:
                    msg = '网络异常';
                    break;
            }
            return _reject({
            	ret: response.data.ret,
				msg: msg
            })
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
	var prosime = axios({
		method: 'GET',
		url: url,
		params: option
	}).then(function (response) {
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

export {
	getHomeBanner,
	getLabelList,
	getCategoryList,
	getCatalogList,
	getPolicyAndAccess,
	getUserList,
	_reject
}


