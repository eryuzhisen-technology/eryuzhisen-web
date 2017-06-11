<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './search.less';
.tag-wrap {
    overflow: hidden;
    .default_mar_auto;
    & .tag-item {
        float: left;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 10px;
        margin-right: 10px;
        border-radius: 25px;
        .default_font_size_7;
        .default_color_1;
        .default_backgroud_3;
        &:hover {
            .default_color_fff;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom
        resType='search'
    />
	<div class="m-search">
		<div class="m-search-content">
			<MenuLeft :data="menuLeft" />
			<div v-if="category.dataInit" class="title" :style="{'width': (!category.tags.length ? 720 : category.tags.length <= 5 ? category.tags.length*240 : 1200) + 'px'}">
                <span class="number">{{category.tags.length}}</span>个标签
            </div>
			<div class="result">
                <div class="tag-wrap">
                    <a class="tag-item" v-for="item in category.tags" :href="'./page.html?labelTag='+ item">{{item}}</a>
                </div>
                <Empty v-if="category.tags.length <= 0 && category.dataInit" />
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
                    title: '故事',
                    url: 'search.article.html',
                    isActive: false
                },
                tag: {
                    title: '标签',
                    isActive: true
                },
                author: {
                    title: '用户',
                    url: 'search.author.html'
                }
            }
    	}
    },
    computed: mapState({
        category: state => state.opus.category,
    }),
    methods: {
        // 获取标签
        getLabelList (query){
            this.$store.dispatch('opus_getLabelList', {
                "fuzzyLabel": decodeURIComponent(query)
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        }
    },
    updated (){
        if (this.category.tags.length) {
            var w = 0;
            $('.tag-item').each(function(){
                w += ($(this).width() + 40) + 10;
            })
            $('.tag-wrap').width(w);
            $('.title').width(w);
        }
    },
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.article.url += '?query=' + query;
            this.menuLeft.author.url += '?query=' + query;
        }
        this.getLabelList(query);
    }
}
</script>

