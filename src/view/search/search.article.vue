<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './search.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom
        resType='search'
    />
	<div class="m-search">
		<div class="m-search-content">
			<MenuLeft :data="menuLeft" />
			<div class="search-right">
				<div class="title">
					<span class="number">{{count}}</span> 条结果
				</div>
				<div class="result">
					<ListDom 
                        resType="search"
                        loadType='page'
                        class="result-content z-small"
                        @article_count="article_count"
                    />
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
export default {
    data () {
    	return {
    		menuLeft: {
    			article: {
    				title: '作品',
                    isActive: true
    			},
    			author: {
    				title: '作者',
                    url: 'search.author.html'
    			}
    		},
            count: 0
    	}
    },
    methods: {
        article_count (count){
            this.count = count;            
        }
    },
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.author.url += '?query=' + query;
        }
    }
}
</script>

