<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-author">
	<div class="m-author-wrap">
		<AuthorHeaderDom :data="author" class="author-header" />
		<div class="author-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" @typeswitch="changeType" />
			<div class="content-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="result">
					<div class="result-content" v-if="count > 0">
						<AuthorDom v-for="(item, index) in fans" :data="item" :key="index" />
					</div>
					<Empty class="content-empty" v-if="count <= 0" />
				</div>	
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
import AuthorHeaderDom from '../../component/author.header.vue';
import AuthorDom from '../../component/author.list.vue';
import Page from '../../component/page.fenye.vue';
import bubble from '../../component/bubble';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
export default {
	components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	AuthorHeaderDom: AuthorHeaderDom,
    	AuthorDom: AuthorDom,
       	Page: Page,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu,
    	Empty: Empty,
    	Bubble: bubble
    },
    data () {
    	return {
    		header: {},
    		menuLeftType: 'fans',
    		menuLeft: {
    			'works': {
    				title: 'Ta的作品',
    				url: 'author.work.html'
    			},
    			'follow': {
    				title: '关注',
    				url: 'author.follow.html'
    			},
    			'fans': {
    				title: '粉丝',
    				url: 'author.fans.html'
    			}
    		},
    		author: {
                hasMore: true,
    			type: 'author',
    			name: '爱吃棒冰的鱼',
    			time: '02',
    			isMark: false,
    			hasMore: false,
    			text: '一个喜欢讲故事的人，记录自己的生活及其有意思的事儿；关注自己所爱和所关心的人的点滴；分享自己过往的经历、体验、感悟；分享美食及喜爱或珍藏的音乐、电影...'
    		},
    		fans: [
    			{
    				avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
    				nick_name: '粉丝123',
    				isMark: false,
    				getMark: true
	    		},
	    		{
	    			avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
	    			nick_name: '粉丝123',
    				isMark: false,
    				getMark: true
	    		},
	    		{
	    			avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
	    			nick_name: '粉丝123',
    				isMark: true,
    				getMark: true
	    		},
	    		{
	    			avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
	    			nick_name: '粉丝123',
    				isMark: true,
    				getMark: true
	    		}
    		],
    		count: 4
    	}
    },
    methods: {
    	
    },
}
</script>

