import {baseUrl, _reject, _rejectObj, axios, token} from '../config'
import Cookies from 'js-cookie';

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
            return _reject(response.data);
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
            return _reject(response.data);
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
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回

body://全部为可选
{
	"user_id":"xx",//查询某人的作品目录列表
	"category_id":"11",//查询某一类的目录
	"fuzzy_query":"xxxx",//模糊查询文字
	"catalog_status":"1",//目录状态  0 连载中 1 已完结
}

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
			"catalog_id":"xxx",//目录id
			"category_id":"xx",//类别id
			"category_title":"xxx",//类别文字 如:漫画
			"praise_count":"300",//点赞总数
			"comment_count":"222",//评论总数
			"catalog_title":"xxxx",//目录标题
			"catalog_desc":"xxxxx",//目录简介
			"catalog_cover_url":"http://xxx",//目录封面
			"publish_time":"xxx",//发表时间,如:一小时前
			"audit_status":"0",//0 审核中 1 审核通过 2 审核不通过(只有本人查看自己文章才有该节点)
			"audit_remark":"xxxxx",//审核备注(只有本人查看自己文章才有该节点)
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//作者信息
		},
		.....
	]
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
		data: option.body,
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
 * 获取用户收藏列表
URL:http://domain/eryuzhisen-server/opus/getFavoritesList
Method:GET

