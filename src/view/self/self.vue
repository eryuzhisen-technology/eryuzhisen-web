<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-self;

.@{module} {
	padding-top: 20px;
	padding-bottom: 40px;
	.default_width_960;
	.default_mar_auto;
	& .self-header {}
	& .self-content {
		position: relative;
		min-height: 200px;

		& .content-right {
			width: 720px;
			margin-left: 240px;
			& .title {
				width: 100%;
				height: 60px;
				padding-left: 20px;
				padding-top: 22px;
				.default_font_size_3;
				.default_color_4;
				.default_backgroud_3;
				& .number {
					.default_color_7;
				}
			}
			& .result {
				.default_backgroud_5;
				& .result-content {
					width: 100%;
					height: 100%;
					& .c-artice-list {
						.default_backgroud_5;
					}
					& .c-artice-list:last-child,
					& .c-author-list:last-child {
						.default_border-n;
					}
				}
			}
		}
	}
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
	<div class="m-self">
		<AuthorHeaderDom :data="author" class="self-header" />
		<div class="self-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" @typeswitch="changeType" />
			<div class="content-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="result">
					<div class="result-content" v-if="menuLeftType == 'works' && works.length > 0">
						<ListDom v-for="(item, index) in works" :data="item" :key="index" class="z-small"/>
					</div>
					<div class="result-content" v-if="menuLeftType == 'mark' && mark.length > 0">
						<AuthorDom v-for="(item, index) in mark" :data="item" :key="index" />
					</div>
					<div class="result-content" v-if="menuLeftType == 'fans' && fans.length > 0">
						<AuthorDom v-for="(item, index) in fans" :data="item" :key="index" />
					</div>
					<Empty class="result-empty" v-if="fans.length <= 0 || mark.length <= 0 || works.length <= 0" />
				</div>	
			</div>
		</div>
	</div>
	<FooterDom />
	<SideMenu />
</div>
</template>

<script>
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.work.vue';
import AuthorHeaderDom from '../../component/author.header.vue';
import AuthorDom from '../../component/author.list.vue';
import Empty from '../../component/content.empty.vue';
import Page from '../../component/page.fenye.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
export default {
    data () {
    	return {
            header: '',
    		menuLeftType: 'works',
    		menuLeft: {
    			'works': {
                    title: '我的作品'
                },
    			'mark': {
                    title: '关注'
                },
    			'fans': {
                    title: '粉丝'
                }
    		},
    		author: {
    			type: 'self',
    			name: '爱吃棒冰的鱼',
    			time: '02',
    			isMark: false,
    			hasMore: false,
    			text: '一个喜欢讲故事的人，记录自己的生活及其有意思的事儿；关注自己所爱和所关心的人的点滴；分享自己过往的经历、体验、感悟；分享美食及喜爱或珍藏的音乐、电影...'
    		},
    		works: [
    			{
    				isNew: true,
    				name: '奇昊大本营',
    				time: '2小时',
    				img: '/dist/images/discover/img-1.png',
    				title: '路边传来了歌声',
    				text: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				tags: ['漫画', '文字'],
    				fabulous: 123,
    				comment: 8134
    			},
    			{
    				name: '奇昊大本营',
    				time: '2小时',
    				img: '/dist/images/discover/img-1.png',
    				title: '路边传来了歌声',
    				text: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				tags: ['漫画'],
    				fabulous: 123,
    				comment: 8134
    			},
    			{
    				name: '奇昊大本营',
    				time: '2小时',
    				img: '/dist/images/discover/img-1.png',
    				title: '路边传来了歌声',
    				text: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
    				tags: ['文字'],
    				fabulous: 123,
    				comment: 8134
    			}
    		],
    		mark: [
    			{
    				name: '关注者123',
    				isMark: true,
    				getMark: true
	    		},
	    		{
	    			name: '关注者123',
    				isMark: true,
    				getMark: true
	    		},
	    		{
	    			name: '关注者123',
    				isMark: true,
    				getMark: false
	    		},
	    		{
	    			name: '关注者123',
    				isMark: true,
    				getMark: false
	    		}
    		],
    		fans: [
    			{
    				name: '粉丝123',
    				isMark: false,
    				getMark: true
	    		},
	    		{
	    			name: '粉丝123',
    				isMark: false,
    				getMark: true
	    		},
	    		{
	    			name: '粉丝123',
    				isMark: true,
    				getMark: true
	    		},
	    		{
	    			name: '粉丝123',
    				isMark: true,
    				getMark: true
	    		}
    		]
    	}
    },
    methods: {
    	changeType: function(type){
    		this.menuLeftType = type;
    	}
    },
    components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	AuthorHeaderDom: AuthorHeaderDom,
    	ListDom: ListDom,
    	AuthorDom: AuthorDom,
       	Page: Page,
       	Empty: Empty,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu
    }
}
</script>

