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
					<AuthorDom 
                        resType="search"
                        @author_count="author_count"
                        class="result-content" 
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
                    url: 'search.article.html'
    			},
    			author: {
    				title: '作者',
                    isActive: true
    			}
    		},
            count: 0
    	}
    },
    methods: {
    	author_count (count){
            this.count = count;            
        }
    },
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.article.url += '?query=' + query;
        }
    }
}
</script>

