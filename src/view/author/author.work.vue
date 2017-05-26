<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom resType="author" />
    <AuthorHeaderDom class="author-header" />
	<div class="m-author">
	<div class="m-author-wrap">
		<div class="author-content">
			<MenuLeft :data="menuLeft" />
			<div class="content-right">
				<div class="title">
					<span class="number"></span>作品
				</div>
				<div class="result">
					<ListDom 
                        resType="author"
                        userType="user_id"
                        loadType="page"
                        class="z-small" 
                    />
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
import ListDom from '../../component/article.list.vue';
import AuthorHeaderDom from '../../component/author.header.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
export default {
	components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	AuthorHeaderDom: AuthorHeaderDom,
    	ListDom: ListDom,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu,
    	Bubble: bubble
    },
    data () {
    	return {
    		menuLeft: {
    			'works': {
    				title: 'Ta的作品',
    				isActive: true
    			},
    			'follow': {
    				title: '关注',
    				url: 'author.follow.html'
    			},
    			'fans': {
    				title: '粉丝',
    				url: 'author.fans.html'
    			}
    		}
    	}
    },
    methods: {
    	
    },	
    mounted (){
        // 获取url的参数
        var user_id = this.$url.getUrlParam('user_id');
        this.menuLeft.follow.url += '?user_id=' + user_id;
        this.menuLeft.fans.url += '?user_id=' + user_id;
    }
}
</script>

