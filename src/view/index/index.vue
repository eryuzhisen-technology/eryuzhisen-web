<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-index;
    .@{module} {
        position: relative;
        padding-bottom: 80px;
        .default_backgroud_7;
    }
    .@{module}-banner {
        width: 100%;
        height: 350px;
        padding-bottom: 30px;
        overflow: hidden;
        .default_backgroud_6;
        .@{module}-banner-wrap {
            position: relative;
            height: 320px;
            overflow: hidden;
            .default_width_1200;
            .default_mar_auto;
            // .default_backgroud_5;
            overflow: hidden;
            & .banner-lists {
                float: left;
                width: 800px;
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
                width: 400px;
                height: 100%;
                overflow: hidden;
                border-radius: 0 0 4px 0;
                & .banner-item {
                    width: 100%;
                    height: 160px;
                    & img {
                        width: 100%;
                        height: 160px;
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
    .@{module}-enter {
        width: 100%;
        height: 240px;
        margin-bottom: 40px;
        .default_backgroud_6;
        & .m-index-enter-wrap {
            height: 200px;
            .default_width_1200;
            .default_mar_auto;
            & .enter-item {
                float: left;
                display: block;
                width: 380px;
                height: 200px;
                margin-right: 30px;
                overflow-y: hidden;
                & img {
                    width: 100%;
                    height: 100%;
                }
            }
            & .enter-item:last-child {
                margin-right: 0;
            }
        }
    }
    .@{module}-tag {
        position: relative;
        width: 100%;
        margin-bottom: 40px
    }
    .@{module}-list {
        position: relative;
        width: 100%;
        height: 100%;
        .@{module}-list-wrap {
            position: relative;
            overflow: hidden;
            .default_width_1200;
            .default_mar_auto;
        }
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom pageIndex="index" />
	<div class="m-index">
        <div class="m-index-banner">
            <div class="m-index-banner-wrap z-active">
                <div class="banner-lists">
                    <div class="banner-item" v-for="(item, index) in banner_images" :class="{'z-on': index == big_index -1}">
                        <img :src="item.image_url" />
                    </div>
                </div>
                <div class="banner-index">
                <div class="banner-index-wrap" :style="{transform: 'translate(0,-'+ small_index*160 +'px)'}">
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
        <div class="m-index-enter">
            <div class="m-index-enter-wrap">
                <a href="./about.html" class="enter-item"><img src="../../common/images/index/enter-1.png" /></a>
                <a href="./invite.html" class="enter-item"><img src="../../common/images/index/enter-2.png" /></a>
                <a href="./mobile.html" class="enter-item"><img src="../../common/images/index/enter-3.png" /></a>
            </div>
        </div>
        <div class="m-index-tag">
            <div class="cpm-top-menu" :style="{'width': category.label.length*90 + 'px'}">
                <div 
                    v-for="(item, index) in category.label" 
                    @click="setTagIndex(item.category_id, index)" 
                    class="menu-item" 
                    :class="{'z-active': category.index == item.category_id}"
                >
                    {{item.category_title}}
                </div>
            </div>
        </div>
        <div class="m-index-list">
            <div class="m-index-list-wrap">
                <ListDom 
                    class="list-left__body"
                    resType='index'
                    loadType="more"
                    catalog_type="2"
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
        // 获取文章
        setTagIndex (category_id, index){
            this.tagIndex = index;          
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

