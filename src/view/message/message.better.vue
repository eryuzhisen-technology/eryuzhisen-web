<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-better;

.@{module} {
	padding-top: 20px;
	padding-bottom: 80px;
    .default_backgroud_5;
    & &-wrap {
        .default_width_960;
        .default_mar_auto;
    }
}
.@{module}-content {
	position: relative;
	min-height: 400px;
	overflow: hidden;
	& .better-left {}
	& .better-right {
		width: 720px;
		margin-left: 240px;
		& .better-right-title {
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
		& .better-right-content {
			min-height: 200px;
			margin-bottom: 30px;
			.default_backgroud_4;
			& .c-artice-better:last-child .c-artice-better-wrap {
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
    <div class="m-better">
	<div class="m-better-wrap">
		<div class="m-better-content">
			<MenuLeft class="better-left" :data="menuLeft" :type="menuLeftType" />
			<div class="better-right">
				<div class="better-right-title">
					共 <span>{{lists.length}}</span> 条新精选
				</div>
				<div class="better-right-content">
					<BetterDom v-for="(item, index) in lists" :data="item" :key="index" />
					<Empty class="content-empty" v-if="lists.length <= 0" />
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
import BetterDom from '../../component/article.better.vue';
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
        BetterDom: BetterDom,
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
    		menuLeftType: 'better',
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
    		lists: [
    			{
    				name: '奇昊大本营',
    				time: '2小时',
    				img: img1,
    				title: '路边传来了歌声',
    				text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...'
    			},
    			{
    				name: '奇昊大本营',
    				time: '2小时',
    				img: img1,
    				title: '路边传来了歌声',
    				text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...',
    				tags: ['漫画'],
    				fabulous: 123,
    				comment: 8134
    			},
    			{
    				name: '奇昊大本营',
    				time: '2小时',
    				img: img1,
    				title: '路边传来了歌声',
    				text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...',
    				tags: ['文字'],
    				fabulous: 123,
    				comment: 8134
    			}
    		]
    	}
    },
    methods: {
    	
    },
}
</script>

