<!-- style样式代码 -->
<style lang="less">
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
    }
	& .content-right__title {
		width: 100%;
		height: 60px;
		padding-left: 20px;
		padding-top: 22px;
		.default_font_size_3;
		.default_color_4;
		.default_backgroud_2;
        .default_border-b-6;
		& .number {
			.default_color_7;
		}
	}
    & .content-right__content {
        .default_backgroud_3;
        padding: 0 60px;
        & .content_form {
            width: 100%;
            height: 100px;
            padding-top: 30px;
            overflow: hidden;
            .default_border-b-4;
        }
        & .content_form-input {
            float: left;
            width: 500px;
            height: 40px;
            padding: 12px 30px;
            margin-right: 20px;
        }
        & .content_form-btn {
            float: left;
        }
        & .content_comment {
            margin-bottom: 30px;
            & .c-artice-comment:last-child {
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
				<div class="content-right__title">
					{{menuLeft[menuLeftType].content_title}}
				</div>
				<div class="content-right__content">
					<div class="content_form">
                        <div class="content_form-input cpm_form_input">
                            <input type="text" placeholder="发表评论...">
                        </div>
                        <div class="content_form-btn cpm_button_default">提交</div>
                    </div>
                    <div class="content_comment">
                        <ArticleCommentDom v-for="(item, index) in articleComment" :data="item" :key="index" />
                    </div>
				</div>
                <Page 
                    class="z-width"
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
import ArticleCommentDom from '../../component/article.comment.vue';
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
        ArticleCommentDom: ArticleCommentDom,
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
    		menuLeftType: 'comment',
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
            pageSize: 5,
            pageIndex: 1,
            count: 100,
            articleComment: [
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    time: '32分钟前',
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
                },
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    time: '32分钟前',
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
                },
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    time: '32分钟前',
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
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

