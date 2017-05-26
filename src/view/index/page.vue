<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-page;
    .@{module} {
        position: relative;
        padding-top: 50px;
        .default_backgroud_6;
    }
    .@{module}-tag {
        position: fixed;
        top: 60px;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 50px;
        .default_backgroud_5;
        & &-wrap {
            position: relative;
            .default_width_960;
            .default_mar_auto;
        }
        & .tags {
            width: 100%;
            overflow: hidden;
            & .tags-item {
                float: left;
                height: 50px;
                line-height: 50px;
                margin-right: 20px;
                .default_color_4;
                .default_border-r-n;
                .default_pointer;
                &:hover,
                &.z-active {
                    border-bottom: 2px solid @default_backgroud_13;
                    .default_color_1;
                }
            }
            & .tags-item:last-child { margin-right: 0; .default_border-r-r-4; }
        }
        & .switch {
            position: absolute;
            top: 15px;
            right: 0;
            height: 20px;
            overflow: hidden;
            & span {
                display: inline-block;
                width: 20px;
                height: 20px;
                .default_pointer;
                &:nth-child(1) {
                    .skin_icon_kuai;
                    &:hover,
                    &.z-active {
                        .skin_icon_kuai_on;
                    }
                }
                &:nth-child(2) {
                    .skin_icon_tiao;
                    &:hover,
                    &.z-active {
                        .skin_icon_tiao_on;
                    }
                }
            }
        }
    }
    .@{module}-label {
        position: fixed;
        top: 110px;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100px;
        .default_backgroud_4;
        & &-wrap {
            height: 100px;
            .default_width_960;
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
    .@{module}-list {
        width: 100%;
        height: 100%;
        padding-top: 140px;
        .default_backgroud_3;
    }
    .@{module}-list-wrap {
        position: relative;
        // min-height: 1020px;
        // overflow: hidden;
        padding-bottom: 50px;
        .default_width_960;
        .default_mar_auto;
    }
    .@{module}-list {
        position: relative;
        width: 100%;
        height: 100%;
        & .list-left {
            float: left;
            width: 260px;
            margin-right: 20px;
            & .list-author {
                margin-bottom: 40px;
            }
        }
        & .list-right {
            float: left;
            width: 680px;
            .default_border-r-4;
            .default_backgroud_3;
    		& .c-artice-item {
                &:nth-child(1) {
                    .default_border-r-t-4;
                }
    		}
            & .list-right__head {
                width: 100%;
                height: 50px;
                overflow: hidden;
                padding-top: 30px;
                margin-bottom: 20px;
                background-image: url('../../common/images/img/bg-5.png');
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                & .list-right__head-text {
                    float: right;
                    .default_font_size_2;
                    .default_color_2;
                    .default_pointer;
                }
            }
    	}
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom pageIndex="page" />
	<div class="m-page">
        <div class="m-page-tag">
            <div class="m-page-tag-wrap">
                <div class="tags">
                    <div v-for="item in category.label" @click="setTagIndex" :data-id="item.category_id" class="tags-item" :class="{'z-active': category.index == item.category_id}">{{item.category_title}}</div>
                </div>
                <!-- <div class="switch">
                    <span @click="setType(1)"></span>
                    <span @click="setType(2)"></span>
                </div> -->
            </div>
        </div>
        <div class="m-page-label">
            <div class="m-page-label-wrap">
                <div class="label-title">标签专栏：</div>
                <div class="label-content">{{labelTag}}</div>
            </div>
        </div>
        <div class="m-page-list">
            <div class="m-page-list-wrap">
                <div class="list-left">
                    <HotAuthor 
                        class="list-author z-active" 
                        resType="active"
                    />
                </div>
                <div class="list-right">
                    <div class='list-right__head'></div>
                    <ListDom 
                        class="list-right__body"
                        resType='page'
                        loadType="more"
                    />
                </div>
                <div class="cpm_clear"></div>
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
        this.labelTag = this.$url.getUrlParam('labelTag');
    }
}
</script>

