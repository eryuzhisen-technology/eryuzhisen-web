import * as user from '../data/user'
import Cookies from 'js-cookie';
var token = Cookies.get('token');

export default {
	state: {
		// 邀请码
		invite_code: '',
		// login back resigeter
		password: '',
		// back resigeter
		repasswrd: '',
		// rest
		newpassword: '',
		renewpassword: '',
		// back 
		pwd_err_times: 0,

		phone: '',
		time: 0,

		// user-info
		info: {
			avatar_url: '',
			black: '',
			c_age: '',
			fans_count: '',
			nick_name: '',
			opus_count: '',
			relation: '',
			signature: '',
			uid: '',
			gender: -1,
			isLogin: !!token,
		},

		// login back register
		code: {
			pic_code: '',
			pic_vid: '',
			pic_vcode: '',
			phone_vcode: '',
		},

		isCodeCan: false,
		isPhoneCan: false,
		isReset: true,
		isLogin: true,
		isUpdate: true,
		isRegister: true,
		isUnboundPhone: true,
		isreBindPhone: true
	},
	mutations: {
		// 设置state属性
		user_setState(state, payload) {
			for (var key in payload) {
				if (payload.hasOwnProperty(key)) {
					if (typeof payload[key] === 'object') {
						for (var _key in payload[key]) {
							state[key][_key] = payload[key][_key];
						}
					} else {
						state[key] = payload[key];
					}
				}
			}
		},
		// 设置state.time属性
		user_setTime(state) {
			state.time--;
		},
		// 设置用户信息
		user_setUserInfo(state, payload) {
			for (var key in payload) {
				state.info[key] = payload[key];
			}
		}
	},
	actions: {
		// 设置state属性-cmommit
		user_setState(context, payload) {
			context.commit('user_setState', payload);
		},
		// 设置用户信息
		user_setUserInfo(context, payload) {
			// 图片头像加压缩
			// if (payload.avatar_url && payload.avatar_url.indexOf('?') < 0) {
			// 	payload.avatar_url += '?x-oss-process=image/resize,w_180,h_180,m_fill/auto-orient,1/quality,q_100/format,jpg';
			// }
			context.commit('user_setUserInfo', payload);
			return Promise.resolve(1);
		},
		// 获取图形码
		user_getPicVerifyCode(context, payload) {
			if (!payload.init && !context.state.isCodeCan) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('user_setState', {
				"isCodeCan": false
			})
			var promise = user.getPicVerifyCode(payload).then(res => {
				context.commit('user_setState', {
					"isCodeCan": true,
					"isPhoneCan": true,
					"code": {
						"pic_vcode": String(res.pic_vcode),
						"pic_vid": res.pic_vid
					}
				})
				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isCodeCan": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 获取手机验证码
		user_getPhoneVerifyCode(context, payload) {
			if (!context.state.isPhoneCan) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			var promise = user.getPhoneVerifyCode({
				"verifyType": payload.verifyType, //注册验证
				"phoneNum": context.state.phone, //手机号
				"picVcode": context.state.code.pic_code, //图形验证码
				"picVid": context.state.code.pic_vid, //图形验证码id
			}).then(res => {
				context.commit('user_setState', {
					"isPhoneCan": false,
					"time": 60
				})
				var timer = setInterval(() => {
					if (context.state.time <= 0) {
						context.commit('user_setState', {
							"isPhoneCan": true
						})
						clearInterval(timer);
						return false;
					}
					context.commit('user_setTime');
				}, 1000)
				return Promise.resolve(res);
			}).catch(err => {
				return Promise.reject(err);
			})
			return promise;
		},
		// 用户登录
		user_sigin(context, payload) {
			if (!context.state.isLogin) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			var promise = user.sigin({
				"phone_num": context.state.phone, //手机号
				"password": context.state.password, //密码
				"pic_vid": context.state.code.pic_vid, //密码错误次数超过5次时,需要单独调用图形验证码
				"pic_vcode": context.state.code.pic_code, //密码错误5超过5次,需要校验图形验证码
				"device_no": payload.device_no, //设备号,没有则新生成一个,统计用
			}).then(res => {
				context.commit('user_setState', {
					"isLogin": true
				})

				// 登录成功后，讲token写入cookie
				Cookies.set('token', res.token, {
					domain:  process.env.NODE_ENV != 'development' ? 'eryuzhisen.com' : '',
					path: '/',
					expires: payload.isSave ? 7 : ''
				});
				return Promise.resolve(res);
			}).catch(err => {
				if (err.pwd_err_times >= 5 || err.errcode == 20020) {
					err.pwd_err_times = 5;
					context.dispatch('user_getPicVerifyCode', {
						init: true
					});
				}
				context.commit('user_setState', {
					"pwd_err_times": err.pwd_err_times || context.state.pwd_err_times,
					"isLogin": true
				})
				return Promise.reject(err);
			});

			return promise;
		},
		// 用户注册
		user_sigup(context, payload) {
			if (!context.state.isRegister) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('user_setState', {
				"isRegister": false
			})
			var promise = user.sigup({
				"invite_code": context.state.invite_code, // 邀请码
				"phone_num": context.state.phone, //手机号
				"password": context.state.password, //密码,目前只有长度限制:6-12位
				"pic_vid": context.state.code.pic_vid, //图形验证码id
				"pic_vcode": context.state.code.pic_code, //校验图形验证码
				"phone_vcode": context.state.code.phone_vcode, //手机号验证码
				"device_no": payload.device_no, //设备号,没有则新生成一个,统计用
				"_header": payload._header
			}).then(res => {
				context.commit('user_setState', {
					"isRegister": true
				})

				Cookies.set('token', res.token, {
					path: '/',
					expires: 7
				});
				return Promise.resolve(res);
			}).catch(err => {
				context.commit('user_setState', {
					"isRegister": true
				})
				return Promise.reject(err);
			})
			return promise;
		},
		// 用户找回密码
		user_backPwd(context, payload) {
			if (!context.state.isReset) {
				return false;
			}
			context.commit('user_setState', {
				"isReset": false
			})
			var promise = user.resetPwd({
				"phone_num": context.state.phone, //手机号
				"password": context.state.password, //密码,目前只有长度限制:6-12位
				"phone_vcode": context.state.code.phone_vcode, //手机号验证码
				"device_no": payload.device_no, //设备号,没有则新生成一个,统计用
				"_header": payload._header
			}).then(res => {
				context.commit('user_setState', {
					"isReset": true
				})
				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isReset": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 重置密码
		user_resetPwd(context, payload) {
			if (!context.state.isReset) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			// 校验密码
			if (!$.trim(context.state.password) || context.state.password.length < 6 || context.state.password.length > 12) {
				return Promise.reject({
					"ret": -2,
					"msg": '输入旧密码'
				})
			}
			// 校验密码
			if (!$.trim(context.state.newpassword) || context.state.newpassword.length < 6 || context.state.newpassword.length > 12) {
				return Promise.reject({
					"ret": -2,
					"msg": '输入新密码'
				})
			}
			// 校验验证码
			if (context.state.newpassword != context.state.renewpassword) {
				return Promise.reject({
					"ret": -2,
					"msg": '密码不一致'
				})
			}
			// 校验验证码
			if (!$.trim(context.state.code.phone_vcode)) {
				return Promise.reject({
					"ret": -2,
					"msg": '输入验证码'
				})
			}
			context.commit('user_setState', {
				"isReset": false
			})
			var promise = user.resetPwd({
				"phone_num": context.state.phone, //手机号
				"password": context.state.password, //密码,目前只有长度限制:6-12位
				"phone_vcode": context.state.code.phone_vcode, //手机号验证码
				"device_no": payload.device_no, //设备号,没有则新生成一个,统计用
				"_header": payload._header
			}).then(res => {
				context.commit('user_setState', {
					"isReset": true
				})
				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isReset": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 更新用户信息
		user_updateUserInfo(context, payload) {
			if (!context.state.isUpdate) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			// 校验参数
			// nick_name、avatar_url、signature、gender
			// 必须有个存在
			if (!$.trim(context.state.info.gender) && !$.trim(context.state.info.nick_name) && !$.trim(context.state.info.avatar_url) && !$.trim(context.state.info.signature)) {
				return Promise.reject({
					"ret": -2,
					"msg": '参数错误！'
				})
			}
			context.commit('user_setState', {
				"isUpdate": false
			})

			var promise = user.updateUserInfo({
				"gender": context.state.info.gender,
				"nick_name": context.state.info.nick_name,
				"avatar_url": context.state.info.avatar_url,
				"signature": context.state.info.signature
			}).then(res => {
				context.commit('user_setState', {
					"isUpdate": true
				})
				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isUpdate": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 获取用户信息
		user_getUserInfo(context, payload) {
			// 判断是否自己信息
			if (payload.userId == context.state.info.uid) {
				return Promise.resolve(context.state.info);
			}

			var promise = user.getUserInfo(payload).then(res => {
				// 用户头像加入压缩条件
				// if (res.info.avatar_url.indexOf('?') < 0) {
				// 	res.info.avatar_url += '?x-oss-process=image/resize,w_180,h_180,m_fill/auto-orient,1/quality,q_100/format,jpg';
				// }

				// 自己的信息用token拿
				if (!payload.userId) {
					context.commit('user_setUserInfo', res.info);
				}

				return Promise.resolve(res.info);
			}).catch((err) => {
				return Promise.reject(err);
			});
			return promise;
		},
		// 退出登录
		user_ourlogin(context, payload) {
			context.commit('user_setUserInfo', {
				avatar_url: '',
				black: '',
				c_age: '',
				fans_count: '',
				nick_name: '',
				opus_count: '',
				relation: '',
				signature: '',
				uid: '',
				isLogin: '',
			});
			// 登录成功后，讲token写入cookie
			Cookies.remove('token', {
				domain:  process.env.NODE_ENV != 'development' ? 'eryuzhisen.com' : '',
				path: '/',
			});
			return Promise.resolve(1);
		},
		// 接触手机绑定
		user_unboundPhone(context, payload) {
			if (!context.state.isUnboundPhone) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('user_setState', {
				"isUnboundPhone": false
			})

			var promise = user.unboundPhone({
				"phone_num": context.state.phone, //手机号
				"phone_vcode": context.state.code.phone_vcode, //手机号验证码
			}).then(res => {
				context.commit('user_setState', {
					"phone": '',
					"code": {
						pic_code: '',
						pic_vid: '',
						pic_vcode: '',
						phone_vcode: ''
					},
					"isUnboundPhone": true
				});

				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isUnboundPhone": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 接触手机绑定
		user_reBindPhone(context, payload) {
			if (!context.state.isreBindPhone) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('user_setState', {
				"isreBindPhone": false
			})

			var promise = user.reBindPhone({
				"phone_num": context.state.phone, //手机号
				"phone_vcode": context.state.code.phone_vcode, //手机号验证码
			}).then(res => {
				context.commit('user_setState', {
					"phone": '',
					"code": {
						pic_code: '',
						pic_vid: '',
						pic_vcode: '',
						phone_vcode: ''
					},
					"isreBindPhone": true
				});

				return Promise.resolve(res);
			}).catch((err) => {
				context.commit('user_setState', {
					"isreBindPhone": true
				})

				return Promise.reject(err);
			});
			return promise;
		},
		// 接触手机绑定
		user_checkName(context, payload) {
			var promise = user.checkName(payload).then(res => {
				return Promise.resolve(res);
			}).catch((err) => {
				return Promise.reject(err);
			});
			return promise;
		},
	}
}