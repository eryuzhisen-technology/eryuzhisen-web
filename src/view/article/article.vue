<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './article.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
    <ArticleHeaderDom class="m-artice-index__header" />
    <div class="m-artice-index">
	<div class="m-artice-index-wrap">
		<div class="m-artice-index__content">
			<MenuLeft 
                :data="menuLeft" 
            />
			<div class="content-right">
				<div class="title">
					作品目录
				</div>
				<div class="content">
					<Chapter
                        :catalog_id="catalog_id"
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
export default {
    data () {
    	return {
    		menuLeft: {
    			'menu': {
    				title: '章节列表',
                    isActive: true
    			},
    			'comment': {
    				title: '热门评论',
                    url: 'article.comment.html'
    			}
    		},
            catalog_id: ''
    	}
    },
    methods: {
    	
    },
    mounted (){
        // 获取url的参数
        var catalog_id = this.$url.getUrlParam('catalog_id');
        this.menuLeft.comment.url += '?catalog_id=' + catalog_id;
    }
}
</script>

