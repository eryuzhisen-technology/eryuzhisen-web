webpackJsonp([23,26],{12:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=h.baseUrl+"auth/getPicVerifyCode",r=(0,C.default)({method:"GET",url:t}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){case 10001:t="错误码";break;default:t="错误码"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)});return r}function i(e){var t=h.baseUrl+"auth/getPhoneVerifyCode";return(0,C.default)({method:"GET",url:t,params:e}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){case 10001:t="图形码有误！";break;case 20002:t="该手机号已经被绑定，请换其他手机号再试";break;default:t="图形码有误！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})}function n(e){var t=h.baseUrl+"auth/sigin";e._header||{};return delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e)}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){case 20011:t="密码错误！";break;case 20001:t="该手机号未绑定！";break;case 20005:e.data.pwd_err_times>=5?t="图片验证码已过期!":(e.data.pwd_err_times=5,t="请输入图片验证码!");break;case 20003:e.data.pwd_err_times=5,t="图片验证错误!";break;default:t="网络异常"}return(0,h._reject)({ret:e.data.ret,pwd_err_times:e.data.pwd_err_times||0,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})}function o(e){var t=h.baseUrl+"auth/sigup",r=e._header||{};return delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e),headers:r}).then(function(e){if(0!=e.data.ret){var t;switch(Number(res.errcode)){case 20007:t="手机验证码错误!";break;case 20002:t="该手机号已经被绑定，请换其他手机号再试!";break;default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})}function c(e){var t=h.baseUrl+"auth/resetPwd",r=e._header||{};return delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e),headers:r}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){case 20007:t="手机验证码错误!";break;default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})}function d(e){var t=h.baseUrl+"user/updateUserInfo",r=(e._header||{},b.default.get("token"));return r?(delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e),headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}function u(e){var t=h.baseUrl+"user/getUserInfo",r=(e._header||{},b.default.get("token"));return r?(delete e._header,(0,C.default)({method:"GET",url:t,params:e,headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}function _(e){var t=h.baseUrl+"auth/unboundPhone",r=b.default.get("token");return r?(delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e),headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}function l(e){var t=h.baseUrl+"auth/reBindPhone",r=b.default.get("token");return r?(delete e._header,(0,C.default)({method:"POST",url:t,data:(0,m.default)(e),headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}function p(e){var t=h.baseUrl+"user/getBlackList",r=b.default.get("token");return r?(delete e._header,(0,C.default)({method:"GET",url:t,params:e,headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}function f(e){var t=h.baseUrl+"user/delBlack/"+e.userId,r=b.default.get("token");return r?(delete e._header,(0,C.default)({method:"DELETE",url:t,headers:{token:r}}).then(function(e){if(0!=e.data.ret){var t;switch(Number(e.data.errcode)){default:t="网络异常！"}return(0,h._reject)({ret:e.data.ret,msg:t})}return e.data}).catch(function(e){return(0,h._rejectObj)(e)})):(0,h._rejectObj)({ret:-10,msg:"未登录"})}Object.defineProperty(t,"__esModule",{value:!0}),t._reject=t.delBlack=t.getBlackList=t.reBindPhone=t.unboundPhone=t.getUserInfo=t.updateUserInfo=t.resetPwd=t.sigup=t.sigin=t.getPhoneVerifyCode=t.getPicVerifyCode=void 0;var v=r(19),m=a(v),h=r(2),g=r(9),b=a(g),w=r(17),C=a(w);C.default.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",C.default.defaults.headers.get["X-Requested-With"]="XMLHttpRequest",t.getPicVerifyCode=s,t.getPhoneVerifyCode=i,t.sigin=n,t.sigup=o,t.resetPwd=c,t.updateUserInfo=d,t.getUserInfo=u,t.unboundPhone=_,t.reBindPhone=l,t.getBlackList=p,t.delBlack=f,t._reject=h._reject},13:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(){return{show:!1,step:1,create:{image:"",name:"",type:"",typeArr:["小说","漫画","文字"],status:"",statusArr:["上架","下架"],tags:["都市传说","神秘学","悬疑","黑暗童话","心理学","博物志","忧郁","妖怪","推理"],intro:""}}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),n=a(i);t.default={state:s(),mutations:{article_reset:function(e,t){e=t},article_setState:function(e,t){for(var r in t)if(t.hasOwnProperty(r))if("object"===(0,n.default)(t[r]))for(var a in t[r])e[r][a]=t[r][a];else e[r]=t[r]}},actions:{article_setState:function(e,t){e.commit("article_setState",t)},article_reset:function(e){e.commit("article_reset",s())}}}},14:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(){return{type:"declaration",show:!1,top:{status:"z-warn",msg:"你关注的X个作品已经更新",timeClose:2e3},dialog:{title:{text:"使用扫一扫分享给微信好友",align:"z-center"},content:{title:"",text:"",html:'<div style="padding: 10px 0;"><img src="/dist/images/author/img-1.png" /></div>'},btn:{cancel:{text:"取消",callback:function(){}},comfire:{text:"确认",callback:function(){}}}},report:{type:"adv"},warn:{title:"确定要删除?",content:"删除后将无法恢复，请谨慎处理"}}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),n=a(i);t.default={state:s(),mutations:{bubble_setState:function(e,t){for(var r in t)if(t.hasOwnProperty(r))if("object"===(0,n.default)(t[r]))for(var a in t[r])e[r][a]=t[r][a];else e[r]=t[r]}},actions:{bubble_showBubble:function(e,t){e.commit("bubble_setState",t),setTimeout(function(){return console.log(e.state.type),"top"==e.state.type&&void e.dispatch("bubble_closeBubble")},e.state.top.timeClose)},bubble_closeBubble:function(e,t){e.commit("bubble_setState",s())}}}},146:function(e,t,r){r(248);var a=r(0)(r(193),r(287),null,null);e.exports=a.exports},15:function(e,t,r){"use strict";function a(){return{show:!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={state:a(),mutations:{feedback_switch:function(e,t){e.show=t}},actions:{feedback_switch:function(e,t){e.commit("feedback_switch",t)}}}},16:function(e,t,r){"use strict";(function(e){function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(11),n=s(i),o=r(3),c=s(o),d=r(12),u=a(d),_=r(9),l=s(_);t.default={state:{password:"",repasswrd:"",newpassword:"",renewpassword:"",pwd_err_times:0,phone:"",time:0,info:{isLogin:!1,nick_name:"",avatar_url:"",signature:""},code:{pic_code:"",pic_vid:"",pic_vcode:"",phone_vcode:""},isCodeCan:!1,isPhoneCan:!1,isReset:!0,isLogin:!0,isUpdate:!0,isRegister:!0,isGetUserinfo:!0,isUnboundPhone:!0,isreBindPhone:!0,isgetBlackList:!0,isgetBlackCount:!0,isdelBlack:!0},mutations:{user_setState:function(e,t){for(var r in t)if(t.hasOwnProperty(r))if("object"===(0,c.default)(t[r]))for(var a in t[r])e[r][a]=t[r][a];else e[r]=t[r]},user_setTime:function(e){e.time--}},actions:{user_setState:function(e,t){e.commit("user_setState",t)},user_getPicVerifyCode:function(e,t){if(!t.init&&!e.state.isCodeCan)return!1;e.commit("user_setState",{isCodeCan:!1});var r=u.getPicVerifyCode(t).then(function(t){e.commit("user_setState",{isCodeCan:!0,isPhoneCan:!0,code:{pic_vcode:String(t.pic_vcode),pic_vid:t.pic_vid}})}).catch(function(t){return e.commit("user_setState",{isCodeCan:!0}),u._reject(t)});return r},user_getPhoneVerifyCode:function(e,t){if(!e.state.isPhoneCan)return!1;var r=u.getPhoneVerifyCode({verifyType:t.verifyType,phoneNum:e.state.phone,picVcode:e.state.code.pic_code,picVid:e.state.code.pic_vid}).then(function(t){e.commit("user_setState",{isPhoneCan:!1,time:60});var r=setInterval(function(){return e.state.time<=0?(e.commit("user_setState",{isPhoneCan:!0}),clearInterval(r),!1):void e.commit("user_setTime")},1e3)});return r},user_sigin:function(e,t){if(!e.state.isLogin)return!1;var r=u.sigin({phone_num:e.state.phone,password:e.state.password,pic_vid:e.state.code.pic_vid,pic_vcode:e.state.code.pic_code,device_no:t.device_no}).then(function(t){e.commit("user_setState",{isLogin:!0}),l.default.set("token",t.token,{path:"/",expires:7})}).catch(function(t){return e.commit("user_setState",{pwd_err_times:t.pwd_err_times,isLogin:!0}),t.pwd_err_times>=5&&e.dispatch("user_getPicVerifyCode",{init:!0}),u._reject(t)});return r},user_sigup:function(e,t){if(!e.state.isRegister)return!1;e.commit("user_setState",{isRegister:!1});var r=u.sigup({phone_num:e.state.phone,password:e.state.password,pic_vid:e.state.code.pic_vid,pic_vcode:e.state.code.pic_code,phone_vcode:e.state.code.phone_vcode,device_no:t.device_no,_header:t._header}).then(function(t){e.commit("user_setState",{isRegister:!0})}).catch(function(t){return e.commit("user_setState",{isRegister:!0}),u._reject(t)});return r},user_backPwd:function(e,t){if(!e.state.isReset)return!1;e.commit("user_setState",{isReset:!1});var r=u.resetPwd({phone_num:e.state.phone,password:e.state.password,phone_vcode:e.state.code.phone_vcode,device_no:t.device_no,_header:t._header}).then(function(t){e.commit("user_setState",{isReset:!0})}).catch(function(){return e.commit("user_setState",{isReset:!0}),u._reject(res)});return r},user_resetPwd:function(t,r){if(!t.state.isReset)return!1;if(!e.trim(t.state.password)||t.state.password.length<6||t.state.password.length>12)return u._reject({ret:-2,msg:"输入旧密码"});if(!e.trim(t.state.newpassword)||t.state.newpassword.length<6||t.state.newpassword.length>12)return u._reject({ret:-2,msg:"输入新密码"});if(t.state.newpassword!=t.state.renewpassword)return u._reject({ret:-2,msg:"密码不一致"});if(!e.trim(t.state.code.phone_vcode))return u._reject({ret:-2,msg:"输入验证码"});t.commit("user_setState",{isReset:!1});var a=u.resetPwd({phone_num:t.state.phone,password:t.state.password,phone_vcode:t.state.code.phone_vcode,device_no:r.device_no,_header:r._header}).then(function(e){return t.commit("user_setState",{isReset:!0}),e}).catch(function(){return t.commit("user_setState",{isReset:!0}),u._reject(res)});return a},user_updateUserInfo:function(t,r){if(!t.state.isUpdate)return!1;if(!e.trim(t.state.info.nick_name)&&!e.trim(t.state.info.avatar_url)&&!e.trim(t.state.info.signature))return u._reject({ret:-2,msg:"参数错误！"});t.commit("user_setState",{isUpdate:!1});var a=u.updateUserInfo({nick_name:t.state.info.nick_name,avatar_url:t.state.info.avatar_url,signature:t.state.info.signature}).then(function(e){t.commit("user_setState",{isUpdate:!0})}).catch(function(e){return t.commit("user_setState",{isUpdate:!0}),u._reject(e)});return a},user_getUserInfo:function(e,t){if(!e.state.isGetUserinfo)return!1;e.commit("user_setState",{isGetUserinfo:!1});var r=u.getUserInfo({}).then(function(t){return e.commit("user_setState",{isGetUserinfo:!0,info:{isLogin:!0,nick_name:t.info.nick_name,avatar_url:t.info.avatar_url,signature:t.info.signature}}),n.default.resolve(t.info)}).catch(function(t){return e.commit("user_setState",{isGetUserinfo:!0}),u._reject(t)});return r},user_ourlogin:function(e,t){e.commit("user_setState",{isGetUserinfo:!0,info:{isLogin:!1,nick_name:"",avatar_url:"",signature:""}}),l.default.remove("token",{})},user_unboundPhone:function(e,t){if(!e.state.isUnboundPhone)return!1;e.commit("user_setState",{isUnboundPhone:!1});var r=u.unboundPhone({phone_num:e.state.phone,phone_vcode:e.state.code.phone_vcode}).then(function(t){return e.commit("user_setState",{phone:"",code:{pic_code:"",pic_vid:"",pic_vcode:"",phone_vcode:""},isUnboundPhone:!0}),n.default.resolve(t)}).catch(function(t){return e.commit("user_setState",{isUnboundPhone:!0}),u._reject(t)});return r},user_reBindPhone:function(e,t){if(!e.state.isreBindPhone)return!1;e.commit("user_setState",{isreBindPhone:!1});var r=u.reBindPhone({phone_num:e.state.phone,phone_vcode:e.state.code.phone_vcode}).then(function(t){return e.commit("user_setState",{phone:"",code:{pic_code:"",pic_vid:"",pic_vcode:"",phone_vcode:""},isreBindPhone:!0}),n.default.resolve(t)}).catch(function(t){return e.commit("user_setState",{isreBindPhone:!0}),u._reject(t)});return r},user_getBlackList:function(e,t){if(!e.state.isgetBlackList)return!1;e.commit("user_setState",{isgetBlackList:!1});var r=u.getBlackList({pagination:1,page:t.pageIndex,pageSize:t.pageSize}).then(function(t){return e.commit("user_setState",{isgetBlackList:!0}),t.list.map(function(e,t){e.isBack=!0}),n.default.resolve(t)}).catch(function(t){return e.commit("user_setState",{isgetBlackList:!0}),u._reject(t)});return r},user_delBlack:function(e,t){if(!e.state.isdelBlack)return!1;e.commit("user_setState",{isdelBlack:!1});var r=u.delBlack({userId:t.userId}).then(function(t){return e.commit("user_setState",{isdelBlack:!0}),n.default.resolve(t)}).catch(function(t){return e.commit("user_setState",{isdelBlack:!0}),u._reject(t)});return r}}}}).call(t,r(1))},193:function(e,t,r){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),i=r(51),n=a(i),o=r(2);t.default={name:"register",data:function(){return{url:{index:o.distUrl+"index.html",login:o.distUrl+"login.html"},phone:"",password:"",repasswrd:"",pic_code:"",phone_vcode:"",phone_reg:!0,password_reg:!0,pic_code_reg:!0,phone_vcode_reg:!0,phone_reg_con:"",password_reg_con:"",pic_code_reg_con:"",phone_vcode_reg_con:""}},computed:(0,s.mapState)({isCodeCan:function(e){return e.user.isCodeCan},pic_vid:function(e){return e.user.code.pic_vid},pic_vcode:function(e){return e.user.code.pic_vcode},timeText:function(e){return e.user.time?"重新发送 "+e.user.time:"发送验证码"}}),methods:{getCode:function(e){var t=this;this.$store.dispatch("user_getPicVerifyCode",{init:e}).catch(function(e){t.$store.dispatch("bubble_showBubble",{show:!0,type:"top",top:{status:"z-warn",msg:e.msg}})})},getPhoneVerifyCode:function(){var t=this;return/^1(3|4|5|7|8)\d{9}$/i.test(this.phone)?(this.phone_reg=!0,this.phone_reg_con="",""==e.trim(this.pic_code)?(this.pic_code_reg=!1,this.pic_code_reg_con="输入图形码",!1):(this.pic_code_reg=!0,this.pic_code_reg_con="",void this.$store.dispatch("user_setState",{phone:this.phone,code:{pic_code:this.pic_code}}).then(function(){t.$store.dispatch("user_getPhoneVerifyCode",{verifyType:"0"}).catch(function(e){t.$store.dispatch("bubble_showBubble",{show:!0,type:"top",top:{status:"z-warn",msg:e.msg}})})}))):(this.phone_reg=!1,this.phone_reg_con="手机有误",!1)},register:function(){var t=this;return/^1\d{10}$/i.test(this.phone)?(this.phone_reg=!0,this.phone_reg_con="",""==e.trim(this.password)?(this.password_reg=!1,this.password_reg_con="输入密码",!1):(this.password_reg=!0,this.password_reg_con="",""==e.trim(this.pic_code)?(this.pic_code_reg=!1,this.pic_code_reg_con="输入图形码",!1):(this.pic_code_reg=!0,this.pic_code_reg_con="",""==e.trim(this.phone_vcode)?(this.phone_vcode_reg=!1,this.phone_vcode_reg_con="输入验证码",!1):(this.phone_vcode_reg=!0,this.phone_vcode_reg_con="",void this.$store.dispatch("user_setState",{phone:this.phone,password:this.password,code:{pic_code:this.pic_code,phone_vcode:this.phone_vcode}}).then(function(){t.$store.dispatch("user_sigup",{device_no:(new Date).getTime()}).then(function(){window.location.href=t.url.index}).catch(function(e){t.$store.dispatch("bubble_showBubble",{show:!0,type:"top",top:{status:"z-warn",msg:e.msg}})})}))))):(this.phone_reg=!1,this.phone_reg_con="手机有误",!1)}},mounted:function(){this.getCode(!0)},components:{Bubble:n.default}}}).call(t,r(1))},2:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return c.default.reject(e)}function i(e){return s(e.ret&&e.ret>0?e:{ret:e.ret||-1,msg:e.msg||"网络异常",error:e})}Object.defineProperty(t,"__esModule",{value:!0}),t._rejectObj=t._reject=t.distUrl=t.imgBaseUrl=t.baseUrl=void 0;var n,o=r(11),c=a(o),d="",u="";t.baseUrl=n="/java/eryuzhisen-server/",t.distUrl=u="/",t.imgBaseUrl=d="",t.baseUrl=n,t.imgBaseUrl=d,t.distUrl=u,t._reject=s,t._rejectObj=i},248:function(e,t){},287:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-user"},[r("div",{staticClass:"m-user-wrap"},[r("div",{staticClass:"m-user-dialog"},[r("div",{staticClass:"m-user-dialog__tit"},[e._v("注册账号")]),e._v(" "),r("div",{staticClass:"m-user-dialog__con"},[r("div",{staticClass:"m-user-dialog__item"},[e.phone_reg?e._e():r("div",{staticClass:"m-user-dialog__tip"},[r("div",{staticClass:"tip-arrow"}),e._v(" "),r("div",{staticClass:"tip-text"},[e._v(e._s(e.phone_reg_con))])]),e._v(" "),r("div",{staticClass:"m-user-dialog__input cpm_form_input",class:{"z-error":!e.phone_reg}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"m-user-dialog__item"},[e.password_reg?e._e():r("div",{staticClass:"m-user-dialog__tip"},[r("div",{staticClass:"tip-arrow"}),e._v(" "),r("div",{staticClass:"tip-text"},[e._v(e._s(e.password_reg_con))])]),e._v(" "),r("div",{staticClass:"m-user-dialog__input cpm_form_input",class:{"z-error":!e.password_reg}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"m-user-dialog__item"},[e.pic_code_reg?e._e():r("div",{staticClass:"m-user-dialog__tip"},[r("div",{staticClass:"tip-arrow"}),e._v(" "),r("div",{staticClass:"tip-text"},[e._v(e._s(e.pic_code_reg_con))])]),e._v(" "),r("div",{staticClass:"m-user-dialog__input cpm_form_input",class:{"z-error":!e.pic_code_reg}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.pic_code,expression:"pic_code"}],attrs:{type:"text",placeholder:"图形码"},domProps:{value:e.pic_code},on:{input:function(t){t.target.composing||(e.pic_code=t.target.value)}}}),e._v(" "),e.isCodeCan?r("img",{attrs:{src:"data:image/png;base64,"+e.pic_vcode},on:{click:e.getCode}}):e._e()])]),e._v(" "),r("div",{staticClass:"m-user-dialog__item z-60"},[e.phone_vcode_reg?e._e():r("div",{staticClass:"m-user-dialog__tip"},[r("div",{staticClass:"tip-arrow"}),e._v(" "),r("div",{staticClass:"tip-text"},[e._v(e._s(e.phone_vcode_reg_con))])]),e._v(" "),r("div",{staticClass:"m-user-dialog__input m-user-dialog__input-phone cpm_form_input cpm_left",class:{"z-error":!e.phone_vcode_reg}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_vcode,expression:"phone_vcode"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:e.phone_vcode},on:{input:function(t){t.target.composing||(e.phone_vcode=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"m-user-dialog__btn m-user-dialog__btn-phone cpm_right cpm_button_warn",on:{click:e.getPhoneVerifyCode}},[e._v(e._s(e.timeText))])]),e._v(" "),r("div",{staticClass:"cpm_clear"}),e._v(" "),r("div",{staticClass:"m-user-dialog__item"},[r("div",{staticClass:"m-user-dialog__btn cpm_button_default z-bolder",on:{click:e.register}},[e._v("注册")])]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"m-user-dialog__item"},[r("a",{staticClass:"m-user-dialog__login",attrs:{href:e.url.login}},[e._v("已有账号 立即登录")])])])])]),e._v(" "),r("Bubble")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-user-dialog__item"},[r("div",{staticClass:"m-user-dialog__agree"},[e._v("\n\n                    点击注册按钮即表示同意并愿遵守耳语 \n                    "),r("a",{attrs:{href:"#none"}},[e._v("用户协议")]),e._v(" \n                    和 \n                    "),r("a",{attrs:{href:"#none"}},[e._v("隐私政策")])])])}]}},326:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=r(8),i=(a(s),r(7)),n=(a(i),r(5)),o=a(n),c=r(146),d=a(c),u=r(6),_=a(u);new o.default({el:"#app",store:_.default,render:function(e){return e(d.default)}})},49:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(4);t.default={computed:(0,a.mapState)({data:function(e){return e.bubble}}),methods:{close:function(){this.$store.dispatch("bubble_closeBubble")},radioSwitch:function(t){e(".c-bubble-report .report-content .select-item").removeClass("z-on"),e(t.currentTarget).addClass("z-on"),this.report.type=t.currentTarget.dataset.type}}}}).call(t,r(1))},50:function(e,t){},51:function(e,t,r){r(50);var a=r(0)(r(49),r(52),null,null);e.exports=a.exports},52:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"c-bubble",class:{cpm_hide:!e.data.show},attrs:{id:"bubble"}},[r("div",{staticClass:"c-bubble-mask",on:{click:e.close}}),e._v(" "),"top"==e.data.type?r("div",{staticClass:"c-bubble-top",class:e.data.top.status},[e._v("\n    \t"+e._s(e.data.top.msg)+"\n    ")]):e._e(),e._v(" "),"dialog"==e.data.type?r("div",{staticClass:"c-bubble-dialog"},[e.data.dialog.title?r("div",{staticClass:"dialog-title",class:e.data.dialog.title.align},[e._v("\n    \t\t"+e._s(e.data.dialog.title.text)+"\n    \t")]):e._e(),e._v(" "),e.data.dialog.content?r("div",{staticClass:"dialog-content"},[e.data.dialog.content.title?r("div",{staticClass:"dialog-content-title"},[e._v(e._s(e.data.dialog.content.title))]):e._e(),e._v(" "),e.data.dialog.content.text?r("div",{staticClass:"dialog-content-text"},[e._v(e._s(e.data.dialog.content.text))]):e._e(),e._v(" "),e.data.dialog.content.html?r("div",{domProps:{innerHTML:e._s(e.data.dialog.content.html)}}):e._e()]):e._e(),e._v(" "),e.data.dialog.btn?r("div",{staticClass:"dialog-btn"},[e.data.dialog.btn.cancel?r("div",{staticClass:"dialog-btn-cancel cpm_button_weak z-disline"},[e._v(e._s(e.data.dialog.btn.comfire.text))]):e._e(),e._v(" "),e.data.dialog.btn.comfire?r("div",{staticClass:"dialog-btn-comfire cpm_button_default z-disline"},[e._v(e._s(e.data.dialog.btn.comfire.text))]):e._e()]):e._e()]):e._e(),e._v(" "),"report"==e.data.type?r("div",{staticClass:"c-bubble-report"},[r("div",{staticClass:"report-title"},[e._v("\n    \t\t选择举报类型\n    \t")]),e._v(" "),r("div",{staticClass:"report-content"},[r("div",{staticClass:"select-item z-on",attrs:{"data-type":"adv"},on:{click:function(t){e.radioSwitch(t)}}},[r("span",{staticClass:"select-item-radio"}),e._v(" "),r("span",{staticClass:"select-item-text"},[e._v("广告或者垃圾信息")])]),e._v(" "),r("div",{staticClass:"select-item",attrs:{"data-type":"chao"},on:{click:function(t){e.radioSwitch(t)}}},[r("span",{staticClass:"select-item-radio"}),e._v(" "),r("span",{staticClass:"select-item-text"},[e._v("抄袭或未授权转载")])]),e._v(" "),r("div",{staticClass:"select-item",attrs:{"data-type":"other"},on:{click:function(t){e.radioSwitch(t)}}},[r("span",{staticClass:"select-item-radio"}),e._v(" "),r("span",{staticClass:"select-item-text"},[e._v("其他原因")])]),e._v(" "),r("div",{staticClass:"textare-item"},["other"==e.report.type?r("textarea",{attrs:{placeholder:"请输入举报原因"}}):r("textarea",{attrs:{disabled:"",placeholder:"请输入举报原因"}})])]),e._v(" "),e._m(0)]):e._e(),e._v(" "),"declaration"==e.data.type?r("div",{staticClass:"c-bubble-declaration"},[r("div",{staticClass:"declaration-title"},[e._v("原创声明")]),e._v(" "),e._m(1),e._v(" "),e._m(2)]):e._e(),e._v(" "),"warn"==e.data.type?r("div",{staticClass:"c-bubble-warn"},[r("div",{staticClass:"warn-title"},[e._v(e._s(e.data.warn.title))]),e._v(" "),r("div",{staticClass:"warn-content"},[e._v("\n    \t\t"+e._s(e.data.warn.content)+"\n    \t")]),e._v(" "),r("div",{staticClass:"warn-bottom"},[r("div",{staticClass:"warn-bottom-cancel cpm_button_weak z-disline",on:{click:e.close}},[e._v("取消")]),e._v(" "),r("div",{staticClass:"warn-bottom-comfire cpm_button_default z-disline"},[e._v("确认")])])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"report-btn"},[r("div",{staticClass:"report-btn-cancel cpm_button_weak z-disline"},[e._v("取消")]),e._v(" "),r("div",{staticClass:"report-btn-comfire cpm_button_default z-disline"},[e._v("确认")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"declaration-content"},[r("h3",[e._v("原创特指自己独立完成创作的作品。歪曲、篡改他人创作或者抄袭、剽窃他人创作而产生的作品，改编、翻译、注释、整理他人已有创作而产生的作品均不能说是原创。")]),e._v(" "),r("p",[e._v("如下情形不得对作品进行原创声明，一经发现将对作品永久收回原创声明功能使用权限，导致严重影响的还将对违规帐号予以一定期限内封号处理；")]),e._v(" "),r("p",[e._v("1. 未取得合法授权发布的作品；")]),e._v(" "),r("p",[e._v("2. 作品主要篇幅为诸如“法律、法规，国家机关的决议、决定、命令和其他具有立法、行政、司法性质的文件、时事新闻、历法、通用数表、通用表格和公式”等公共内容；")]),e._v(" "),r("p",[e._v("3. 大篇幅引用他人内容或作品主要内容为他人作品，如书摘、文摘、报摘等；")]),e._v(" "),r("p",[e._v("4. 营销性质的内容；")]),e._v(" "),r("p",[e._v("5. 整合的内容；")]),e._v(" "),r("p",[e._v("6. 对非独家代理的作品声明原创等；")]),e._v(" "),r("p",[e._v("7. 色情低俗内容、暴力内容、等内容；")]),e._v(" "),r("p",[e._v("8. 违反法律法规、政策及公序良俗、社会公德，违反《耳语作品规则》、《耳语版权声明》，或干扰耳语平台正常运营和侵犯其他用户或第三方合法权益内容的信息。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"declaration-bottom"},[r("div",{staticClass:"declaration-bottom-cancel cpm_button_weak z-disline"},[e._v("取消")]),e._v(" "),r("div",{staticClass:"declaration-bottom-comfire cpm_button_default z-disline"},[e._v("确认")])])}]}},6:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(5),i=a(s),n=r(4),o=a(n),c=r(14),d=a(c),u=r(13),_=a(u),l=r(16),p=a(l),f=r(15),v=a(f);i.default.use(o.default);var m=new o.default.Store({modules:{bubble:d.default,article:_.default,user:p.default,feedback:v.default},strict:!0});t.default=m},7:function(e,t){},8:function(e,t){}},[326]);
//# sourceMappingURL=register.6dec46c5c2b377872055.js.map