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
    	<div class="m-user-dialog__tit">注册账号</div>
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
    		<div class="m-user-dialog__item">
                <div v-if="!pic_code_reg" class="m-user-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{pic_code_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
    				<input type="text" placeholder="图形码" v-model="pic_code" />
    				<img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
    			</div>
    		</div>
    		<div class="m-user-dialog__item z-60">
                <div v-if="!phone_vcode_reg" class="m-user-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{phone_vcode_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input m-user-dialog__input-phone cpm_form_input cpm_left" :class="{'z-error': !phone_vcode_reg}">
    				<input type="text" placeholder="验证码" v-model="phone_vcode" />
    			</div>
    			<div class="m-user-dialog__btn m-user-dialog__btn-phone cpm_right cpm_button_warn" @click="getPhoneVerifyCode">{{timeText}}</div>
    		</div>
            <div class="cpm_clear"></div>
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__btn cpm_button_default z-bolder" @click="register">注册</div>
    		</div>
    		<div class="m-user-dialog__item">
                <div class="m-user-dialog__agree">

                    点击注册按钮即表示同意并愿遵守耳语 
                    <a href="#none">用户协议</a> 
                    和 
                    <a href="#none">隐私政策</a>
                </div>
            </div>
            <div class="m-user-dialog__item">
                <a class="m-user-dialog__login" :href="url.login">已有账号 立即登录</a>
            </div>
    	</div>
    </div>
</div>
<Bubble />
</div>
</template>

<script>
import { mapState } from 'vuex'
import bubble from '../../component/bubble'
import {distUrl} from '../../server/config'
export default {
    name: 'register',
    data () {
        return {
        	url: {
                index: distUrl + 'index.html',
        		login: distUrl + 'login.html'
        	},
        	phone: '',
            password: '',
            repasswrd: '',
            pic_code: '',
            phone_vcode: '',

            phone_reg: true,
            password_reg: true,
            pic_code_reg: true,
            phone_vcode_reg: true,
            phone_reg_con: '',
            password_reg_con: '',
            pic_code_reg_con: '',
            phone_vcode_reg_con: '',
        }
    },
    computed: mapState({
        isCodeCan: state => state.user.isCodeCan,
        pic_vid: state => state.user.code.pic_vid,
        pic_vcode: state => state.user.code.pic_vcode,
        timeText: state => state.user.time ? '重新发送 ' + state.user.time : '发送验证码'
    }),
    methods: {
		getCode (init){
            this.$store.dispatch('user_getPicVerifyCode', {
                init: init
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
    	getPhoneVerifyCode(){
            // 校验手机
            if (!/^1(3|4|5|7|8)\d{9}$/i.test(this.phone)) {
                this.phone_reg = false;
                this.phone_reg_con = '手机有误';
                return false;
            } else {
                this.phone_reg = true;
                this.phone_reg_con = '';
            }
            // 校验验证码
            if ($.trim(this.pic_code) == '') {
                this.pic_code_reg = false;
                this.pic_code_reg_con = '输入图形码';
                return false;
            } else {
                this.pic_code_reg = true;
                this.pic_code_reg_con = '';
            }
            
    		this.$store.dispatch('user_setState', {
                phone: this.phone, //手机号
                code: {
                    pic_code: this.pic_code, //图形验证码
                }
            }).then( () => {
                this.$store.dispatch('user_getPhoneVerifyCode', {
                    verifyType: "0", //注册验证
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
            }); 		
    	},
    	register (){
            // 校验手机
            if (!/^1\d{10}$/i.test(this.phone)) {
                this.phone_reg = false;
                this.phone_reg_con = '手机有误';
                return false;
            } else {
                this.phone_reg = true;
                this.phone_reg_con = '';
            }

            // 校验密码
            if ($.trim(this.password) == '') {
                this.password_reg = false;
                this.password_reg_con = '输入密码';
                return false;
            } else {
                this.password_reg = true;
                this.password_reg_con = '';
            }

            // 校验验证码
            if ($.trim(this.pic_code) == '') {
                this.pic_code_reg = false;
                this.pic_code_reg_con = '输入图形码';
                return false;
            } else {
                this.pic_code_reg = true;
                this.pic_code_reg_con = '';
            }

            // 校验验证码
            if ($.trim(this.phone_vcode) == '') {
                this.phone_vcode_reg = false;
                this.phone_vcode_reg_con = '输入验证码';
                return false;
            } else {
                this.phone_vcode_reg = true;
                this.phone_vcode_reg_con = '';
            }

    		this.$store.dispatch('user_setState', {
                phone: this.phone, //手机号
                password: this.password, // 密码
                code: {
                    pic_code: this.pic_code, //图形验证码
                    phone_vcode: this.phone_vcode //手机号验证码
                }
            }).then( () => {
                this.$store.dispatch('user_sigup', {
                    device_no: (new Date()).getTime()
                }).then(() => {
                    window.location.href = this.url.index;
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
            }); 
    	}
    },
    mounted(){
    	this.getCode(true);
    },
    components: {
    	Bubble: bubble
    }
}
</script>

