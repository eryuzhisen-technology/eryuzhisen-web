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
			<div class="mark-right">
				<div class="title">
					<span class="number">{{article.count}}</span>部作品
				</div>
				<div class="result">
					<ListDom 
                        resType='history'
						class="result-content z-small z-mark" 
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
import {mapState} from 'vuex'
export default {
    data () {
    	return {
			pageIndex: 'mark',
    		menuLeft: {
    			mark: {
    				title: '收藏的作品',
    				url: 'mark.html'
    			},
    			history: {
    				title: '历史记录',
    				isActive: true
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

