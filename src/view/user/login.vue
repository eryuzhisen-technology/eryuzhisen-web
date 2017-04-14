<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './user.less';
</style>

<!-- html代码 -->
<template>
<div class="m-user">
<div class="m-user-wrap">
    <div class="m-user-dialog">
    	<div class="m-user-dialog__tit">登录账号</div>
    	<div class="m-user-dialog__con">
    		<div class="m-user-dialog__item">
    			<div v-if="!phone_reg" class="m-user-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{phone_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !phone_reg}">
    				<input type="text" placeholder="手机号" v-model="phone" />
    			</div>
    		</div>
    		<div class="m-user-dialog__item">
    			<div v-if="!password_reg" class="m-user-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{password_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !password_reg}">
    				<input type="password" placeholder="密码" v-model="password" />
    			</div>
    		</div>
    		<div v-if="pwd_err_times >= 5" class="m-user-dialog__item">
    			<div v-if="!pic_code_reg" class="m-user-dialog__tip">
    				<div class="tip-arrow"></div>
    				<div class="tip-text">{{pic_code_reg_con}}</div>
    			</div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
    				<input type="text" placeholder="图形码" v-model="pic_code" />
    				<img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
    			</div>
    		</div>
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__select" @click="select">
    				<span class="select-icon" :class="{on: isSelect}" ></span>记住密码
    			</div>
    			<a class="m-user-dialog__back" :href="url.back">忘记密码</a>
    		</div>
    		<div class="cpm_clear"></div>
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__btn cpm_button_default z-bolder" @click="login">登录</div>
    		</div>
    		<div class="m-user-dialog__item">
    			<a class="m-user-dialog__register" :href="url.register">没有账号 立即注册</a>
    		</div>
    	</div>
    </div>
</div>
<Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
import {distUrl} from '../../server/config'
import bubble from '../../component/bubble'
export default {
	components: {
    	Bubble: bubble
    },
    data () {
    	return {
    		isSelect: false,
    		url: {
                register: distUrl + 'register.html',
                index: distUrl + 'index.html',
                back: distUrl + 'back.html'
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
            }).catch(res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            });
    	},
    	login (){
    		if (!/^1\d{10}$/i.test(this.phone)) {
    			this.phone_reg = false;
    			this.phone_reg_con = '输入的手机号码有误';
    			return false;
    		} else {
    			this.phone_reg = true;
    			this.phone_reg_con = '';
    		}
    		if ($.trim(this.password) == '') {
    			this.password_reg = false;
    			this.password_reg_con = '密码有误！';
    			return false;
    		} else {
    			this.password_reg = true;
    			this.password_reg_con = '';
    		}
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
            }).then( (res) => {
                this.$store.dispatch('user_sigin', {
                    "device_no": (new Date()).getTime(),//设备号,没有则新生成一个,统计用
                    _header: {
                        "Client_type": 3, // 设备号
                    }
                }).then( (res) => {
                    window.location.href = this.url.index;
                }).catch( (res) => {
                    this.$store.dispatch('bubble_showBubble', {
                        show: true,
                        type: 'top',
                        top: {
                            status: 'z-warn',
                            msg: res.msg
                        }
                    })
                });
            })
    	}
    }
}
</script>

