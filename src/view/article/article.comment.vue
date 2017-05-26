<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './article.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
    <ArticleHeaderDom class="m-artice-index__header" />
    <div class="m-artice-index">
	<div class="m-artice-index-wrap">
		<div class="m-artice-index__content">
			<MenuLeft 
                :data="menuLeft" 
            />
			<div class="content-right">
				<div class="title">
					评论
				</div>
				<div class="content">
					<div class="content_form">
                        <div class="content_form-input cpm_form_input">
                            <input type="text" placeholder="发表评论..." v-model="comment">
                        </div>
                        <div class="content_form-btn" @click="commentCommit">提交</div>
                    </div>
                    <ArticleCommentDom
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
export default {
    data () {
    	return {
    		menuLeft: {
    			'menu': {
                    title: '章节列表',
                    url: 'article.html'
                },
                'comment': {
                    title: '热门评论',
                    isActive: true
                }
    		},
            comment: ''
    	}
    },
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
        this.menuLeft.menu.url += '?catalog_id=' + catalog_id;
    }
}
</script>

