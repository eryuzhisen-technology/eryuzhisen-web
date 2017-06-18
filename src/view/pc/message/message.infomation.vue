<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) './message.less';
.c-comment-info:last-child .c-comment-info-wrap {
    .default_border-n;
}
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <div class="m-message">
	<div class="m-message-wrap">
		<div class="message-content">
			<MenuLeft class="message-left c-menu-left" :data="menuLeft" />
			<div class="title" v-if="message.dataInit">
			    <span class="number">{{unread.message0}}</span> 条新通知
			</div>
			<div class="content">
                <CommentInfo />
			</div>
		</div>
    </div>
	</div>
	<FooterDom />
	<SideMenu />
    <bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
    	return {
    		menuLeft: {
                comment: {
                    title: '评论',
                    url: 'message.comment.html'
                },
                infomation: {
                    title: '通知',
                    isActive: true
                }
    		}
    	}
    },
    computed: mapState({
        unread () {
            var unread = {};
            var list = this.$store.state.message.unread.list;
            for (var i = 0, len = list.length; i < len; i++) {
                unread['message'+ list[i].message_type] = list[i].unread_count;
            }
            return unread;
        },
        message: state => state.message.message
    })
}
</script>

