import {baseUrl, _reject, _rejectObj, axios, token} from '../config'
import Cookies from 'js-cookie';

/**
 * 获取黑名单用户列表
URL:http://domain/eryuzhisen-server/user/getBlackList
Method:GET
request:
params:
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
			"avatar_url":"xxxxx"//头像url

		}
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getBlackList(option){
	var url = baseUrl + 'user/getBlackList';

	// 没有登录态
	if (!token) {
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

/**
 * 删除黑名单用户(header 中uid为操作用户)
URL:http://domain/eryuzhisen-server/user/delBlack/{userId}
Method:DELETE
userId:"xxxx"//被拉进黑名单的用户
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function delBlack(option){
	var url = baseUrl + 'user/delBlack/'+option.userId;

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'DELETE',
		url: url,
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
 * 添加黑名单用户(header 中uid为操作用户)
URL:http://domain/eryuzhisen-server/user/addBlack/{userId}
Method:PUT
userId:"xxxx"//被拉进黑名单的用户
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function addBlack(option){
	var url = baseUrl + 'user/addBlack/'+option.userId;

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'PUT',
		url: url,
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
 * 关注用户
URL:http://domain/eryuzhisen-server/user/addFollow/{userId}
Method:PUT
userId:"xxxx"
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function addFollow(option){
	var url = baseUrl + 'user/addFollow/'+option.userId;

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'PUT',
		url: url,
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
 * 取消关注
URL:http://domain/eryuzhisen-server/user/delFollow/{userId}
Method:DELETE
userId:"xxxx"
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function delFollow(option){
	var url = baseUrl + 'user/delFollow/'+option.userId;

	// 没有登录态
	if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}

	delete option._header;
	return axios({
		method: 'DELETE',
		url: url,
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

	var prosime = axios({
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

	return prosime;
}

/**
 * 获取关注用户列表
URL:http://domain/eryuzhisen-server/user/getFollowList
Method:GET
request:
params:
"userId":"xxxx",//获取指定用户关注,header 中uid 等于此处时,允许取消关注
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"0",//是否还有更多 0 没有 1 还有更多,供没有页码的客户端使用
	"page_info":{//pagination为1 才有
			"total_count":"300",//总数量
			"page_count":"30"//总页数	
		},
	"list":[
		{
			"uid":"xxxx",
			"nick_name":"xxxxx",//昵称
			"avatar_url":"xxxxx",//头像url
			"signature":"xxxxx",//签名
			"c_age":"xxx",//论坛年龄
			"relation":"0"//关系 0 没有关注 1 关注 2 粉丝 3 相互关注

		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getFollowList(option){
	var url = baseUrl + 'user/getFollowList'; 

	// 没有登录态
	/*if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}*/

	var prosime = axios({
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

	return prosime;
}

/**
 * 获取粉丝用户列表
URL:http://domain/eryuzhisen-server/user/getFansList
Method:GET
request:
params:
"userId":"xxxx",//获取指定用户粉丝
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"0",//是否还有更多 0 没有 1 还有更多,供没有页码的客户端使用
	"page_info":{//pagination为1 才有
			"total_count":"300",//总数量
			"page_count":"30"//总页数	
		},
	"list":[
		{
			"uid":"xxxx",
			"nick_name":"xxxxx",//昵称
			"avatar_url":"xxxxx",//头像url
			"signature":"xxxxx",//签名
			"c_age":"xxx",//论坛年龄
			"relation":"0"//关系 0 没有关注 1 关注 2 粉丝 3 相互关注

		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getFansList(option){
	var url = baseUrl + 'user/getFansList'; 

	// 没有登录态
	/*if (!token) {
		return _rejectObj({
			ret: -10,
			msg: '未登录'
		});
	}*/

	var prosime = axios({
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

	return prosime;
}

/**
 * 获取推荐用户列表（根据作品数，粉丝数排序 前pageSize条数据）
URL:http://domain/eryuzhisen-server/user/getRecommendUserList
Method:GET

request:
params:
"pageSize":"10",//获取的推荐用户条数（目前分页以假分页处理，前端一次性获取）

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"0",
	"list":[
		{
			"uid":"xxxx",
			"nick_name":"xxxxx",//昵称
			"avatar_url":"xxxxx",//头像url
			"signature":"xxxxx",//签名
			"c_age":"xxx",//论坛年龄
			"relation":"0",//关系 0 没有关注 1 关注 2 粉丝 3 相互关注
			"black":"0",//是否在黑名单 0 不在 1 在
			"opus_count","20",//作品数量
			"fans_count":"30"//粉丝数量

		},
	....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getRecommendUserList(option){
	var url = baseUrl + 'user/getRecommendUserList';

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

/**
 * 根据标签获取活跃用户列表
URL:http://domain/eryuzhisen-server/user/getActiveUserList
Method:GET

request:
params:
"pageSize":"10",//获取的推荐用户条数（目前分页以假分页处理，前端一次性获取）
"label":"xxx",//必填 标签
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"0"，
	"list":[
		{
			"uid":"xxxx",
			"nick_name":"xxxxx",//昵称
			"avatar_url":"xxxxx",//头像url
			"signature":"xxxxx",//签名
			"c_age":"xxx",//论坛年龄
			"relation":"0",//关系 0 没有关注 1 关注 2 粉丝 3 相互关注
			"black":"0",//是否在黑名单 0 不在 1 在
			"opus_count","20",//作品数量
			"fans_count":"30",//粉丝数量
			"comment_count":"40"//针对当前标签的评论数量

		},
	....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getActiveUserList(option){
	var url = baseUrl + 'user/getActiveUserList';

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

/**
 * 获取邀请码
ULR:http://domain/eryuzhisen-server/user/getInviteCode
Method:GET
response:
body json:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现,详情请查看附录
	"errinfo":"xxxx",
	"invite_code":"xxxxx",//邀请码
	"remaining_times":"3"//剩余使用次数
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getInviteCode(option){
	var url = baseUrl + 'user/getInviteCode';

	// 没有登录态
	if (!token) {
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
	getFansList,
	getFollowList,
	getBlackList,
	delBlack,
	addBlack,
	addFollow,
	delFollow,
	getUserList,
	getRecommendUserList,
	getActiveUserList,
	getInviteCode,
	_reject
}


