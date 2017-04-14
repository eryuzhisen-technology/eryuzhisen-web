<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-comment;

.@{module} {
	padding-top: 20px;
    padding-bottom: 80px;
    .default_backgroud_5;
    & &-wrap {
        width: 100%;
        height: 100%;
        .default_width_960;
        .default_mar_auto; 
    }
}
.@{module}-content {
	position: relative;
	min-height: 400px;
	.default_width_960;
	.default_mar_auto;
	overflow: hidden;
	& .comment-left {}
	& .comment-right {
		width: 720px;
		margin-left: 240px;
		& .comment-right-title {
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 40px;
            .default_font_size_3;
            .default_color_4;
            .default_backgroud_3;
            & span {
                .default_color_7;
            }
        }
        & .comment-right-content {
            min-height: 200px;
            margin-bottom: 30px;
            .default_backgroud_4;
            & .c-comment-info:last-child .c-comment-info-wrap {
                .default_border-n;
            }
        }
	}
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
    <div class="m-comment">
	<div class="m-comment-wrap">
		<div class="m-comment-content">
			<MenuLeft class="comment-left" :data="menuLeft" :type="menuLeftType" />
			<div class="comment-right">
				<div class="comment-right-title">
					共 <span>{{infomations.length}}</span> 条新其他消息
				</div>
				<div class="comment-right-content">
                    <CommentList v-for="(item, index) in infomations" :data="item" :key="index" />
					<Empty class="content-empty" v-if="infomations.length <= 0" />
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
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import CommentList from '../../component/comment.info.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        CommentList: CommentList,
        Empty: Empty,
        Page: Page,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        bubble: bubble
    },
    data () {
    	return {
            header: '',
    		menuLeftType: 'infomation',
    		menuLeft: {
    			better: {
                    title: '精选',
                    url: 'message.better.html',
                    number: 20
                },
                comment: {
                    title: '评论',
                    url: 'message.comment.html',
                    number: 20
                },
                infomation: {
                    title: '其他消息',
                    url: 'message.infomation.html',
                    number: 0
                }
    		},
            infomations: [
                {
                    name: '耳语编辑',
                    time: '2小时前',
                    type: 'push',
                    article: '无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻无头雕刻'
                },
                {
                    name: '耳语编辑',
                    time: '2小时前',
                    type: 'mark',
                    article: '无头雕刻'
                },
                {
                    name: '耳语编辑',
                    time: '2小时前',
                    type: 'collect',
                    article: '无头雕刻'
                },
                {
                    name: '耳语编辑',
                    time: '2小时前',
                    type: 'fabulous',
                    article: '无头雕刻'
                }
            ]
    	}
    },
    methods: {
    	
    },
    
}
</script>

