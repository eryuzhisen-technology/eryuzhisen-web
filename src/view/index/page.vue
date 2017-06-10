<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-page;
    .@{module} {
        position: relative;
        .default_backgroud_7;
    }
    .@{module}-label {
        width: 100%;
        height: 100px;
        .default_backgroud_6;
        .default_center;
        & &-wrap {
            height: 100px;
            .default_width_1200;
            .default_mar_auto;
            .default_middle;
        }
        & .label-title {
            display: inline-block;
            height: 100px;
            line-height: 100px;
            .default_font_size_6;
            .default_color_2;
            .default_font_family_bolder;
            .default_middle;
        }
        & .label-content {
            display: inline-block;
            height: 100px;
            line-height: 100px;
            .default_font_size_6;
            .default_color_1;
            .default_font_family_bolder;
            .default_middle;
        }
    }
    .@{module}-tag {
        position: relative;
        width: 100%;
        margin-top: 60px;
        margin-bottom: 40px
    }
    .@{module}-list {
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 40px;
        & .m-page-list-wrap {
            position: relative;
            // min-height: 1020px;
            // overflow: hidden;
            padding-bottom: 50px;
        }
        & .title {
            width: 100%;
            .default_font_size_5;
            .default_color_1;
            .default_mar_auto;
            margin-top: 30px;
            margin-bottom: 20px;
            & .number {
                .default_font_family_bolder;
                .default_font_size_6;
            }
            & .clear {
                margin-left: 15px;
                .default_font_size_1;
                .default_color_3;
                .default_pointer;
            }
        }
        & .list {
            width: 100%;
            height: 100%;
            &.z-empty .c-artice-list {
                margin-top: 80px;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom pageIndex="page" />
	<div class="m-page">
        <div class="m-page-label">
            <div class="m-page-label-wrap">
                <div class="label-title">标签专栏：</div>
                <div class="label-content">{{labelTag}}</div>
            </div>
        </div>
        <div class="m-page-list">
            <div class="m-page-list-wrap">
                    <div v-if="article.lists.length" class="title" :style="{'width': (article.lists.length <= 5 ? article.lists.length*240 : 1200) + 'px'}">
                    <span class="number">{{article.count}}</span>个故事
                </div>
                <ListDom 
                    class="list"
                    resType='page'
                    loadType="page"
                    isHideEmpty="true"
                />
            </div>
            <div class="cpm_clear"></div>
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
            labelTag: '',
            labelShow: 1
    	}
    },
    computed: mapState({
        category: state => state.opus.category,
        article: state => state.opus.article
    }),
    methods: {
        setType (type){
            this.type = type;
        },
        // 获取文章
        setTagIndex (event){
            var category_id = event.currentTarget.dataset['id'];
            this.$store.dispatch('opus_setTagIndex', category_id).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        // 获取分类标签
        getCategoryList (){
            this.$store.dispatch('opus_getCategoryList', {}).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        getLabelList (){
            this.$eventHub.$emit('getLabelList');
        }
    },
    mounted (){
        var that = this;
        this.labelTag = decodeURIComponent(this.$url.getUrlParam('labelTag'));
    }
}
</script>

