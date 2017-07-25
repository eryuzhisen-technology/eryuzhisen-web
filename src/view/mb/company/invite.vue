<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
	.m-invite {
		position: relative;
		width: 7.5rem;
		height: 13.34rem;
		background-image: url(../../../common/images/mb/invite-bg.png);
		background-position: top center;
		background-size: 7.5rem 13.34rem;
		& .text {
			position: absolute;
			bottom: 3.42rem;
			left: 0;
			width: 100%;
			line-height: 1.25em;
			.default_color_000;
			.default_center;
			.default_font_size_9;
		}
		& .btn {
			position: absolute;
			bottom: .8rem;
			left: 50%;
			width: 4.9rem;
			height: 1.4rem;
			margin-left: -2.45rem;
			background-image: url(../../../common/images/mb/invite-btn-1.png);
			background-size: 4.9rem 1.4rem;
			background-position: top center;
			&.z-active {
				background-image: url(../../../common/images/mb/invite-btn-2.png);	
			}
		}
	}
	p {
		    word-wrap: break-word;
    		word-break: break-all;
    		font-size: 24px;
    		color: #fff;
	}

</style>

<!-- html代码 -->
<template>
<FrameDom
    :data="frameData"
>
	<div class="m-invite">
		<div class="bd">
			<div class="text">{{code.invite_code}}</div>
			<div class="btn" @touchstart="start" @touchend="end" @click="share"></div>
		</div>
	</div>
</FrameDom>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
    	return {
			frameData: {
				isHide: true
			}
    	}
    },
    computed: mapState({
    	user: state => state.user.info,
        code: state => state.auth.code
    }),
    methods: {
    	start (e){
    		var node = $(e.currentTarget).addClass('z-active');
    	},
    	end (e){
    		var node = $(e.currentTarget).removeClass('z-active');
    	},
        getInviteCode (){
            this.$store.dispatch('auth_getInviteCode', {}).then( res =>{
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        share (){
        	var shareData = {
				"title": (this.user.nick_name || '某某某') + "正邀请你踏上一段奇妙旅程~", //标题
				"desc": "嘘~！这是只属于你的奇妙故事集！", //描述
				"img": this.$defaultData.mbData.domain + this.$defaultData.mbData.shareImg, //图片
				"link": location.protocol + '//' + location.host + '/share.invite.html?user_id=' + this.user.uid + '&invite_code=' + this.code.invite_code
        	}       	
        	this.$appJSBrige.executeFn('actionShare', shareData);
        }
    },
    mounted (){
        this.getInviteCode();
    }

}
</script>

