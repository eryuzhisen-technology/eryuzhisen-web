<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './message.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <div class="m-message">
	<div class="m-message-wrap">
		<div class="message-content">
			<MenuLeft class="message-left c-menu-left" :data="menuLeft" />
            <div v-if="message.dataInit" class="title">
                <span class="number">{{unread.message2}}</span> 条新评论
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
                    isActive: true
                },
                infomation: {
                    title: '通知',
                    url: 'message.infomation.html'
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
    }),
    mounted (){
        this.$watch('unread', val => {
            this.menuLeft.infomation.number = Number(this.unread.message0);
            this.menuLeft.comment.number = Number(this.unread.message2);
        })
    }
}
</script>

