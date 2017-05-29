<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './mark.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :pageIndex="pageIndex" />
	<div class="m-mark">
	<div class="m-mark-wrap">
		<div class="m-mark-content">
		<MenuLeft :data="menuLeft" />
			<div v-if="article.lists.length" class="title" :style="{'width': (article.lists.length <= 5 ? article.lists.length*240 : 1200) + 'px'}">
				<span class="number">{{article.count}}</span>个故事
				<strong class="clear" @click="clear">清空浏览历史</strong>
			</div>
			<div class="result" :class="{'z-empty': !article.lists.length}">
				<ListDom 
                    resType='history'
					class="result-content z-small z-mark" 
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
import {mapState} from 'vuex'
export default {
    data () {
    	return {
			pageIndex: 'mark',
    		menuLeft: {
    			mark: {
    				title: '收藏',
    				url: 'mark.html'
    			},
    			history: {
    				title: '历史',
    				isActive: true
    			}
    		}
    	}
    },
    computed: mapState({
        article: state => state.opus.article,
    }),
    methods: {
    	clear (){
    		var cache_history = this.$version.history;
            this.$cache.removeStore(cache_history.key);
            this.$store.dispatch('opus_setArticle', {
                lists: [],
                count: 0
            }).then( res => {
                this.$emit('article_count', this.article.count);
            })
    	}
    }
}
</script>

