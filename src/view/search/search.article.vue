<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './search.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom
        resType='search'
    />
	<div class="m-search">
		<div class="m-search-content">
			<MenuLeft :data="menuLeft" />
			<div class="title" :style="{'width': (article.count == 0 ? 720 : article.count <= 5 ? article.count*240 : 1200) + 'px'}">
                <span class="number">{{article.count}}</span>个故事
            </div>
			<div class="result">
				<ListDom 
                    resType="search"
                    loadType='page'
                    class="result-content z-small"
                />
			</div>
		</div>
	</div>
	<FooterDom />
	<SideMenu />
	<bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
    	return {
    		menuLeft: {
    			article: {
                    title: '故事',
                    isActive: true
                },
                tag: {
                    title: '标签',
                    url: 'search.tag.html'
                },
    			author: {
    				title: '用户',
                    url: 'search.author.html'
    			}
    		},
            count: 0
    	}
    },
    computed: mapState({
        article: state => state.opus.article,
    }),
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.tag.url += '?query=' + query;
            this.menuLeft.author.url += '?query=' + query;
        }
    }
}
</script>

