<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom resType="author" />
    <AuthorHeaderDom class="author-header" :menu="menu" :menuIndex="menuIndex" />
	<div class="m-author">
	<div class="m-author-wrap">
		<div class="author-content">
			<div class="result">
				<AuthorDom
                    resType="followList"
                    class="result-content" 
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
            menuIndex: 1,
    		menu: [
    			{
                    title: '作品',
                    url: 'author.work.html'
                },
                {
                    title: '关注',
                    isActive: true
                },
                {
                    title: '粉丝',
                    url: 'author.fans.html'
                }
    		]
    	}
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

