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
            <div v-if="pwd_err_times >= 5" class="form-item-input">
                <input type="text" v-model="pic_code" placeholder="图形码" />
                <img class="pic" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
            </div>
            <div class="form-item-input">
                <input type="text" v-model="phone" placeholder="手机号" />
            </div>
            <div class="form-item-input">
                <input type="password" v-model="password" placeholder="密码" />
            </div>
        </div>
        <div class="user-text z-weak">
            <a href="./back.html">忘记密码</a>
        </div>
        <div class="user-btn user-btn-default" @click="login">登录</div>
        <a href="./register.html" class="user-btn user-btn-weak">没有账号 立即注册</a>
    </div>	
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
    	return {
            phone: '',
            password: '',
            pic_code: '',
    	}
    },
    computed: mapState({
        isLogin: state => state.user.info.isLogin,
        pwd_err_times: state => state.user.pwd_err_times,
        isCodeCan: state => state.user.isCodeCan,
        pic_vcode: state => state.user.code.pic_vcode,
    }),
    methods: {
    	getCode (init){
            this.$store.dispatch('user_getPicVerifyCode', {
                init: true
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
    	},
    	login (){
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

            // 校验密码
            if (vaid && $.trim(this.password) == '') {
                vaid = false;
                msg = '请输入密码';
                return false;
            } else if ( vaid && $.trim(this.password).length > 18 || $.trim(this.password).length < 6) {
                vaid = false;
                msg = '密码应为6-18位数';
            }

            // 验证码
    		if ( vaid && $.trim(this.pic_code) == '' && this.pwd_err_times >= 5) {
                vaid = false;
                msg = '验证码有误';
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
                code: {
                    pic_code: this.pic_code //密码错误5超过5次,需要校验图形验证码
                }
            }).then( res => {
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
            })
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
    mounted (){
        var that = this;
        this.from = this.$url.getUrlParam('from');
    }
}
</script>

