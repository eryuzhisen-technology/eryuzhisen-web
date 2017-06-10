<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './setting.less';
    .m-setting-content  {
        & .content {
            
        }
        & .content-item {
            position: relative;
            height: 50px;
            margin-bottom: 20px;
            .default_backgroud_6;
            .default_border-r-4;
            .label {
                position: absolute;
                top: 50%;
                left: -40px;
                width: 40px;
                transform: translate(-100%, -50%);
                .default_font_size_7;
                .default_color_2;
            }
        }
        & .content-nick {
            & input {
                width: 100%;
                height: 50px;
                line-height: 50px;
                padding: 0 20px;
                .default_color_2;
                .default_font_size_2;
                .default_border-13;
                .default_border-r-4;
                &:focus {
                    // .default_border-12;
                    .default_border-dcdcdc;
                }
            }
            & span {
                position: absolute;
                right: 30px;
                top: 19px;
                .default_font_size_1;
                .default_color_4;
            }
        }
        & .content-sex {
            .default_backgroud_n;
            & .content-sex-item {
                float: left;
                width: 120px;
                height: 40px;
                line-height: 40px;
                margin-right: 10px;
                .default_border-13;
                .default_font_size_2;
                .default_color_4;
                .default_backgroud_6;
                .default_center;
                .default_pointer;
                .default_border-r-4;
                &[data-type="2"] {
                    margin-right: 0;
                }
            }
            & .content-sex-item:hover {
                .default_color_10;
            }
            & .content-sex-item.z-active {
                .default_color_10;
                .default_backgroud_14;
                .default_border-n;
            }
        }
        & .content-word {
            height: 150px;
            & textarea {
                width: 100%;
                height: 150px;
                padding: 20px;
                .default_color_10;
                .default_font_size_2;
                .default_border-13;
                .default_border-r-4;
                &:focus {
                    // .default_border-12;
                    .default_border-dcdcdc;
                }
            }
            & span {
                position: absolute;
                bottom: 20px;
                right: 20px;
                .default_font_size_1;
                .default_color_4;
            }
        }
        & .content-save {
            width: 380px;
            height: 50px;
            line-height: 50px;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <div class="m-setting m-setting-userinfo">
	<div class="m-setting-wrap">
		<div class="m-setting-content">
			<MenuLeft :data="menuLeft" />
			<div class="setting-content">
				<div class="title">
					基本资料
				</div>
                <div class="content">
				<div class="content-wrap">
                    <div class='content-item content-nick '>
                        <div class="label">昵称</div>
                        <input type="text" placeholder="姓名" :value="user.nick_name" @input="uploadname" spellcheck="false" />
                    </div>
                    <div class='content-item content-sex'>
                        <div class="label">性别</div>
                        <div class="content-sex-item" data-type="0" :class="{'z-active': user.gender == 0}" @click="uploadSex">保密</div>
                        <div class="content-sex-item" data-type="1" :class="{'z-active': user.gender == 1}" @click="uploadSex">男生</div>
                        <div class="content-sex-item" data-type="2" :class="{'z-active': user.gender == 2}" @click="uploadSex">女生</div>
                        <div class="cpm_clear"></div>
                    </div>
                    <div class='content-item content-word'>
                        <div class="label">简介</div>
                        <textarea placeholder="黑暗低语中点盏幽幽青灯..." :value="user.signature" @input="uploadtext" spellcheck="false"></textarea>
                    </div>
                    <div class="content-save cpm_button_default" @click="saveInfo">保存</div>
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
                    isActive: true
                },
    			password: {
                    title: '密码安全',
                    url: 'setting.password.html'
                },
    			phone: {
                    title: '手机号',
                    url: 'setting.phone.html'
                },
    			backlist: {
                    title: '黑名单',
                    url: 'setting.backlist.html'
                }
    		},
    	}
    },
    computed: mapState({
        user: state => state.user.info,
        code: state => state.auth.code
    }),
    methods: {
        uploadname (e){
            this.$store.dispatch('user_setUserInfo', {
                nick_name: e.currentTarget.value
            })
        },
        uploadSex (e){          
            this.$store.dispatch('user_setUserInfo', {
                gender: e.currentTarget.dataset['type']
            })
        },
        uploadtext (e){
            this.$store.dispatch('user_setUserInfo', {
                signature: e.currentTarget.value
            })
        },
        saveInfo (){
            this.$store.dispatch('user_setUserInfo', {
                gender: this.user.gender,
                signature: this.user.signature,
                nick_name: this.user.nick_name
            }).then( filename => {
                this.$store.dispatch('user_updateUserInfo').then( res => {
                    this.$store.dispatch('bubble_success', {
                        ret: 0,
                        type: 'top',
                        msg: '保存成功！'
                    });

                    // 更细缓存
                    var cache_userInfo = this.$version.userInfo;
                    var info = this.$cache.getStore(cache_userInfo.key, cache_userInfo.version);
                        info = this.user;
                    this.$cache.setStore(cache_userInfo.key, info, cache_userInfo.version, cache_userInfo.time);
                }).catch( err => {
                    this.$store.dispatch('bubble_fail', err);
                }); 
            })
        },
        getInviteCode (){
            this.$store.dispatch('auth_getInviteCode', {}).then( res =>{
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    mounted (){
        // this.$watch('user.nick_name', value => {
        //     this.$store.dispatch('user_setUserInfo', {
        //         nick_name: String(value).substr(0, 15)
        //     })
        // })
        // this.$watch('user.signature', value => {
        //     this.$store.dispatch('user_setUserInfo', {
        //         signature: String(value).substr(0, 1000)
        //     })
        // })

        this.getInviteCode();
    }
}
</script>

