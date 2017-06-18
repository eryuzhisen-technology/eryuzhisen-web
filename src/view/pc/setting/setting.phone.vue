<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) '../user/user.less';
@import (less) './setting.less';
    .app-body {
        padding-top: 60px;
    }
    .m-setting-content {
        & .content {

        }
        & .content-step {
            width: 100%;
            height: 20px;
            margin-bottom: 20px;
            & span, 
            & strong {
                display: block;
                float: left;
                .default_backgroud_6;
            }
            & span {
                height: 4px;
                margin-top: 8px;
            }
            & strong {
                width: 20px;
                height: 20px;
                .default_border-r-50;
            }
            & .content-step-1 {
                width: 95px;
                .default_border-r-l-4;
            }
            & .content-step-3 {
                width: 150px;
            }
            & .content-step-5 {
                width: 95px;
                .default_border-r-r-4;
            }
        }
        & .content-step.z-step-1 {
            & .content-step-1,
            & .content-step-2 {
                .default_backgroud_14;
            }
        }
        & .content-step.z-step-2 {
            & .content-step-1,
            & .content-step-2,
            & .content-step-3,
            & .content-step-4,
            & .content-step-5 {
                .default_backgroud_14;
            }
        }
        & .m-user-dialog__input-phone {
            width: 185px;
        }
        & .m-user-dialog__btn-phone {
            width: 185px;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <div class="m-setting">
	<div class="m-setting-wrap">
		<div class="m-setting-content">
			<MenuLeft :data="menuLeft" />
			<div class="setting-right">
				<div class="title">
					更换手机号码
				</div>
                <div class="content">
				<div class="content-wrap">
                    <div class="content-step" :class="{'z-step-1': step == 1, 'z-step-2': step == 2}">
                        <span class="content-step-1"></span>
                        <strong class="content-step-2"></strong>
                        <span class="content-step-3"></span>
                        <strong class="content-step-4"></strong>
                        <span class="content-step-5"></span>
                    </div>
					<div class="m-user-dialog__item">
                        <div v-if="!phone_reg" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{phone_reg_con}}</div>
                        </div>
                        <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !phone_reg}">
                            <input type="text" :placeholder="step == 1 ? '旧手机号' : '新手机号'" v-model="phone" spellcheck="false" />
                        </div>
                    </div>
                    <div class="m-user-dialog__item">
                        <div v-if="!pic_code_reg" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{pic_code_reg_con}}</div>
                        </div>
                        <div class="m-user-dialog__input cpm_form_input" :class="{'z-error': !pic_code_reg}">
                            <input type="text" placeholder="图形码" v-model="pic_code" spellcheck="false" />
                            <img v-if="isCodeCan" @click="getCode" :src="'data:image/png;base64,' + pic_vcode" />
                        </div>
                    </div>
                    <div class="m-user-dialog__item z-60">
                        <div v-if="!phone_vcode_reg" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{phone_vcode_reg_con}}</div>
                        </div>
                        <div class="m-user-dialog__input m-user-dialog__input-phone cpm_form_input cpm_left" :class="{'z-error': !phone_vcode_reg}">
                            <input type="text" placeholder="验证码" v-model="phone_vcode" spellcheck="false" />
                        </div>
                        <div class="m-user-dialog__btn m-user-dialog__btn-phone cpm_button_default cpm_right" @click="getPhoneVerifyCode">{{timeText}}</div>
                    </div>
                    <div class="cpm_clear"></div>
                    <div class="m-user-dialog__item">
                        <div class="m-user-dialog__btn cpm_button_default z-bolder" @click="nextStep">{{step == 1 ? '下一步' : '保存'}}</div>
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
export default {
    data () {
    	return {
    		menuLeft: {
    			userinfo: {
                    title: '基本资料',
                    url: 'setting.userinfo.html'
                },
    			password: {
                    title: '密码安全',
                    url: 'setting.password.html'
                },
    			phone: {
                    title: '手机号',
                    isActive: true
                },
    			backlist: {
                    title: '黑名单',
                    url: 'setting.backlist.html'
                }
    		},

            step: 1,
           
            phone: '',
            pic_code: '',
            phone_vcode: '',

            phone_reg: true,
            pic_code_reg: true,
            phone_vcode_reg: true,
            phone_reg_con: '',
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
                }).then( resp => {
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
        nextStep (){
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
                code: {
                    phone_vcode: this.phone_vcode //手机号验证码
                }
            }).then( filename => {
                if (this.step == 1) {
                    this.$store.dispatch('user_unboundPhone').then( (res) => {
                        this.step = 2;
                        this.phone = '';
                        this.pic_code = '';
                        this.phone_vcode = '';
                        this.phone_reg = true;
                        this.pic_code_reg = true;
                        this.phone_vcode_reg = true;
                        this.phone_reg_con = '';
                        this.pic_code_reg_con = '';
                        this.phone_vcode_reg_con = '';

                        this.menuLeft.phone.subtitle = '重新绑定手机号码';

                        this.$store.dispatch('user_setState', {
                            time: 0
                        })
                        this.getCode();

                        this.$store.dispatch('bubble_success', res);
                    }).catch( err => {
                        this.$store.dispatch('bubble_fail', err);
                    }); 
                } else {
                    this.$store.dispatch('user_reBindPhone').then( (res) => {
                        this.step = 1;
                        this.phone = '';
                        this.pic_code = '';
                        this.phone_vcode = '';
                        this.phone_reg = true;
                        this.pic_code_reg = true;
                        this.phone_vcode_reg = true;
                        this.phone_reg_con = '';
                        this.pic_code_reg_con = '';
                        this.phone_vcode_reg_con = '';

                        this.menuLeft.phone.subtitle = '解除手机号绑定';

                        this.$store.dispatch('user_setState', {
                            time: 0
                        })
                        this.getCode();

                        this.$store.dispatch('bubble_success', {
                            ret: 0,
                            type: 'top',
                            msg: '绑定成功'
                        });
                    }).catch( err => {
                        this.$store.dispatch('bubble_fail', err);
                    }); 
                }
                
            })
        },
    },
    mounted (){
        // 获取图形码
        this.getCode(true);
    }
}
</script>

