<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) './mark.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom :pageIndex="pageIndex" />
	<div class="m-mark">
	<div class="m-mark-wrap">
		<div class="m-mark-content">
			<MenuLeft :data="menuLeft" />
			<div v-if="article.dataInit" class="title" :style="{'width': (article.lists.length == 0 ? 720 : article.lists.length <= 5 ? article.lists.length*240 : 1200) + 'px'}">
                <span class="number">{{article.count}}</span>个故事
            </div>
			<div class="result">
				<ListDom 
                    resType='mark'
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
    				isActive: true
    			},
    			history: {
    				title: '历史',
    				url: 'history.html'
    			}
    		}
    	}
    },
    computed: mapState({
        article: state => state.opus.article,
    }),
    methods: {
    	
    }
}
</script>

