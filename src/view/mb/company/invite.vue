<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
	.app-body {
		height: 100%;
		padding-top: 0;
	}
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
			&:active {
				background-image: url(../../../common/images/mb/invite-btn-2.png);	
			}
		}
	}

</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<div class="m-invite">
		<div class="bd">
			<div class="text">{{code.invite_code}}</div>
			<div class="btn"></div>
		</div>
	</div>
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

