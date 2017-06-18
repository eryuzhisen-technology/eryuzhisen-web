<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) './user.less';
</style>

<!-- html代码 -->
<template>
<div class="m-user">
<div class="m-user-wrap">
    <div class="m-user-logo"><a href="./index.html"></a></div>
    <div class="m-user-dialog">
    	<div class="m-user-dialog__tit">登录账号</div>
    	<div class="m-user-dialog__con">
            <!-- 手机号 -->
    		<div class="m-user-dialog__item">
    			<div v-if="!phone_reg" class="c-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{phone_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !phone_reg}">
    				<input name="phone" type="text" placeholder="手机号" @keyup.enter="login" v-model="phone" autocomplete="new-password" spellcheck="false" />
    			</div>
    		</div>

            <!-- 密码 -->
    		<div class="m-user-dialog__item">
    			<div v-if="!password_reg" class="c-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{password_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !password_reg}">
    				<input name="password" type="password" placeholder="密码" @keyup.enter="login" v-model="password" autocomplete="new-password" spellcheck="false" />
    			</div>
    		</div>
    		<div v-if="pwd_err_times >= 5" class="m-user-dialog__item">
    			<div v-if="!pic_code_reg" class="c-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{pic_code_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
    				<input name="pic_code" type="text" placeholder="图形码" v-model="pic_code" @keyup.enter="login" spellcheck="false" />
    				<img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" autocomplete="off" />
    			</div>
    		</div>

            <!-- 记住密码 | 忘记密码 -->
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__select" @click="select">
    				<span class="select-icon" :class="{on: isSelect}" ></span>记住密码
    			</div>
    			<a class="m-user-dialog__back" :href="url.back">忘记密码</a>
    		</div>
    		<div class="cpm_clear"></div>

            <!-- 登陆 -->
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__btn cpm_button_default" @click="login">登录</div>
    		</div>

            <!-- 注册 -->
    		<div class="m-user-dialog__item m-user-dialog__text">
    			<a class="m-user-dialog__register" :href="url.register">没有账号 立即注册</a>
    		</div>
            <input class="cpm_hide" type="password" name="password" />
    	</div>
    </div>
</div>
<Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
    	return {
    		isSelect: true,
    		url: {
                register: './register.html',
                index: './index.html',
                back: './back.html'
            },
            phone: '',
            password: '',
            pic_code: '',
            phone_reg: true,
            password_reg: true,
            pic_code_reg: true,
            phone_reg_con: '',
            password_reg_con: '',
            pic_code_reg_con: '',
    	}
    },
    computed: mapState({
        isLogin: state => state.user.info.isLogin,
        pwd_err_times: state => state.user.pwd_err_times,
        isCodeCan: state => state.user.isCodeCan,
        pic_vid: state => state.user.code.pic_vid,
        pic_vcode: state => state.user.code.pic_vcode,
        timeText: state => state.user.time ? '重新发送 ' + state.user.time : '发送验证码'
    }),
    methods: {
    	select (){
    		this.isSelect = !this.isSelect
    	},
    	getCode (init){
            this.$store.dispatch('user_getPicVerifyCode', {
                init: true
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
    	},
    	login (){
    		// 校验手机
            if ($.trim(this.phone) == '') {
                this.phone_reg = false;
                this.phone_reg_con = '请输入手机号';
                return false;
            } else if (!/^1\d{10}$/i.test(this.phone)) {
                this.phone_reg = false;
                this.phone_reg_con = '手机号格式不正确';
                return false;
            } else {
                this.phone_reg = true;
                this.phone_reg_con = '';
            }

            // 校验密码
            if ($.trim(this.password) == '') {
                this.password_reg = false;
                this.password_reg_con = '请输入密码';
                return false;
            } else if ($.trim(this.password).length > 18 || $.trim(this.password).length < 6) {
                this.password_reg = false;
                this.password_reg_con = '密码应为6-18位数';
                return false;
            } else {
                this.password_reg = true;
                this.password_reg_con = '';
            }

            // 验证码
    		if ($.trim(this.pic_code) == '' && this.pwd_err_times >= 5) {
    			this.pic_code_reg = false;
    			this.pic_code_reg_con = '验证码有误';
    			return false;
    		} else {
    			this.pic_code_reg = true;
    			this.pic_code_reg_con = '';
    		}

            this.$store.dispatch('user_setState', {
                phone: this.phone, //手机号
                password: this.password, // 密码
                code: {
                    pic_code: this.pic_code //密码错误5超过5次,需要校验图形验证码
                }
            }).then( res => {
                this.$store.dispatch('user_sigin', {
                    "device_no": (new Date()).getTime(),//设备号,没有则新生成一个,统计用
                    _header: {
                        "Client_type": 3, // 设备号
                    },
                    isSave: this.isSelect // 是否记住密码
                }).then( res => {
                    this.goNext();
                    this.$store.dispatch('bubble_success', res);
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                });
            })
    	},
        goNext (){
            if (this.from) {
                window.location.href = decodeURIComponent(this.from);
            } else {
                window.location.href = this.url.index;
            }
        }
    },
    watch: {
        isLogin (newVal){
            if (newVal) {
                this.goNext();
            }
        }
    },
    mounted (){
        var that = this;
        this.from = this.$url.getUrlParam('from');

        $(".cpm_form_input input").on('focus', function(){
            var _this = $(this);
            var name = _this.attr('name');
            that[name + '_reg'] = true;
        })
        $(".m-user-logo").height($('.m-user-dialog').height());
    }
}
</script>

