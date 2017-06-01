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
			<div class="title" :style="{'width': (count <= 5 ? count*240 : 1200) + 'px'}">
                <p v-if="count">
    				<span class="number">{{count}}</span>个用户
                </p>
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
    				title: '作品',
                    url: 'search.article.html'
    			},
    			author: {
    				title: '作者',
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
        }
    }
}
</script>

