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
                <input type="text" v-model="phone" placeholder="手机号" />
            </div>
            <div class="form-item-input">
                <input type="text" v-model="pic_code" placeholder="图形码" />
                <img class="pic" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
            </div>
            <div class="form-item-input">
                <input type="text" v-model="phone_vcode" placeholder="验证码" />
                <span class="code" @click="getPhoneVerifyCode">{{timeText}}</span>
            </div>
            <div class="form-item-input">
                <input type="password" v-model="password" placeholder="新密码" />
            </div>
            <div class="form-item-input">
                <input type="password" v-model="repassword" placeholder="确认新密码" />
            </div>
        </div>
        <div class="user-btn user-btn-default" @click="resetPwd">保存并登录</div>
        <a href="./login.html" class="user-btn user-btn-weak">想起来了 立即登录</a>
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
            phone: '',
            password: '',
            repassword: '',
            pic_code: '',
            phone_vcode: '',
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
            if ( vaid && $.trim(this.pic_code) == '') {
                vaid = false;
                msg = '输入图形码';
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
            var vaid = true;
            var msg = false;

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

            // 校验验证码
            if (vaid && $.trim(this.phone_vcode) == '') {
                vaid = false;
                msg = '请输入验证码';
            }

            // 校验密码
            if (vaid && $.trim(this.password) == '') {
                vaid = false;
                msg = '请输入密码';
            } else if (vaid && ($.trim(this.password).length > 15 || $.trim(this.password).length < 3)) {
                vaid = false;
                msg = '密码应为3-15位数';
            }

            // 校验确认密码
            if (vaid && $.trim(this.repassword) != $.trim(this.password)) {
                vaid = false;
                msg = '密码不一致';
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
    }
}
</script>

