<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './article.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
    <ArticleHeaderDom class="m-artice-header" :menu="menu" :menuIndex="menuIndex" />
    <div class="m-artice">
	<div class="m-artice-wrap">
		<div class="m-artice-content">
            <div class="content-left">
                <div class="img">
                    <img :src="catalog.catalog_cover_url" />
                </div>
                <div class="tag">
                    <div class="tag_text">{{catalog.category_title}}</div>
                </div>
            </div>
            <div class="content-right">
    			<div class="title">
    				章节
    			</div>
    			<div class="content">
    				<Chapter />
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
    		menuIndex: 1,
            menu: [
                {
                    title: '简介',
                    url: 'article.intro.html'
                },
                {
                    title: '章节',
                    isActive: true
                },
                {
                    title: '评论',
                    url: 'article.comment.html'
                }
            ],
            catalog_id: ''
    	}
    },
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info
    }),
    methods: {
    	
    },
    mounted (){
        // 获取url的参数
        var catalog_id = this.$url.getUrlParam('catalog_id');
        this.menu.map( (item, index) => {
            if (item.url) {
                item.url += '?catalog_id=' + catalog_id;
            }
        })
    }
}
</script>

