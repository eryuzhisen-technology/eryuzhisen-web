<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './user.less';
</style>

<!-- html代码 -->
<template>
<div class="m-user">
<div class="m-user-wrap">
    <div class="m-user-logo"></div>
    <div class="m-user-dialog">
    	<div class="m-user-dialog__tit">找回密码</div>
    	<div class="m-user-dialog__con">
            <!-- 手机号 -->
    		<div class="m-user-dialog__item">
                <div v-if="!phone_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{phone_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !phone_reg}">
    				<input name="phone" type="text" placeholder="手机号" @keyup.enter="resetPwd" v-model="phone" autocomplete="new-password" spellcheck="false" />
    			</div>
    		</div>

            <!-- 图形码 -->
    		<div class="m-user-dialog__item">
                <div v-if="!pic_code_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{pic_code_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
    				<input name="pic_code" type="text" placeholder="图形码" @keyup.enter="resetPwd" v-model="pic_code" autocomplete="new-password" spellcheck="false" />
    				<img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
    			</div>
    		</div>

            <!-- 验证码 -->
    		<div class="m-user-dialog__item z-60">
                <div v-if="!phone_vcode_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{phone_vcode_reg_con}}</div>
                </div>
    			<div class="m-user-dialog__input m-user-dialog__input-phone cpm_form_input cpm_left" :class="{'z-error': !phone_vcode_reg}">
    				<input name="phone_vcode" type="text" placeholder="验证码" @keyup.enter="resetPwd" v-model="phone_vcode" autocomplete="new-password" spellcheck="false" />
    			</div>
    			<div class="m-user-dialog__btn m-user-dialog__btn-phone cpm_button_default cpm_right" @click="getPhoneVerifyCode">{{timeText}}</div>
    		</div>
            <div class="cpm_clear"></div>

            <!-- 新密码 -->
            <div class="m-user-dialog__item">
                <div v-if="!password_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{password_reg_con}}</div>
                </div>
                <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !password_reg}">
                    <input name="password" type="password" placeholder="新密码" @keyup.enter="resetPwd" v-model="password" autocomplete="new-password" spellcheck="false" />
                </div>
            </div>

            <!-- 确认新密码 -->
            <div class="m-user-dialog__item">
                <div v-if="!repassword_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{repassword_reg_con}}</div>
                </div>
                <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !repassword_reg}">
                    <input name="repassword" type="password" placeholder="确认新密码" @keyup.enter="resetPwd" v-model="repassword" autocomplete="new-password" spellcheck="false" />
                </div>
            </div>
            
            <!-- 保存并登陆 -->
    		<div class="m-user-dialog__item">
    			<div class="m-user-dialog__btn cpm_button_default" @click="resetPwd">保存并登录</div>
    		</div>

            <!-- 登陆 -->
            <div class="m-user-dialog__item m-user-dialog__text">
    		  <a class="m-user-dialog__register" :href="url.login">想起来了 立即登录</a>
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
    name: 'back',
    data () {
    	return {
    		url: {
        		login: './login.html'
        	},
            phone: '',
            password: '',
            repassword: '',
            pic_code: '',
            phone_vcode: '',

            phone_reg: true,
            password_reg: true,
            repassword_reg: true,
            pic_code_reg: true,
            phone_vcode_reg: true,
            phone_reg_con: '',
            password_reg_con: '',
            repassword_reg_con: '',
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
                this.pic_code_reg_con = '输入图形码';
                return false;
            } else {
                this.pic_code_reg = true;
                this.pic_code_reg_con = '';
            }
            
            this.$store.dispatch('user_setState', {
                phone: this.phone, //手机号
                code: {
                    pic_code: this.pic_code //图形验证码
                }
            }).then( () => {
                this.$store.dispatch('user_getPhoneVerifyCode', {
                    verifyType: "1", //注册验证
                }).then( res => {
                    this.$store.dispatch('bubble_success', {
                        ret: 0,
                        type: 'top',
                        msg: '验证码已发送'
                    });
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                });
            })
    	},
    	resetPwd (){
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

            // 校验验证码
            if ($.trim(this.phone_vcode) == '') {
                this.phone_vcode_reg = false;
                this.phone_vcode_reg_con = '请输入验证码';
                return false;
            } else {
                this.phone_vcode_reg = true;
                this.phone_vcode_reg_con = '';
            }

            // 校验密码
            if ($.trim(this.password) == '') {
                this.password_reg = false;
                this.password_reg_con = '请输入密码';
                return false;
            } else if ($.trim(this.password).length > 15 || $.trim(this.password).length < 3) {
                this.password_reg = false;
                this.password_reg_con = '密码应为3-15位数';
                return false;
            } else {
                this.password_reg = true;
                this.password_reg_con = '';
            }

            // 校验确认密码
            if ($.trim(this.repassword) != $.trim(this.password)) {
                this.repassword_reg = false;
                this.repassword_reg_con = '密码不一致';
                return false;
            } else {
                this.repassword_reg = true;
                this.repassword_reg_con = '';
            }

            this.$store.dispatch('user_setState', {
                phone: this.phone, //手机号
                password: this.password, // 密码
                repassword: this.repassword, // 确认密码
                code: {
                    phone_vcode: this.phone_vcode, //手机号验证码
                }
            }).then( () => {
                this.$store.dispatch('user_backPwd', {
                    device_no: (new Date()).getTime(),//设备号,没有则新生成一个,统计用
                }).then( res => {
                    // 自动登录
                    this.$store.dispatch('user_sigin', {
                        "device_no": (new Date()).getTime(),//设备号,没有则新生成一个,统计用
                        _header: {
                            "Client_type": 3, // 设备号
                        },
                        isSave: true // 是否记住密码
                    }).then( res => {
                        this.goNext();
                        this.$store.dispatch('bubble_success', res);
                    }).catch( err => {
                        this.$store.dispatch('bubble_fail', err);
                    });
                    // window.location.href = this.url.login;
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                });
            })
    	},
        goNext (){
            if (this.from) {
                window.location.href = decodeURIComponent(this.from);
            } else {
                window.location.href = './index.html';
            }
        }
    },
    mounted(){
        var that = this;
        this.from = this.$url.getUrlParam('from') || '';
    	this.$store.dispatch('user_getPicVerifyCode', {
            init: true
        }).catch( err => {
            this.$store.dispatch('bubble_fail', err);
        });

        $(".cpm_form_input input").on('focus', function(){
            var _this = $(this);
            var name = _this.attr('name');
            that[name + '_reg'] = true;
        })
        $(".m-user-logo").height($('.m-user-dialog').height());
    }
}
</script>