request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"1",
	"page_info":{//pagination为1 才有
			"total_count":"300",//总数量
			"page_count":"30"//总页数	
		},
	"list":[
		{
			"catalog_id":"xxx",//目录id
			"category_id":"xx",//类别id
			"category_title":"xxx",//类别文字 如:漫画
			"praise_count":"300",//点赞总数
			"comment_count":"222",//评论总数
			"catalog_title":"xxxx",//目录标题
			"catalog_desc":"xxxxx",//目录简介
			"catalog_cover_url":"http://xxx",//目录封面
			"publish_time":"xxx",//发表时间,如:一小时前
			"audit_status":"0",//0 审核中 1 审核通过 2 审核不通过(只有本人查看自己文章才有该节点)
			"audit_remark":"xxxxx",//审核备注(只有本人查看自己文章才有该节点)
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//作者信息
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getFavoritesList(option){
	var url = baseUrl + 'opus/getFavoritesList';

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

/**
 * 删除收藏
URL:http://domain/eryuzhisen-server/opus/delFavorites/{catalogId}/{chapterId}
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
function delFavorites(option){
	var url = baseUrl + 'opus/delFavorites/' + option.catalogId;
	var prosime = axios({
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

	return prosime;
}

/**
 * 新增作品收藏(如果只收藏目录,chapterId请设置为0)
URL:http://domain/eryuzhisen-server/opus/addFavorites/{catalogId}/{chapterId}
Method:PUT

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"favorites_id","121"//收藏id
}
 * @param {[type]} option [description]
 */
function addFavorites(option){
	var url = baseUrl + 'opus/addFavorites/' + option.catalogId;
	var prosime = axios({
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

	return prosime;
}

/**
 * 获取目录详情
URL:http://domain/eryuzhisen-server/opus/getCatalogDetail
Method:GET
request:
params:
"catalogId":"111"//目录id
response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"info":{
		"catalog_id":"xxx",//目录id
		"category_id":"xx",//类别id
		"category_title":"xxx",//类别文字 如:漫画
		"praise_count":"300",//点赞总数
		"comment_count":"222",//评论总数
		"catalog_title":"xxxx",//目录标题
		"catalog_desc":"xxxxx",//目录简介
		"catalog_cover_url":"http://xxx",//目录封面
		"publish_time":"xxx",//发表时间,如:一小时前
		"audit_status":"0",//0 审核中 1 审核通过 2 审核不通过(只有本人查看自己文章才有该节点)
		"audit_remark":"xxxxx",//审核备注(只有本人查看自己文章才有该节点)
		"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//作者信息
		"is_collected":"1",//是否已收藏 0未收藏 1 已收藏	
	}
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getCatalogDetail(option){
	var url = baseUrl + 'opus/getCatalogDetail';
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
 * 获取章节详情
URL:http://domain/eryuzhisen-server/opus/getChapterDetail
Method:GET
request:
params:
"chapterId":"111"//章节id

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"info":{
		"chapter_id":"xxx",//章节id
		"chapter_title":"xx",//章节标题
		"chapter_desc":"xxx",//章节简介
		"chapter_content":"xxxx",//章节内容  ***base64 编码***(列表中不一定返回,根据设计图需要的来获取)
		"chapter_index":"1",//章节序号
		"publish_date":"xxxx",//发布时间
		"praise_count":"xxxxx",//总点赞数
		"comment_count":"http://xxx",//总评论数
		"chapter_status":"xxx",//0 已完成 1 临时保存 未完成 (只有本人查看会有临时保存,否则只会出现已完成的数据)
		"is_collected":"1",//是否已收藏 0未收藏 1 已收藏
	}	
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getChapterDetail(option){
	var url = baseUrl + 'opus/getChapterDetail';
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
 * 分页获取章节列表
http://domain/eryuzhisen-server/opus/getChapterList
Method:GET //由于条件较多,参用post请求

request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
"catalogId":"111"//目录id

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
			"chapter_id":"xxx",//章节id
			"chapter_title":"xx",//章节标题
			"chapter_desc":"xxx",//章节简介
			"chapter_content":"xxxx",//章节内容  ***base64 编码***(列表中不一定返回,根据设计图需要的来获取)
			"chapter_index":"1",//章节序号
			"publish_date":"xxxx",//发布时间
			"praise_count":"xxxxx",//总点赞数
			"comment_count":"http://xxx",//总评论数
			"chapter_status":"xxx",//0 已完成 1 临时保存 未完成 (只有本人查看会有临时保存,否则只会出现已完成的数据)
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getChapterList(option){
	var url = baseUrl + 'opus/getChapterList';
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
 * 获取作品评论列表(目前只分二级评论,不同于盖楼显示方式)
http://domain/eryuzhisen-server/opus/getCommentList
Method:GET
request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
"catalogId":"1"//目录id,必填项
"chapterId":"2"//章节id,选填,如果有则获取章节下的评论,否则获取目录的所有评论
"type":"1"// 排序类型  1 最热(按评论数,点赞数) 2 最新(时间) 不传表示默认(按照写入的先后顺序)

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
		{//一级评论
			"comment_id":"111",//评论id
			"comment":"xxxxx",//评论内容
			"publish_time":"xxx",//发表时间
			"praise_count":"30",//获得点赞数量
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//发表评论人信息
			"replys":[{//二级评论,针对一级评论的回复
				"comment_id":"111",//评论id
				"comment":"xxxxx",//评论内容
				"publish_time":"xxx",//发表时间
				"praise_count":"30",//获得点赞数量
				"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//发表评论人信息
				"reply_to_user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//如果是回复性评论,则有此节点,表示回复xxx
			},....]
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getCommentList(option){
	var url = baseUrl + 'opus/getCommentList';
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
 * 获取回复型评论列表
URL:http://domain/eryuzhisen-server/opus/getReplyCommentList
Method:GET
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"5",//每页数量 默认5
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回
"commentId":"1"//一级评论id
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
			"comment_id":"111",//评论id
			"comment":"xxxxx",//评论内容
			"publish_time":"xxx",//发表时间
			"praise_count":"30",//获得点赞数量
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//发表评论人信息
			"reply_to_user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//如果是回复性评论,则有此节点,表示回复xxx
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getReplyCommentList(option){
	var url = baseUrl + 'opus/getReplyCommentList';
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
 * 新增评论
http://domain/eryuzhisen-server/opus/addComment
Method:POST
request:
{
	"to_comment_id":"xx",//一级评论id,表示针对那条评论的评论(有点绕),类似所有二级评论的父级.没有则表示当前发表的就是一级评论
	"to_reply_comment_id":"xxxx",//一级评论下的二级回复性评论id,表示针对那条二级评论做的回复('xxx回复了xxx',在列表查询时需要使用),当前发表的是一级评论不需要带此参数.
	"comment":"xxxxx",//评论
	"catalog_id":"11",//目录id,必填
	"chapter_id","22"//章节id,没有则表示针对目录的评论
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"comment_id":"111",//返回评论id
	"comment":"xxxxx",//返回评论内容(客户端可以直接获取则无视该节点)
	"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//发表评论人信息(客户端可以直接获取则无视该节点)
	"reply_to_user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//如果是回复性评论,则有此节点,表示回复xxx(客户端可以直接获取则无视该节点)
}
 * @param {[type]} option [description]
 */
function addComment(option){
	var url = baseUrl + 'opus/addComment';

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
		data: option,
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
 * 创建目录
URL:http://domain/eryuzhisen-server/opus/addCatalog
Method:POST

request:
{
	"category_id":"1",//类别id
	"catalog_title":"xxx",//目录标题
	"catalog_desc":"xxxx",//简介
	"catalog_cover_url":"http://xxxxx"//封面
	"catalog_label":"xx,xxx,xx",//标签，多个标签逗号分割
	"catalog_status":"0",//0 连载中 1 已完结
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"cat
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function addCatalog(option){
	var url = baseUrl + 'opus/addCatalog';
	var _header = option._header || {};
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
 * 创建章节
URL:http://domain/eryuzhisen-server/opus/addChapter
Method:POST

request:
{
	"catalog_id":"1",//目录id
	"chapter_title":"xxx",//章节标题
	"chapter_desc":"xxxx",//简介
	"chapter_content":"xxxx"//内容　***base64 编码***
	"chapter_status":"0"//　0 发布，已完成 1 临时保存 未完成
}

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"chapter_id":"1111"
}
 * @param {[type]} option [description]
 */
function addChapter(option){
	var url = baseUrl + 'opus/addChapter';
	var _header = option._header || {};
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
 * 针对评论的点赞
http://domain/eryuzhisen-server/opus/addCommentPraise/{commentId}
Method:PUT

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function addCommentPraise(option){
	var url = baseUrl + 'opus/addCommentPraise/' + option.commentId;
	var _header = option._header || {};
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
 * 作品点赞(如果只针对目录点赞，chapterId设为0)
URL:http://domain/eryuzhisen-server/opus/addPraise/{catalogId}/{chapterId}
Method:PUT

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function addPraise(option){
	var url = baseUrl + 'opus/addPraise/' + option.catalogId + '/' + option.chapterId;
	var _header = option._header || {};
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
 * 更新目录(更新目录会重新进入审核状态，请前端提示)
URL:http://domain/eryuzhisen-server/opus/updateCatalog
Method:POST

request:
{
	"catalog_id":"xxxx",//目录id
	"category_id":"1",//类别id
	"catalog_title":"xxx",//目录标题
	"catalog_desc":"xxxx",//简介
	"catalog_cover_url":"http://xxxxx"//封面
	"catalog_label":"xx,xxx,xx",//标签，多个标签逗号分割
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
function updateCatalog(option){
	var url = baseUrl + 'opus/updateCatalog';
	var _header = option._header || {};
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
 * 更新章节内容（已发布的是不能修改的，只针对临时保存的章节）
URL:http://domain/eryuzhisen-server/opus/updateChapter
Method:POST

request:
{
	"chapter_id":"111",//章节id
	"chapter_title":"xxx",//章节标题
	"chapter_desc":"xxxx",//简介
	"chapter_content":"xxxx"//内容　***base64 编码***
	"chapter_status":"0"//　0 发布，已完成 1 临时保存 未完成
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
function updateChapter(option){
	var url = baseUrl + 'opus/updateChapter';
	var prosime = axios({
		method: 'POST',
		url: url,
		data: option,
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
 * 删除章节
URL:http://domain/eryuzhisen-server/opus/delChapter/{chapterId}
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
function delChapter(option){
	var url = baseUrl + 'opus/delChapter/' + option.chapterId;
	var prosime = axios({
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

	return prosime;
}

/**
 * 删除目录
URL:http://domain/eryuzhisen-server/opus/delCatalog/{catalogId}
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
function delCatalog(option){
	var url = baseUrl + 'opus/delCatalog/' + option.catalogId;
	var prosime = axios({
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

	return prosime;
}

/**
 * 获取我的主页（用户自己的目录列表）
http://domain/eryuzhisen-server/opus/getMyCatalogList
Method:GET 

request:
params:
"page":"1",//页数,默认不传查询第一页
"pageSize":"10",//每页数量 默认10
"pagination":1,//1表示返回页码相关信息 0 或者 不传 则不返回

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
			"catalog_id":"xxx",//目录id
			"category_id":"xx",//类别id
			"category_title":"xxx",//类别文字 如:漫画
			"praise_count":"300",//点赞总数
			"comment_count":"222",//评论总数
			"catalog_title":"xxxx",//目录标题 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_title":"xxxx",//待审核的目录标题 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"catalog_desc":"xxxxx",//目录简介 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_desc":"xxxxx",//待审核的目录简介 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"catalog_cover_url":"http://xxx",//目录封面 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_cover_url":"xxxxx",//待审核的目录封面 ******新增节点*******
			"publish_time":"xxx",//发表时间,如:一小时前
			"audit_status":"0",//0 审核中 1 审核通过 2 审核不通过(只有本人查看自己文章才有该节点)
			"audit_remark":"xxxxx",//审核备注(只有本人查看自己文章才有该节点)
			"level":"0",//等级 0 普通 1 首发 2 独家
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//作者信息
			"labels":["xxxxx","xxxx"],//标签 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"audit_labels":["xxxxx","xxxxx"],//待审核的标签 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"collected_count":"200"//目录被收藏数量
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getMyCatalogList(option){
	var url = baseUrl + 'opus/getMyCatalogList';

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

/**
 * 作品浏览(如果只针对目录，chapterId设为0)
URL:http://domain/eryuzhisen-server/opus/pageviews/{catalogId}/{chapterId}
Method:PUT

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx"
}
 * @param {[type]} option [description]
 */
function pageviews(option){
	var url = baseUrl + 'opus/pageviews/' + option.catalogId + (option.chapterId ? '/' + option.chapterId + '/' : '/0/');
	var prosime = axios({
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

	return prosime;
}

/**
 * 首页中的随机获取
http://domain/eryuzhisen-server/opus/getRandCatalogList
Method:GET 

request:
params:
"count":"10",//每页数量 默认10
"randId":"xxxxxx",//如果是刷新或者第一次首页获取，不用传值，翻页时必填项（服务端返回什么传什么）
"catalogType":"1"//0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有

response:
{
	"ret":"1",//0 成功 1 失败
	"errcode":"10001",//错误码 ret为1时出现
	"errinfo":"xxxx",
	"more":"1",//是否还有更多 0 没有 1 还有更多,供没有页码的客户端使用
	"rand_id":"xxxxxx",//返回的随机id
	"list":[
		{
			"catalog_id":"xxx",//目录id
			"category_id":"xx",//类别id
			"category_title":"xxx",//类别文字 如:漫画
			"praise_count":"300",//点赞总数
			"comment_count":"222",//评论总数
			"catalog_title":"xxxx",//目录标题 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_title":"xxxx",//待审核的目录标题 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"catalog_desc":"xxxxx",//目录简介 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_desc":"xxxxx",//待审核的目录简介 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"catalog_cover_url":"http://xxx",//目录封面 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"catalog_audit_cover_url":"xxxxx",//待审核的目录封面 ******新增节点*******
			"publish_time":"xxx",//发表时间,如:一小时前
			"audit_status":"0",//0 审核中 1 审核通过 2 审核不通过(只有本人查看自己文章才有该节点)
			"audit_remark":"xxxxx",//审核备注(只有本人查看自己文章才有该节点)
			"level":"0",//等级 0 普通 1 首发 2 独家
			"user":{"uid":"xxx","nick_name":"xxx","avatar_url":"xxx"},//作者信息
			"labels":["xxxxx","xxxx"],//标签 ******如果为空，则表示初次创建还在审核中，具体怎么显示，需要设计给出方案******
			"audit_labels":["xxxxx","xxxxx"],//待审核的标签 ******新增节点,新需求：audit_status 如果是 0 或者 2 在用户编辑更新时使用此处内容*******
			"collected_count":"200"//目录被收藏数量
		},
		.....
	]
}
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function getRandCatalogList(option){
	var url = baseUrl + 'opus/getRandCatalogList'; 
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
	getLabelList,
	getCategoryList,
	getCatalogList,
	getFavoritesList,
	delFavorites,
	addFavorites,
	getCatalogDetail,
	getChapterDetail,
	getChapterList,
	getCommentList,
	getReplyCommentList,
	addComment,
	addCatalog,
	addChapter,
	addCommentPraise,
	addPraise,
	updateCatalog,
	updateChapter,
	delChapter,
	delCatalog,
	getMyCatalogList,
	pageviews,
	getRandCatalogList,
	_reject,
	_rejectObj
}


