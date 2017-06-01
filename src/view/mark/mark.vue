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
			<div class="title" :style="{'width': (article.count <= 5 ? article.count*240 : 1200) + 'px'}">
                <p v-if="article.count">
                    <span class="number">{{article.count}}</span>个故事
                </p>
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

