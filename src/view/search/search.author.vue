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
			<div class="title" :style="{'width': (count == 0 ? 720 : count <= 5 ? count*240 : 1200) + 'px'}">
    			<span class="number">{{count}}</span>个用户
			</div>
			<div class="result">
				<AuthorDom 
                    resType="search"
                    class="result-content" 
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
                    url: 'search.article.html'
                },
                // tag: {
                //     title: '标签',
                //     url: 'search.tag.html'
                // },
                author: {
                    title: '用户',
                    isActive: true
                }
    		}
    	}
    },
    computed: mapState({
        count: state => state.auth.count
    }),
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.article.url += '?query=' + query;
            this.menuLeft.author.url += '?query=' + query;
        }
    }
}
</script>

