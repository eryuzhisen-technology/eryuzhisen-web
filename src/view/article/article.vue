<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/default.less';
@import (less) '../../common/css/common.less';
@module: m-artice-index;

.@{module} {
	padding-top: 20px;
	padding-bottom: 40px;
	.default_backgroud_5;
    & &-wrap {
        .default_width_960;
        .default_mar_auto;
    }
}
.@{module}__content {
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
			.default_backgroud_2;
			& .number {
				.default_color_7;
			}
		}
		& .content {
            margin-bottom: 30px;
            .default_backgroud_3;
            & .c-artice-menu:last-child .c-artice-menu-wrap {
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
    <div class="m-artice-index">
	<div class="m-artice-index-wrap">
		<ArticleHeaderDom :data="article" class="m-artice-index__header" />
		<div class="m-artice-index__content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="content-right">
				<div class="title">
					{{menuLeft[menuLeftType].content_title}}
				</div>
				<div class="content">
					<ArticleMenuDom v-if="count > 0" v-for="(item, index) in articleMenu" :data="item" :index="index" :key="index" />
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
import ArticleHeaderDom from '../../component/article.header.vue';
import ArticleMenuDom from '../../component/article.menu.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        ArticleHeaderDom: ArticleHeaderDom,
        ListDom: ListDom,
        ArticleMenuDom: ArticleMenuDom,
        Page: Page,
        Bubble: bubble,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        Empty: Empty
    },
    data () {
    	return {
            header: {

            },
    		menuLeftType: 'menu',
    		menuLeft: {
    			'menu': {
    				title: '目录',
    				content_title: '作品目录',
                    url: 'article.html'
    			},
    			'comment': {
    				title: '评论',
    				content_title: '热门评论',
                    url: 'article.comment.html'
    			}
    		},
    		count: 100,
            pageSize: 5,
            pageIndex: 1,
    		article: {
    			hasMore: true,
    			type: 'article',

    			title: '黑暗小巷的尽头',
    			tags: ['漫画', '文字'],
    			text: '黑暗小巷的尽头，有一家生意冷淡的照明商店，每天都有奇怪的人进出。老板对于他们的来访一点都不惊讶，却警告一个常来店里买灯泡的女孩，于是发生了这一切的故事',
    			fabulous: 3265,
    			comment: 3265,
    			name: '奇昊大本营',
    			avartar: ''
    		},
    		articleMenu: [
    			{
    				isNew: false,
    				hasHistory: false,
    				title: '蛇皮猫眼的窥视',
    				time: '05-23',
    				fabulous: 3265,
					comment: 3265
    			},
    			{
    				isNew: false,
    				hasHistory: true,
    				title: '二次手术台！',
    				time: '05-23',
    				fabulous: 3265,
					comment: 3265
    			},
    			{
    				isNew: true,
    				title: '今晚我想活命',
    				time: '05-23',
    				fabulous: 3265,
					comment: 3265
    			}
    		]
    	}
    },
    methods: {
    	pageSwitch (){

        }
    }
}
</script>

