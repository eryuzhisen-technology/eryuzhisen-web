<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-index;
    .@{module} {
        position: relative;
        .default_backgroud_6;
    }
    .@{module}-tag {
        position: relative;
        width: 100%;
        height: 50px;
        .default_backgroud_5;
        & .tags {
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
            .default_width_960;
            .default_mar_auto;
            & .tags-item {
                float: left;
                width: 50px;
                height: 50px;
                line-height: 50px;
                padding-right: 20px;
                .default_font_size_2;
                .default_color_2;
                .default_border-r-n;
                .default_pointer;
                &:hover,
                &.z-active {
                    .default_color_10;
                }
            }
            & .tags-item:last-child { 
                margin-right: 0; 
                .default_border-r-r-4; 
            }
            & .arrow {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 30px;
                height: 2px;
                transition: left @default_speed_1;
                .default_backgroud_13;
            }
        }
    }
    .@{module}-banner {
        width: 100%;
        height: 340px;
        overflow: hidden;
        .user_background_2;
        .default_backgroud_5;
        .@{module}-banner-wrap {
            position: relative;
            height: 300px;
            overflow: hidden;
            .default_width_960;
            .default_mar_auto;
            // .default_backgroud_5;
            overflow: hidden;
            & .banner-lists {
                float: left;
                width: 750px;
                height: 100%;
                overflow: hidden;
                position: relative;
                border-radius: 0 0 0 4px;
                & .banner-item {
                    position: absolute; 
                    top: 0;
                    height: 0;
                    width: 100%;
                    height: 100%;
                    .default_center;
                    .default_opacity_0;
                    &.z-on {
                        z-index: 2;
                        .default_opacity_100;
                    }
                    & img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            & .banner-index {
                float: left;
                width: 210px;
                height: 100%;
                overflow: hidden;
                border-radius: 0 0 4px 0;
                & .banner-item {
                    width: 100%;
                    height: 100px;
                    & img {
                        width: 100%;
                        height: 100px;
                    }
                }
            }
            & .banner-btn {
                display: none;
                position: absolute;
                top: 50%;
                z-index: 3;
                width: 40px;
                height: 60px;
                margin-top: -30px;
                background-color: rgba(0,0,0,0.5);
                .default_pointer;
                & span {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: opacity @default_speed_1;
                }
                & span:nth-child(1) {
                    opacity: 1;
                }
                & span:nth-child(2) {
                    opacity: 0;
                }
                &:hover span:nth-child(1) {
                    opacity: 0;
                }
                &:hover span:nth-child(2) {
                    opacity: 1;
                }
            }
            & .banner-left {
                left: 0;
                .default_border-r-r-4;
                & span:nth-child(1) {
                    .skin_icon_left-2;
                }
                & span:nth-child(2) {
                    .skin_icon_left-2_on;
                }
            }
            & .banner-right {
                right: 0;
                .default_border-r-l-4;
                & span:nth-child(1) {
                    .skin_icon_right-2;
                }
                & span:nth-child(2) {
                    .skin_icon_right-2_on;
                }
            }
            &:hover {
                & .banner-btn {
                    display: block;
                }
            }
            &.z-active {
                & .banner-lists .banner-item {
                    transition: opacity @default_speed_1;
                }
                & .banner-index-wrap {
                    transition: transform @default_speed_1;
                }
            }
        }
    }
    .@{module}-list {
        position: relative;
        width: 100%;
        height: 100%;
        .default_backgroud_3;
        .@{module}-list-wrap {
            position: relative;
            min-height: 1020px;
            // overflow: hidden;
            padding-bottom: 60px;
            .default_width_960;
            .default_mar_auto;
        }
        & .list-left {
            float: left;
            width: 680px;
            margin-right: 20px;
            .default_border-r-4;
            .default_backgroud_3;
    		& .c-artice-item {
                &:nth-child(1) {
                    .default_border-r-t-4;
                }
    		}
            & .list-left__head {
                width: 100%;
                height: 60px;
                overflow: hidden;
                padding-top: 40px;
                margin-bottom: 20px;
                // background-image: url('../../common/images/img/bg-2.png');
                // background-position: top center;
                // background-repeat: no-repeat;
                // background-size: cover;
                & span {
                    .default_font_size_4;
                    .default_color_2;
                    .default_font_bolder;
                }
                & .list-left__head-text {
                    float: right;
                    .default_font_size_2;
                    .default_color_2;
                    .default_pointer;
                }
            }
    	}
        & .list-right {
            float: left;
            width: 260px;
            & .list-tags {
                margin-bottom: 40px;
                & .list-tags__title {
                    width: 100%;
                    height: 50px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    // background-image: url('../../common/images/img/bg-3.png');
                    // background-position: top center;
                    // background-repeat: no-repeat;
                    // background-size: cover;
                }
                & .list-tags__text {
                    float: right;
                    .default_color_2;
                    .default_font_size_2;
                    .default_pointer;
                }
                & .list-tags__body {
                    width: 260px;
                    height: 230px;
                    padding: 20px;
                    overflow: hidden;
                    .default_backgroud_2;
                    .default_border-r-4;
                }
                & .list-tags__body-wrap {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                & .list-tags__tag {
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 12px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    border-radius: 15px;
                    text-decoration: none;
                    transition: all @default_speed_1;
                    .default_color_2;
                    .default_font_size_2;
                    .default_backgroud_3;
                    .default_pointer;
                    &:hover {
                        .default_color_1;
                        .default_backgroud_2;
                        .default_border_shadow_5;
                    }
                }
            }
            & .list-author {
                margin-bottom: 40px;
            }
            & .list-advs {
                width: 100%;
                height: 330px;
                overflow: hidden;
                .default_border-r-4;
                & img {
                    max-width: 100%;
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom pageIndex="index" />
	<div class="m-index">
        <div class="m-index-tag">
            <div class="tags">
                <div 
                    v-for="(item, index) in category.label" 
                    @click="setTagIndex(item.category_id, index)" 
                    @mouseenter="tagEnter(index)"
                    @mouseout="tagOut"
                    class="tags-item" 
                    :class="{'z-active': category.index == item.category_id}"
                >
                    {{item.category_title}}
                </div>
                <div class="arrow"></div>
            </div>
        </div>
        <div class="m-index-banner">
            <div class="m-index-banner-wrap z-active">
                <div class="banner-lists">
                    <div class="banner-item" v-for="(item, index) in banner_images" :class="{'z-on': index == big_index -1}">
                        <img :src="item.image_url" />
                    </div>
                </div>
                <div class="banner-index">
                <div class="banner-index-wrap" :style="{transform: 'translate(0,-'+ small_index*100 +'px)'}">
                    <div class="banner-item" v-for="(item, index) in banner_images">
                        <img :src="item.image_url" />
                    </div>
                </div>
                </div>
                <div class="banner-btn banner-left" @click="bannerSwitch('left')">
                    <span></span>
                    <span></span>
                </div>
                <div class="banner-btn banner-right" @click="bannerSwitch('right')">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <!-- <HotDom class="m-index-hot" /> -->
        <div></div>
        <div class="m-index-list">
            <div class="m-index-list-wrap">
                <div class="list-left">
                    <div class='list-left__head'>
                        <span>优秀连载</span>
                    </div>
                    <ListDom 
                        class="list-left__body"
                        resType='index'
                        loadType="more"
                        catalog_type="2"
                    />
                </div>
                <div class="list-right">
                    <!-- <div class="list-tags">
                        <div class="list-tags__title">
                            <div class="list-tags__text" @click="getLabelList">随机换一批</div>
                        </div>
                        <div class="list-tags__body">
                        <div class="list-tags__body-wrap">
                            <a :href="'./page.html?labelTag='+ item" class="list-tags__tag" v-for="item in category.tags">{{item}}</a>
                        </div>
                        </div>
                    </div> -->
                    <HotAuthor class="list-author" resType="mark" />
                    <div class="list-advs">
                        <img src="../../common/images/img/adv-1.png" />
                    </div>
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
            // banner
            isCan: false,
            big_index: 1,
            small_index: 1,
            bannerTimer: null,

            tagIndex: 0
    	}
    },
    computed: mapState({
        category: state => state.opus.category,
        banner_size: state => state.common.banner_images.length,
        banner_images () {
            var imgs = this.$store.state.common.banner_images.concat(this.$store.state.common.banner_images);
            return imgs
        },
        article: state => state.opus.article,
        hot_number (){
            return Math.ceil(this.$store.state.opus.article.count/6)
        }
    }),
    methods: {
        bannerSwitch (type){
            if (!this.isCan) {
                return false;
            }
            this.isCan = false;
            this.switch(type);
        },
        switch (type) {
            clearTimeout(this.bannerTimer);

            var type = type || 'right';

            var lists = $('.m-index-banner-wrap');
            lists.removeClass('z-active');

            if (type == 'left' && this.small_index == 0) {
                this.small_index = this.banner_size;
            } else if (type == 'right' && this.small_index == this.banner_size) {
                this.small_index = 0;
            }

            if (type == 'left' && this.big_index == 1) {
                this.big_index = this.banner_size + 1;
            } else if (type == 'right' && this.big_index == this.banner_size) {
                this.big_index = 0;
            }

            setTimeout( res => {
                lists.addClass('z-active');
                if (type == 'left') {
                    this.big_index--;
                    this.small_index--;
                } else {
                    this.big_index++;
                    this.small_index++;
                }
                setTimeout( res => {
                    this.isCan = true;
                    this.bannerTimer = setTimeout( res => {
                        this.switch();
                    }, 3000)
                }, 500)
            }, 10)
        },
        hotSwitch (type){
            if (!this.hot_number) {
                return false;
            }
            if (type == 'left' && this.hot_index == 1) {
                return false;
            }
            if (type == 'right' && this.hot_index == this.hot_number) {
                return false;
            }
            if (!this.hot_isCan) {
                return false;
            }
            this.hot_number = false;

            if (type == 'left') {
                this.hot_index--;
            } else {
                this.hot_index++;
            }

            setTimeout( res => {
                this.hot_isCan = true;
            }, 500)
        },
        tagEnter (index){
            $('.m-index-tag .arrow').css('left', (30 + 20)*index);
        },
        tagOut (){
            $('.m-index-tag .arrow').css('left', (30 + 20)*this.tagIndex);
        },
        // 获取文章
        setTagIndex (category_id, index){
            this.tagIndex = index;          
            $('.m-index-tag .arrow').css('left', (30 + 20)*index);
            this.$store.dispatch('opus_setTagIndex', category_id).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
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
        // 获取banner数据
        getHomeBanner (){
            var cache_banner = this.$version.banner;
            var banner = this.$cache.getStore(cache_banner.key, cache_banner.version);
            if (banner) {
                this.$store.dispatch('common_setBannerList', banner).then( res => {
                    this.switch();
                    this.isCan = true;    
                })
                return false;
            }
            this.$store.dispatch('common_getHomeBanner').then( res => {
                this.switch();
                this.isCan = true;

                this.$cache.setStore(cache_banner.key, res.list, cache_banner.version, cache_banner.time);
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        getLabelList (){
            this.$eventHub.$emit('getLabelList', {
                number: 10
            });
        }
    },
    mounted (){
        var that = this;

        // 获取banner信息
        this.getHomeBanner();

        // 获取分类标签
        this.getCategoryList();
    }
}
</script>

