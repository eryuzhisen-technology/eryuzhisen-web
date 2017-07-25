<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
	.app-main {
		height: 100%;
		padding-top: 1rem;
	}
	.m-invite {
		position: relative;
		width: 7.5rem;
		height: 11.06rem;
		overflow: hidden;
		background-image: url(../../../common/images/mb/share.invite-bg.png);
		background-position: top center;
		background-size: 7.5rem 11.06rem;

		& .avatar {
			position: absolute;
			top: .45rem;
			left: .3rem;
			overflow: hidden;
			& .avatar-img {
				float: left;
				width: .9rem;
				height: .9rem;
				margin-right: .15rem;
				border: .05rem solid @default_color_3;
				.default_border-r-50;
				.default_backgroud_3;
			}
			& .avatar-name {
				float: left;
				padding-top: .05rem;
				color: #fff;
				.default_font_size_4;
				.default_font_bolder;
			}
		}
		& .text {
			position: absolute;
			bottom: 3.65rem;
			left: 0;
			width: 100%;
			.default_flex__v_middle;
			& .text-number {
				width: 3.08rem;
				height: .72rem;
				line-height: .72rem;
				margin-bottom: .1rem;
				border-radius: .36rem;
				font-size: .5rem;
				background-color: #000;
				color: #fff;
				.default_font_bolder;
				.default_center;
			}
			& .text-btn {
				width: 1.82rem;
				height: .44rem;
				line-height: .44rem;
				border-radius: .22rem;
				border: 1px solid #000;
				.default_font_size_1;
				.default_font_bolder;
				.default_center;
			}
		}
		& .btn {
			position: absolute;
			bottom: .8rem;
			left: 50%;
			width: 4.9rem;
			height: 1.4rem;
			margin-left: -2.45rem;
			background-image: url(../../../common/images/mb/share.invite-btn-1.png);
			background-size: 4.9rem 1.4rem;
			background-position: top center;
			&.z-active {
				background-image: url(../../../common/images/mb/share.invite-btn-2.png);	
			}
		}
	}

</style>

<!-- html代码 -->
<template>
<FrameDom
    :data="frameData"
>
	<div class="m-invite">
		<div class="bd">
			<div class="avatar">
				<img class="avatar-img" :src="user.avatar_url" />
				<span class="avatar-name">{{user.nick_name}}</span>
			</div>
			<div class="text">
				<div class="text-number">{{invite_code}}</div>
				<div class="text-btn" @click="copy">点击复制邀请码</div>
			</div>
			<a :href="downUrl" class="btn" @touchstart="start" @touchend="end"></a>
		</div>
	</div>
</FrameDom>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
    	return {
    		frameData: {},
    		
    		invite_code: '',
			user_id: '',
			user: {},
			downUrl: this.$defaultData.mbData.downUrl
    	}
    },
    methods: {
    	start (e){
    		var node = $(e.currentTarget).addClass('z-active');
    	},
    	end (e){
    		var node = $(e.currentTarget).removeClass('z-active');
    	},
        copy (){
            var $textarea = $('<textarea style="position:absolute;top:-9999em;left:-9999em;" readonly>' + this.invite_code + '</textarea>');
            $textarea.appendTo('body');
            $textarea[0].select();
            $textarea[0].setSelectionRange(0, $textarea[0].value.length);
            document.execCommand('copy');
            $textarea.remove();

            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'top',
                top: {
                    msg: '复制成功，去下载注册吧'
                }
            })
        },
        getAuthorInfo (){
            if (!this.user_id) {
                return false;
            }
            this.$store.dispatch('user_getUserInfo', {
                userId: this.user_id
            }).then( info => {
                this.user = info;

                this.$store.dispatch('bubble_success', info);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            }); 
        },
    },
    mounted (){
        // 获取url的参数
        this.user_id = this.$url.getUrlParam('user_id');
        this.invite_code = this.$url.getUrlParam('invite_code');

        // 获取用户信息
        this.getAuthorInfo();
    }

}
</script>

