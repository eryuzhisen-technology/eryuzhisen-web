<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './invite.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
	<div class="m-invite">
		<div class="invite-bg">
			<div class="bg-top"></div>
			<div class="bg-bottom"></div>
		</div>
		<div class="invite-content">
			<div class="content-top">
				<img class="top-bg" src="../../common/images/invite/backgroup-1.png"/>
				<div class="top-txt">
					<div class="txt-title">
						<div class="title-mark"></div>
						<div class="title-text">你的专属邀请码</div>
					</div>
					<div class="txt-content">
						<div class="content-code-bg"></div>
						<div class="content-code">{{code.invite_code}}</div>
						<div class="content-times-bg"></div>
						<div class="content-times"><span class="times-num">{{code.remaining_times}}</span><span class="times-txt">次</span></div>
					</div>
				</div>
			</div>
			<div class="content-bottom">
				<img class="bottom-bg" src="../../common/images/invite/backgroup-2.png"/>
				<div class="bottom-txt">
					<p class="text">恕我直言</p>
					<p class="text">这里绝非是个平庸于世鱼龙混杂之地</p>
					<p class="text">显而易见</p>
					<p class="text">你就是我们认真选择的结果</p>
					<div class="spacing"></div>
					<p class="text">因此</p>
					<p class="text">请你也谨慎邀请身边荒诞不经的朋友</p>
					<p class="text">耳语品质和未来的命运</p>
					<p class="text">将由你来制定</p>
					<div class="bottom-text">「每个邀请码仅限3次有效」</div>
				</div>
			</div>
		</div>
	</div>
	<FooterDom />
	<SideMenu />
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
    	return {
    		
    	}
    },
    computed: mapState({
        code: state => state.auth.code
    }),
    methods: {
        getInviteCode (){
            this.$store.dispatch('auth_getInviteCode', {}).then( res =>{
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    mounted (){
        this.getInviteCode();
    }
}
</script>

