<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
@import (less) './user.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-user">
        <div class="user-form">
            <div class="form-item-input">
                <input type="text" v-model="yao" placeholder="邀请码" />
                <i class="icon" @click="tip"></i>
            </div>
            <div class="form-item-input">
                <input type="text" v-model="phone" placeholder="手机号" />
            </div>
            <div class="form-item-input">
                <input type="text" v-model="pic_code" placeholder="图形码" />
                <img @click="getCode" class="pic" :src="'data:image/png;base64,' + pic_vcode" />
            </div>
            <div class="form-item-input">
                <input type="text" v-model="phone_vcode" placeholder="验证码" />
                <span class="code" @click="getPhoneVerifyCode">获取验证码</span>
            </div>
            <div class="form-item-input">
                <input type="password" v-model="password" placeholder="密码" />
            </div>
        </div>
        <div class="user-text z-center">
            点击注册按钮即表示同意并愿遵守耳语之森的
            <br />
            <a href="./agreement.html">用户协议</a> 和 <a href="./privacy.html">隐私政策</a>
        </div>
        <div class="user-btn user-btn-default" @click="register">注册</div>
        <a href="./login.html" class="user-btn user-btn-weak">已有账号 立即登录</a>
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
            pic_code: '',
            phone_vcode: ''
        }
    },
    computed: mapState({
        isCodeCan: state => state.user.isCodeCan,
        pic_vid: state => state.user.code.pic_vid,
        pic_vcode: state => state.user.code.pic_vcode,
        timeText: state => state.user.time ? '重新发送 ' + state.user.time : '发送验证码'
    }),
    methods: {
        tip (){
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    html: '<h3>邀请码</h3><p>因社区内测而采用定向邀请制</p><p>请加QQ群432769756</p><p>向管理员索取</p>',
                    btnCancel: '拉倒',
                    btnComfire: '索取'

                }
            })
        },
		getCode (init){
            this.$store.dispatch('user_getPicVerifyCode', {
                init: init
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
    	getPhoneVerifyCode(){
            var vaid = true;
            var msg = '';

            // 校验手机
            if ($.trim(this.phone) == '') {
                vaid = false;
                msg = '请输入手机号';
            } else if (!/^1\d{10}$/i.test(this.phone)) {
                vaid = false;
                msg = '手机号格式不正确';
            }

            // 校验验证码
            if (vaid && $.trim(this.pic_code) == '') {
                vaid = false;
                msg = '请输入图形码';
            }

            if (!vaid) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        msg: msg
                    }
                })
                return;
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
            var vaid = true;
            var msg = '';

            // 邀请码
            if ($.trim(this.yao) == '') {
                vaid = false;
                msg = '请输入邀请码';
            }
            
            // 校验手机
            if (vaid && $.trim(this.phone) == '') {
                vaid = false;
                msg = '请输入手机号';
            } else if (vaid && !/^1\d{10}$/i.test(this.phone)) {
                vaid = false;
                msg = '手机号格式不正确';
            }

            // 校验图形码
            if (vaid && $.trim(this.pic_code) == '') {
                vaid = false;
                msg = '请输入图形码';
            }

            // 校验验证码
            if (vaid && $.trim(this.phone_vcode) == '') {
                vaid = false;
                msg = '请输入验证码';
            }

            // 校验密码
            if (vaid && $.trim(this.password) == '') {
                vaid = false;
                msg = '请输入密码';
            } else if (vaid && ($.trim(this.password).length > 18 || $.trim(this.password).length < 6)) {
                vaid = false;
                msg = '密码应为6-18位数';
                return false;
            }

            if (!vaid) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        msg: msg
                    }
                })
                return;
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
                    this.goNext();
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                }); 
            }); 
    	},
        goNext (){
            if (this.from) {
                window.location.replace(decodeURIComponent(this.from));
            } else {
                window.location.replace('./index.html');
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
    mounted(){
        var that = this;

    	this.getCode(true);
    }
}
</script>

