<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './article.less';
.content-right .content {
    padding: 30px;
    line-height: 1.75em;
    .default_border-r-4;
    .default_backgroud_3;
    .default_color_10;
    .default_font_size_3;
}
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <ArticleHeaderDom class="m-artice-header" :menu="menu" :menuIndex="menuIndex" />
    <div class="m-artice">
	<div class="m-artice-wrap">
		<div class="m-artice-content">
            <div class="content-left">
                <div class="img">
                    <img :src="catalog.catalog_cover_url" />
                </div>
                <!-- <div class="tag">
                    <div class="tag_text">{{catalog.category_title}}</div>
                </div> -->
            </div>
            <div class="content-right">
    			<div class="title">
    				简介
    			</div>
    			<div class="content" v-html="desc"></div>
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
    		menuIndex: 0,
            menu: [
                {
                    title: '简介',
                    isActive: true
                },
                {
                    title: '章节',
                    url: 'article.list.html'
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
        catalog: state => state.opus.catalog.info,
        desc (){
            var _desc = this.$store.state.opus.catalog.info.catalog_desc ? this.$store.state.opus.catalog.info.catalog_desc.replace(/[\r\n]/g, '<br />') : '';
            return _desc;
        }
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

