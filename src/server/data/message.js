import {baseUrl, _reject, _rejectObj, axios} from '../config'
import Cookies from 'js-cookie';
var token = Cookies.get('token');

/**
 * 获取用户消息列表
URL:http://domain/eryuzhisen-server/user/getMessageList
Method:GET
request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
"messageType":"1"//消息类型 0 其他 1 精选,推荐 2 评论
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"1",//是否还有更多 0 没有 1 还有更多,供没有页码的客户端使用
	"page_info":{//pagination为1 才有
			"total_count":"300",//总数量
			"page_count":"30"//总页数	
		},
	"list":[
		{
			"msg_id":"111",//消息id
			"msg_type":"1",//0 其他 1 精选 2 评论
			"message":{//消息体
				"sender":{"user_id":"111","nick_name":"xxxx","avatar_url":"xxxx"},//发送者
				"receiver":{"user_id":"111","nick_name":"xxxx","avatar_url":"xxxx"}//接收者
				"content":{
					"title":"xxxx",//如:对xxx在<<xxxx>>中的评论进行了回复
					"cite":"xxxxxxx",//引文,如果是回复评论,此处表示之前用户的评论
					"content":"xxxxxx",//消息内容
					"media_url":"http://xxxxx"//如果存在图片或者视频等等		
				},
				"read":"0",//0 未读 1 已读
				"attach":{}//结构等同于附录,点击消息弹框或者跳转
				"arguments":{"catalog_id","xxxx","chapter_id":"xxxx","to_comment_id":"xxxx","to_reply_comment_id":"xxxxx"},//目前只有评论消息带有此参数，参数供回复评论使用
			}
			"create_time":"xxx",//创建时间
		},
	.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getMessageList(option){
	var url = baseUrl + 'user/getMessageList';
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
 * 获取消息详情
URL:http://domain/eryuzhisen-server/user/getMessageDetail
Method:GET
request:
params:
"msgId":"1111"//消息id

response:
{
	"msg_header_icon":"http://xxxx",//头像
	"msg_id":"111",//消息id
	"msg_content":"xxx",//消息文本内容
	"msg_media_url":"http://xxxxx",//消息媒体url
	"create_time":"xxx",//创建时间
	"read":"0",//0 未读 1 已读
	"attach":{}//结构等同于附录,点击消息弹框或者跳转
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getMessageDetail(option){
	var url = baseUrl + 'user/getMessageDetail';
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
 * 删除消息
URL:http://domain/eryuzhisen-server/user/delMessage/{msgId}
Method:DELETE

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function delMessage(option){
	var url = baseUrl + 'user/delMessage/'+ option.msgId;

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
 * 标记已读消息
URL:http://domain/eryuzhisen-server/user/markMessage/{msgType}/{msgId}
Method:PUT
msgType:1//消息类型 0 其他 1 精选,推荐 2 评论
msgId:20//需要标记的消息id *******如果为-1 则表示当前类型消息全部已读******

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function markMessage(option){
	var url = baseUrl + 'user/markMessage/'+ option.msgType +'/'+ option.msgId;

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
 * 获取未读消息条数
URL:http://domain/eryuzhisen-server/user/getUnreadMessage
Method:GET

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"list":[
		{
			"message_type":"1",//消息类型 0 其他 1 精选,推荐 2 评论
			"unread_count":"20",//未读条数
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getUnreadMessage(option){
	var url = baseUrl + 'user/getUnreadMessage';

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
            return _reject(response.data);
		}
		return response.data;
	}).catch(function (error) {
		return _rejectObj(error);
	});

	return prosime;
}

export {
	getMessageList,
	getMessageDetail,
	delMessage,
	markMessage,
	getUnreadMessage,

	_reject,
	_rejectObj
}


