<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-setting-userinfo;

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
            & .content-avatar {
                position: relative;
                width: 180px;
                height: 180px;
                margin-bottom: 30px;
                & .avatar-txt {
                    vertical-align: middle;
                    display: inline-block;
                    width: 0;
                    height: 100%;
                }
                & .avatar-img {
                    display: inline-block;
                    vertical-align: middle;
                    width: 95%;
                }
                & .avatar-selectfiles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    .default_pointer;
                }
            }
            & .content-nick {
                position: relative;
                padding: 22px 30px;
                margin-bottom: 20px;
                & span {
                    position: absolute;
                    right: 30px;
                    top: 24px;
                    .default_font_size_1;
                    .default_color_4;
                }
            }
            & .content-word {
                position: relative;
                padding: 20px 30px;
                height: 180px;
                margin-bottom: 20px;
                & span {
                    position: absolute;
                    bottom: 20px;
                    right: 30px;
                    .default_font_size_1;
                    .default_color_4;
                }
            }
            & .content-save {
                width: 100%;
                height: 60px;
                line-height: 60px;
            }
    	}
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
    <div class="m-setting-userinfo">
	<div class="m-setting-userinfo-wrap">
		<div class="m-setting-userinfo-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="setting-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
                <div class="content">
				<div class="content-wrap">
					<div class="content-avatar">
                        <span class="avatar-txt"></span>
                        <img v-if="this.user.avatar_url" class="avatar-img" :src="this.user.avatar_url" />
                        <div id="upload_image_select" class="avatar-selectfiles"></div>
                        <UploadImg 
                            :type="1" 
                            @uploadImg_uploaded="uploaded" 
                            @uploadImg_error="error"
                        />
                    </div>
                    <div class='content-nick cpm_form_input'>
                        <input type="text" placeholder="姓名" :value="this.user.nick_name" @input="uploadname" />
                        <span>{{this.user.nick_name.length}}/10</span>
                    </div>
                    <div class='content-word cpm_form_textarea'>
                        <textarea placeholder="描述你自己..." :value="this.user.signature" @input="uploadtext"></textarea>
                        <span>{{this.user.signature.length}}/100</span>
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
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble'
import uploadImg from '../../component/uploadImg'
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        Bubble: bubble,
        UploadImg: uploadImg
    },
    data () {
    	return {
            header: {
                page: ''
            },
    		menuLeftType: 'userinfo',
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
        user: state => state.user.info
    }),
    methods: {
        uploadname (e){
            this.$store.dispatch('user_setState', {
                info: {
                    nick_name: e.currentTarget.value
                }
            })
        },
        uploadtext (e){
            this.$store.dispatch('user_setState', {
                info: {
                    signature: e.currentTarget.value
                }
            })
        },
        uploaded (img){
            this.$store.dispatch('user_setState', {
                info: {
                    avatar_url: img
                }
            })
        },
        saveInfo (){
            this.$store.dispatch('user_setState', {
                info: {
                    avatar_url: this.user.avatar_url,
                    signature: this.user.signature,
                    nick_name: this.user.nick_name
                }
            }).then( filename => {
                this.$store.dispatch('user_updateUserInfo', {
                    
                }).then(() => {
                    this.$store.dispatch('bubble_showBubble', {
                        show: true,
                        type: 'top',
                        top: {
                            status: 'z-default',
                            msg: '保存成功！'
                        }
                    })
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
        error (err){
            if (err.code == -600) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小'
                    }
                })
            } else if (err.code == -601) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型'
                    }
                })
            } else if (err.code == -602) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '这个文件已经上传过一遍了'
                    }
                })
            } else {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: err.response
                    }
                })
            }
        },
    },
    mounted (){
        this.$watch('user.nick_name', value => {
            this.$store.dispatch('user_setState', {
                info: {
                    nick_name: value.substr(0, 10)
                }
            })
        })
        this.$watch('user.signature', value => {
            this.$store.dispatch('user_setState', {
                info: {
                    signature: value.substr(0, 100)
                }
            })
        })
    }
}
</script>

