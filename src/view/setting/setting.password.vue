<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) '../user/user.less';
    @module: m-setting-password;

    .@{module} {
    	padding-top: 20px;
    	padding-bottom: 80px;
        .default_backgroud_5;
        & &-wrap {
            .default_width_960;
            .default_mar_auto;
        }
    }
    .@{module}-content {
    	position: relative;
    	overflow: hidden;
        .default_mar_auto;
    	& .setting-right {
    		width: 720px;
    		margin-left: 240px;
    		& .title {
    			width: 100%;
    			height: 60px;
    			padding-left: 20px;
    			padding-top: 22px;
    			.default_font_size_3;
    			.default_color_4;
    			.default_backgroud_2;
    		}
            & .content {
                padding: 40px 0 60px;
                .default_backgroud_3;
                & .content-wrap {
                    width: 330px;
                    .default_mar_auto;
                }
            }
    	}
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
    <div class="m-setting-password">
	<div class="m-setting-password-wrap">
		<div class="m-setting-password-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="setting-right">
				<div class="title">
					{{menuLeft[menuLeftType].subtitle}}
				</div>
                <div class="content">
				<div class="content-wrap">
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
                        <div class="m-user-dialog__btn m-user-dialog__btn-phone cpm_button_warn cpm_right" @click="getPhoneVerifyCode">{{timeText}}</div>
                    </div>
                    <div class="cpm_clear"></div>
                    <div class="m-user-dialog__item">
                        <div v-if="!password_reg" class="m-user-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{password_reg_con}}</div>
                        </div>
                        <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !password_reg}">
                            <input type="password" placeholder="新密码" v-model="password" />
                        </div>
                    </div>
                    <div class="m-user-dialog__item">
                        <div v-if="!repassword_reg" class="m-user-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{repassword_reg_con}}</div>
                        </div>
                        <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !repassword_reg}">
                            <input type="password" placeholder="确认新密码" v-model="repassword" />
                        </div>
                    </div>
                    <div class="m-user-dialog__item">
                        <div class="m-user-dialog__btn cpm_button_default z-bolder" @click="resetPwd">保存并登录</div>
                    </div>
                </div>
				</div>
			</div>
		</div>
    </div>
	</div>
	<FooterDom />
	<SideMenu />
    <Bubble />
</div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble'
import {distUrl} from '../../server/config'
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        Bubble: bubble,
    },
    data () {
    	return {
            header: {
                page: ''
            },
    		menuLeftType: 'password',
    		menuLeft: {
    			userinfo: {
                    title: '基本资料',
                    subtitle: '基本资料',
                    url: 'setting.userinfo.html'
                },
    			password: {
                    title: '密码安全',
                    subtitle: '找回密码',
                    url: 'setting.password.html'
                },
    			phone: {
                    title: '手机号',
                    subtitle: '手机号',
                    url: 'setting.phone.html'
                },
    			backlist: {
                    title: '黑名单',
                    subtitle: '黑名单',
                    url: 'setting.backlist.html'
                }
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
                    pic_code: this.pic_code //图形验证码
                }
            }).then( () => {
                this.$store.dispatch('user_getPhoneVerifyCode', {
                    verifyType: "1", //注册验证
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
            })
        },
        resetPwd (){
            // 校验手机
            if (!/^1(3|4|5|7|8)\d{9}$/i.test(this.phone)) {
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

            // 校验确认密码
            if ($.trim(this.repassword) != $.trim(this.password)) {
                this.repassword_reg = false;
                this.repassword_reg_con = '输入密码不一致';
                return false;
            } else {
                this.repassword_reg = true;
                this.repassword_reg_con = '';
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
                repassword: this.repassword, // 确认密码
                code: {
                    phone_vcode: this.phone_vcode, //手机号验证码
                }
            }).then( () => {
                this.$store.dispatch('user_backPwd', {
                    
                }).then(res => {
                    // 退出登录
                    this.$store.dispatch('user_ourlogin', {
                        //todo
                    });
                    // 跳转到登录页面
                    window.location.href = distUrl + 'login.html';
                }).catch(res => {
                    console.log(res)
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
        },
    },
    mounted (){
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
    }
}
</script>

