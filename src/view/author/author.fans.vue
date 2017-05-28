<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom resType="author" />
    <AuthorHeaderDom class="author-header" />
	<div class="m-author">
	<div class="m-author-wrap">
		<div class="author-content">
			<MenuLeft :data="menuLeft" />
			<div class="content-right">
				<div class="title">
					粉丝
				</div>
				<div class="result">
					<AuthorDom
                        resType="fansList"
                        @author_count="author_count"
                        class="result-content" 
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
    			'works': {
    				title: 'Ta的作品',
    				url: 'author.work.html'
    			},
    			'follow': {
    				title: '关注',
    				url: 'author.follow.html'
    			},
    			'fans': {
    				title: '粉丝',
    				isActive: true
    			}
    		}
    	}
    },
    methods: {
    	author_count (count){
            this.count = count;            
        }
    },
    mounted (){
        // 获取url的参数
        var user_id = this.$url.getUrlParam('user_id');
        this.menuLeft.works.url += '?user_id=' + user_id;
        this.menuLeft.follow.url += '?user_id=' + user_id;
    }
}
</script>

