<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
@import (less) './article.less';
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
                <div v-if="catalog.updated == 1" class="fresh">
                    更新
                </div>
            </div>
            <div class="content-right">
                <div class="title">
                    热门评论
                </div>
    			<div class="content">
                    <ArticleCommentDom
                        resType="article"
                        type="1"
                        class="content_comment"
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
            menuIndex: 2,
            menu: [
                {
                    title: '简介',
                    url: 'article.intro.html'
                },
                {
                    title: '章节',
                    url: 'article.list.html'
                },
                {
                    title: '评论',
                    isActive: true
                }
            ],
            comment: ''
    	}
    },
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info
    }),
    methods: {
    	commentCommit (){
            if (!$.trim(this.comment)) {
                return false;
            }
            this.$eventHub.$emit('article.comment.addComment', {
                comment: this.comment
            });
        }
    },
    mounted (){
        this.$eventHub.$on('article.comment.refresh', res => {
            this.comment = '';
        });

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

