<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-index {
        width: 100%;
        padding: 0 .3rem;
        padding-top: .2rem;
        & .banner {
            overflow: hidden;
            .default_border-r-10;
            margin-bottom: .2rem;
            & .banner-list {
                position: relative;
                width: 100%;
                height: 2.75rem;
                overflow: hidden;
                border-radius: .1rem .1rem 0 0;
            }
            & .banner-list-item {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: translate(0, 0);
            }
            & .banner-list-item.z-active {
                transition: all .25s;
            }
            & .banner-list-item.z-left {
                left: 100%;
            }
            & .banner-list-item.z-right {
                left: -100%;
            }
            & .banner-list-item.z-moveleft {
                transform: translate(-100%, 0);
            }
            & .banner-list-item.z-moveright {
                transform: translate(100%, 0);
            }
            & .banner-index {
                width: 100%;
                height: .6rem;
                padding-right: .3rem;
                .default_backgroud_3;
                .default_flex_right;
            }
            & .banner-index-item {
                float: left;
                width: .1rem;
                height: .1rem;
                opacity: .3;
                margin-left: .1rem;
                .default_backgroud_fff;
                .default_border-r-50;
            }
            & .banner-index-item.z-active {
                opacity: 1;
            }
        }
        & .catalog {
            width: 100%;
            height: 100%;
        }
        & .ft {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1rem;
            .default_backgroud_3;
            .default_flex_center;
            .default_border_shadow_6;
            & .ft-item {
                flex: 1;
                height: .6rem;
                .default_color_1;
                .default_font_size_6;
                .default_flex_center;
                &:first-child {
                    .default_border-rr-5;
                }
                &.z-active {
                    .default_color_2;
                }
            }   
        }
        & .top {
            position: fixed;
            bottom: .8rem;
            right: .3rem;
            width: 1.1rem;
            height: 1.1rem;
            .default_backgroud_3;
            .default_border-r-50;
            .skin_top;
            .default_border_shadow_6;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-index">
        <div  class="banner">
            <v-touch class="banner-list"
                v-on:swipeleft="bannerSidler('left')"
                v-on:swiperight="bannerSidler('right')"
            >
                <a v-for="(item, i) in banner_images" class="banner-list-item" :href="item.url" :class="{'cpm_hide': i != index}">
                    <img :src="item.image_url" />
                </a>
            </v-touch>
            <div class="banner-index">
                <div v-for="(item, i) in banner_images" class="banner-index-item" :class="{'z-active': i == index}"></div>
            </div>
        </div>
        <div class="catalog">
            <ArticleList 
                resType='index'
                loadType="more"
                catalog_type="2"
                isHideEmpty="true"
            />
        </div>
        <!-- <div class="ft">
            <a href="./register.html" class="ft-item">注册</a>
            <a href="./login.html" class="ft-item">登陆</a>
        </div> -->
        <div v-if="hasScroll" class="top" @click="top"></div>
    </div>
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
            index: 0,
            bannerTimer: null,
            hasScroll: false
        }
    },
    computed: mapState({
        isLogin: state => state.user.info.isLogin,
        banner_images: state => state.common.banner_images,
        article: state => state.opus.article
    }),
    methods: {
        bannerSidler (type){
            if (!this.isCan) {
                return false;
            }
            this.isCan = false;

            clearTimeout(this.bannerTimer);

            var lens = this.banner_images.length;
            var _index;
            if (type == 'left') {
                if (this.index == lens-1) {
                    _index = 0;
                } else {
                    _index = this.index + 1;
                }
            } else {
                if (this.index == 0) {
                    _index = lens - 1;
                } else {
                    _index = this.index - 1;
                }
            }

            var lists = $(".banner-list-item");
            var nowList = lists.eq(this.index);
            var nextList = lists.eq(_index);
            nextList.removeClass('cpm_hide').addClass('z-'+type);
            setTimeout( res => {
                lists.addClass('z-active');
                nowList.addClass('z-move'+type);
                nextList.addClass('z-move'+type);
                setTimeout( res => {
                    lists.removeClass('z-active');
                    nowList.addClass('cpm_hide').removeClass('z-moveleft z-moveright z-left z-right');
                    nextList.removeClass('z-moveleft z-moveright z-left z-right');
                    this.isCan = true;
                    this.index = _index;

                    this.bannerTimer = setTimeout( res => {
                        this.bannerSidler('left');
                    }, 3000)
                }, 250)
            }, 10)
        },

        // 获取banner数据
        getHomeBanner (){
            var cache_banner = this.$version.banner;
            var banner = this.$cache.getStore(cache_banner.key, cache_banner.version);
            
            if (banner) {
                this.$store.dispatch('common_setBannerList', banner).then( res => {
                    this.isCan = true;
                    this.bannerTimer = setTimeout( res => {
                        this.bannerSidler('left');
                    }, 3000)
                })
                return false;
            }
            this.$store.dispatch('common_getHomeBanner', {
                isMB: true
            }).then( res => {
                this.isCan = true;
                this.bannerTimer = setTimeout( res => {
                    this.bannerSidler('left');
                }, 3000)

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
        },
        top (){
            $(window).scrollTop(0);
        }
    },
    updated (){

    },  
    mounted (){
        var that = this;

        $(window).scroll( e => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $(window).height()/2) {
                this.hasScroll = true;
            } else {
                this.hasScroll = false;
            }
        })

        // 获取banner信息
        this.getHomeBanner();
    }
}
</script>

