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
					共 <span>{{comments.length}}</span> 条新评论
				</div>
				<div class="comment-right-content">
					<CommentList v-for="(item, index) in comments" :data="item" :key="index" />
                    <Empty class="content-empty" v-if="comments.length <= 0" />
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
import Page from '../../component/page.fenye.vue';
import CommentList from '../../component/comment.list.vue';
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
            header: {

            },
    		menuLeftType: 'comment',
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
            comments: [
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    title: '对<span>《无头雕刻》</span> 进行了评论:',
                    comment: '收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒'
                },
                {
                    time: '2小时前',
                    name: '奇昊大本营',
                    title: '对 <strong>呵呵在此</strong> 在<span>《无头雕刻》</span> 的评论进行了回复:',
                    comment: '收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒',
                    record: 'TA说：收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒'
                },
                {
                    time: '2小时前',
                    name: '奇昊大本营',
                    title: '对你在 <span>《无头雕刻》</span> 的评论进行了回复:',
                    comment: '收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒',
                    record: '你说：收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒'
                },
                {
                    time: '2小时前',
                    name: '奇昊大本营',
                    title: '对你的动态进行了评论:',
                    comment: '收第三大撒风电视剧法律的收费金额肥五花肉无人机饭店是非饭店室内氛围同今日的苏里科夫的老师傅大大撒煞风大撒就开始大撒',
                    record: ''
                }
            ]
    	}
    },
    methods: {
    	
    },
    
}
</script>

