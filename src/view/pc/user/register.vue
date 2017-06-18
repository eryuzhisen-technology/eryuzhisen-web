<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) './user.less';
.c-dialog__tip-yao {
    height: 80px;
    top: 50%;
    transform: translate(-115%, -50%);
    & .tip-text {
        line-height: 1.5rem;
        padding: 15px;
        height: 80px;
    }
}
</style>

<!-- html代码 -->
<template>
<div class="m-user">
<div class="m-user-wrap">
    <div class="m-user-logo"><a href="./index.html"></a></div>
    <div class="m-user-dialog">
    	<div class="m-user-dialog__tit">注册账号</div>
    	<div class="m-user-dialog__con">
            <!-- 邀请码 -->
            <div class="m-user-dialog__item">
                <div v-if="!yao_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{yao_reg_con}}</div>
                </div>
                <div v-if="yao_reg && focus" class="c-dialog__tip c-dialog__tip-yao">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">因社区内测原因而采用邀请码制，请加QQ群432769756向管理员索取</div>
                </div>
                <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !yao_reg}">
                    <input name="yao" type="text" placeholder="邀请码" @keyup.enter="register" v-model="yao" autocomplete="new-password" @focus="show" @blur="hide" spellcheck="false" />
                </div>
            </div>

            <!-- 手机号 -->
    		<div class="m-user-dialog__item">
                <div v-if="!phone_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{phone_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !phone_reg}">
    				<input name="phone" type="text" placeholder="手机号" @keyup.enter="register" v-model="phone" autocomplete="new-password" spellcheck="false" />
    			</div>
    		</div>

            <!-- 密码 -->
    		<div class="m-user-dialog__item">
                <div v-if="!password_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{password_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !password_reg}">
    				<input name="password" type="password" placeholder="密码" @keyup.enter="register" v-model="password" autocomplete="new-password" spellcheck="false" />
    			</div>
    		</div>

            <!-- 图形码 -->
    		<div class="m-user-dialog__item">
                <div v-if="!pic_code_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{pic_code_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
    				<input name="pic_code" type="text" placeholder="图形码" @keyup.enter="register" v-model="pic_code" autocomplete="new-password" spellcheck="false" />
    				<img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
    			</div>
    		</div>

            <!-- 验证码 -->
    		<div class="m-user-dialog__item z-60">
                <div v-if="!phone_vcode_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{phone_vcode_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input m-user-dialog__input-phone cpm_left" :class="{'z-error': !phone_vcode_reg}">
    				<input name="phone_vcode" type="text" placeholder="验证码" @keyup.enter="register" v-model="phone_vcode" autocomplete="new-password" spellcheck="false" />
    			</div>
    			<div class="m-user-dialog__btn m-user-dialog__btn-phone cpm_right cpm_button_weak" @click="getPhoneVerifyCode">{{timeText}}</div>
    		</div>
            <div class="cpm_clear"></div>

            <!-- 注册按钮 -->
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__btn m-user-dialog__btn-register cpm_button_default" @click="register">注册</div>
    		</div>

            <!-- 协议 -->
            <div class="m-user-dialog__text m-user-dialog__agree">
                注册即同意并愿意遵守耳语之森
                <a href="./agreement.html">用户协议</a> 
                和 
                <a href="./privacy.html">隐私政策</a>
            </div>

            <!-- 登陆跳转 -->
            <div class="m-user-dialog__item m-user-dialog__text">
                <a class="m-user-dialog__login" href="./login.html">已有账号 立即登录</a>
            </div>
            <input class="cmp_hide" type="password" />
    	</div>
    </div>
</div>
<Bubble />
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'register',
    data () {
        return {
            yao: '',
        	phone: '',
            password: '',
            repasswrd: '',
            pic_code: '',
            phone_vcode: '',

            focus: false,
            yao_reg: true,
            phone_reg: true,
            password_reg: true,
            pic_code_reg: true,
            phone_vcode_reg: true,
            yao_reg_con: '',
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
        show (){
            this.focus = true;
        },
        hide (){
            this.focus = false;
        },
		getCode (init){
            this.$store.dispatch('user_getPicVerifyCode', {
                init: init
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
    	getPhoneVerifyCode(){
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

            // 校验验证码
            if ($.trim(this.pic_code) == '') {
                this.pic_code_reg = false;
                this.pic_code_reg_con = '请输入图形码';
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
                }).then( resp => {
                    this.$store.dispatch('bubble_success', {
                        ret: 0,
                        type: 'top',
                        msg: '验证码已发送'
                    });
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                }); 
            }); 		
    	},
    	register (){
            // 邀请码
            if ($.trim(this.yao) == '') {
                this.yao_reg = false;
                this.yao_reg_con = '请输入邀请码';
                return false;
            } else {
                this.yao_reg = true;
                this.yao_reg_con = '';
            }
            
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

            // 校验图形码
            if ($.trim(this.pic_code) == '') {
                this.pic_code_reg = false;
                this.pic_code_reg_con = '请输入图形码';
                return false;
            } else {
                this.pic_code_reg = true;
                this.pic_code_reg_con = '';
            }

            // 校验验证码
            if ($.trim(this.phone_vcode) == '') {
                this.phone_vcode_reg = false;
                this.phone_vcode_reg_con = '请输入验证码';
                return false;
            } else {
                this.phone_vcode_reg = true;
                this.phone_vcode_reg_con = '';
            }

    		this.$store.dispatch('user_setState', {
                invite_code: this.yao, // 邀请码
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
                    window.location.href = './setting.userinfo.html';
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                }); 
            }); 
    	}
    },
    mounted(){
        var that = this;

    	this.getCode(true);

        $(".cpm_form_input input").on('focus', function(){
            var _this = $(this);
            var name = _this.attr('name');
            that[name + '_reg'] = true;
        })
        $(".m-user-logo").height($('.m-user-dialog').height());
    }
}
</script>

