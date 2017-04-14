<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-mark;

.@{module} {
	padding-top: 20px;
	padding-bottom: 80px;
	.default_backgroud_3;
	& &-wrap {
		.default_width_960;
		.default_mar_auto;
	}
}
.@{module}-content {
	position: relative;
	min-height: 400px;
	& .mark-left {}
	& .mark-right {
		width: 720px;
		margin-left: 240px;
		& .title {
			width: 100%;
			height: 60px;
			padding-left: 20px;
			padding-top: 22px;
			.default_font_size_3;
			.default_color_4;
			.default_backgroud_4;
			& .number {
				.default_color_7;
			}
		}
		& .result {
			min-height: 200px;
			margin-bottom: 30px;
			.default_backgroud_5;
			& .result-content {
				width: 100%;
				height: 100%;
				& .c-artice-list {
					.default_backgroud_5;
				}
				& .c-artice-list:last-child,
				& .mc-author-list:last-child {
					.default_border-n;
				}
			}
			& .result-empty {
				padding-top: 60px;
				padding-bottom: 120px;
				.default_center;
				.default_font_size_4;
				.default_color_fff;
				& .img {
					width: 100px;
					height: 120px;
					.default_mar_auto;
					margin-bottom: 20px;
					.default_backgroud_000;
					& img {
						width: 100%;
					}
				}
				& .text {
					opacity: .1;
				}
			}
		}
	}
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-mark">
	<div class="m-mark-wrap">
		<div class="m-mark-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="mark-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="result">
					<div class="result-content" v-if="count > 0">
						<ListDom class="z-small z-mark" v-for="(item, index) in lists" :data="item" :key="index"/>
					</div>
					<Empty class="content-empty" v-if="count <= 0" />
				</div>
				<Page 
					:count="count" 
					:length="pageSize"
					:index="pageIndex"
					@page_switch="pageSwitch"
				/>
			</div>
		</div>
	</div>
	</div>
	<FooterDom />
	<SideMenu />
	<Bubble />
</div>
</template>

<script>
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.list.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
import img1 from '../../common/images/discover/img-1.png'
export default {
	 components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	ListDom: ListDom,
       	Page: Page,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu,
    	Empty: Empty,
    	Bubble: bubble
    },
    data () {
    	return {
    		header: 'mark',
    		menuLeftType: 'mark',
    		menuLeft: {
    			mark: {
    				title: '收藏',
    				url: 'mark.html'
    			},
    			history: {
    				title: '历史',
    				url: 'history.html'
    			}
    		},
    		pageSize: 5,
    		pageIndex: 2,
    		count: 100,
    		lists: [
    			{
    				user: {
    					nick_name: '奇昊大本营',
    				},
    				avatar_url: img1,
    				catalog_cover_url: img1,
    				catalog_title: '路边传来了歌声',
    				catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				category_title: '漫画',
    				praise_count: 123,
    				comment_count: 8134
    			},
    			{
    				user: {
    					nick_name: '奇昊大本营',
    				},
    				avatar_url: img1,
    				catalog_cover_url: img1,
    				catalog_title: '路边传来了歌声',
    				catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				category_title: '漫画',
    				praise_count: 123,
    				comment_count: 8134
    			},
    			{
    				user: {
    					nick_name: '奇昊大本营',
    				},
    				avatar_url: img1,
    				catalog_cover_url: img1,
    				catalog_title: '路边传来了歌声',
    				catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				category_title: '文字',
    				praise_count: 123,
    				comment_count: 8134
    			}
    		]
    	}
    },
    methods: {
    	pageSwitch (){}
    }
}
</script>

