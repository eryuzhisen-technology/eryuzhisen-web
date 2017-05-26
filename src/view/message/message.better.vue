<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './message.less';
.c-artice-better:last-child .c-artice-better-wrap {
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
			<div class="message-right">
				<div class="title">
					共 <span>{{message.count}}</span> 条新精选
				</div>
				<div class="content">
					<BetterDom  />
				</div>
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
    			better: {
    				title: '精选',
                    isActive: true,
    				number: 0
    			},
    			comment: {
    				title: '评论',
                    url: './message.comment.html',
    				number: 0
    			},
    			infomation: {
    				title: '其他消息',
                    url: './message.infomation.html',
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
            this.menuLeft.better.number = unread.message1;
            this.menuLeft.comment.number = unread.message2;
            return unread;
        },
        message: state => state.message.message
    })
}
</script>

