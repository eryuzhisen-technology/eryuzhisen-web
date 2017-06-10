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
			<div v-if="article.dataInit" class="title" :style="{'width': (count == count ? 720 : count <= 5 ? count*240 : 1200) + 'px'}">
                <span class="number">{{count}}</span>个标签
            </div>
			<div class="result">
                <div class="tag-wrap">
                    <div class="tag-item">心理解忧真</div>
                    <div class="tag-item">真识流</div>
                    <div class="tag-item">都市真奇</div>
                    <div class="tag-item">真狱</div>
                </div>
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
            },
            count: 4
    	}
    },
    computed: mapState({
        article: state => state.opus.article,
    }),
    methods: {

    },
    mounted (){
        // 获取url的参数
        var query = this.$url.getUrlParam('query');
        if (query) {
            this.menuLeft.article.url += '?query=' + query;
            this.menuLeft.author.url += '?query=' + query;
        }

        var w = 0;
        $('.tag-item').each(function(){
            w += ($(this).width() + 40) + 10;
        })
        $('.tag-wrap').width(w);
        $('.title').width(w);
    }
}
</script>

