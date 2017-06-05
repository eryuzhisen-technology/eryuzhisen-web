<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom resType="author" />
    <AuthorHeaderDom class="author-header" :menu="menu" :menuIndex="menuIndex" />
	<div class="m-author">
	<div class="m-author-wrap">
		<div class="author-content">
			<div class="result">
				<ListDom 
                    showType="left_right"
                    resType="author"
                    userType="user_id"
                    loadType="page"
                    isHideEmpty="true"
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
export default {
    data () {
    	return {
            menuIndex: 0,
    		menu: [
    			{
    				title: '作品',
    				isActive: true
    			},
    			{
    				title: '关注',
    				url: 'author.follow.html'
    			},
    			{
    				title: '粉丝',
    				url: 'author.fans.html'
    			}
    		]
    	}
    },
    methods: {
    	
    },	
    mounted (){
        // 获取url的参数
        var user_id = this.$url.getUrlParam('user_id');
        this.menu.map( (item, index) => {
            if (item.url) {
                item.url += '?user_id=' + user_id;
            }
        })
    }
}
</script>

