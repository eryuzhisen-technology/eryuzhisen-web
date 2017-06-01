<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './message.less';
.c-comment-info:last-child .c-comment-info-wrap {
    .default_border-n;
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
    <div class="m-message">
	<div class="m-message-wrap">
		<div class="message-content">
			<MenuLeft class="message-left c-menu-left" :data="menuLeft" />
			<div class="title">
                <p v-if="message.count != 0">
				    <span class="number">{{message.count}}</span> 条新通知
                </p>
			</div>
			<div class="content">
                <CommentList />
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
                    url: 'message.comment.html',
                    number: 0
                },
                infomation: {
                    title: '通知',
                    isActive: true,
                    number: 0
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
            this.menuLeft.infomation.number = unread.message0;
            this.menuLeft.comment.number = unread.message2;
            return unread;
        },
        message: state => state.message.message
    })
}
</script>

