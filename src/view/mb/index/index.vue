<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-index {
        width: 100%;
        padding: 0 .3rem .2rem;
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
                left: 0%;
                width: 100%;
                height: 100%;
                transform: translate(0, 0);
                border-radius: .1rem .1rem 0 0;
                overflow: hidden;
            }
            & .banner-list-item.z-hide {
                left: 100%;
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
                height: .5rem;
                padding-right: .3rem;
                border-radius: 0 0 .1rem .1rem;
                overflow: hidden;
                .default_backgroud_3;
                .default_flex_right;
            }
            & .banner-index-item {
                width: .14rem;
                height: .14rem;
                opacity: .3;
                margin-left: .18rem;
                .default_backgroud_fff;
                .default_border-r-50;
            }
            & .banner-index-item.z-active {
                opacity: 1;
            }
        }
        & .enter {
            margin-bottom: .2rem;
            .default_flex_middle;

            & .enter-item {
                width: 3.35rem;
                height: 1.5rem;
                background-size: 3.35rem 1.5rem;
                .default_backgroud_5;
                .default_border-r-10;

                &:last-child {
                    margin-left: .2rem;
                }
            }
        }
        & .catalog {
            width: 100%;
            height: 100%;
        }
        & .ft {
            width: 100%;
            height: 1rem;
            padding: 0 .2rem;
            .default_backgroud_3;
            .default_flex_left;
            .default_border-r-10;

            & .ft-item {
                height: .7rem;
                line-height: .7rem;
                padding: 0 .3rem;
                border-radius: .35rem;
                .default_backgroud_5;
                .default_color_1;
                .default_font_size_3;
            }   
        }
    }
</style>

<!-- html代码 -->
<template>
<FrameDom
    :data="frameData"
>
    <div class="m-index">
        <div  class="banner">
            <v-touch class="banner-list"
                v-on:swipeleft="bannerSidler('left')"
                v-on:swiperight="bannerSidler('right')"
            >
                <a v-for="(item, i) in banner_images" class="banner-list-item" :href="item.url" :class="{'z-hide': i != index}">
                    <img v-lazy="item.image_url"/>
                    <!-- <img :src="item.image_url" /> -->
                </a>
            </v-touch>
            <div class="banner-index">
                <div v-for="(item, i) in banner_images" class="banner-index-item" :class="{'z-active': i == index}"></div>
            </div>
        </div>
        <!-- <div class="enter">
            <a 
                class="enter-item" 
                v-for="item in enter"
                v-lazy:background-image="item.img"
                :href="item.url"
            >
            </a>
        </div> -->
        <div class="catalog">
            <ArticleList 
                resType='index'
                loadType="more"
                isRand="true"
                catalog_type="2"
                isHideEmpty="true"
            />
        </div>
        <div class="ft">
            <div class="ft-item" @click="goPC">切换电脑版</div>
        </div>
    </div>
</FrameDom>
</template>

<script>
import Cookies from 'js-cookie';
import {mapState} from 'vuex'
export default {
    data () {
        return {
            frameData: {
                title: {
                    text: '故事'
                },
                menus: {
                    pageIndex: 'index'
                },
                side: {
                    type: 'top'
                }
            },

            // banner
            isCan: false,
            index: 0,
            bannerTimer: null,
            
            enter: this.$defaultData.mbData.enter
        }
    },
    computed: mapState({
        isLogin: state => state.user.info.isLogin,
        banner_images: state => state.common.banner_images,
        article: state => state.opus.article,
        menus: state => state.frame.menus
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
            nextList.removeClass('z-hide').addClass('z-'+type);
            setTimeout( res => {
                lists.addClass('z-active');
                nowList.addClass('z-move'+type);
                nextList.addClass('z-move'+type);
                setTimeout( res => {
                    lists.removeClass('z-active');
                    nowList.addClass('z-hide').removeClass('z-moveleft z-moveright z-left z-right');
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
        goPC (){
            // 登录成功后，讲token写入cookie
            Cookies.set('mobile_request', 'full', {
                domain: 'eryuzhisen.com',
                path: '/',
                expires: ''
            });
            window.location.replace('http://www.eryuzhisen.com');
        },
    },
    updated (){

    },  
    mounted (){
        var that = this;

        // 获取banner信息
        this.getHomeBanner();
    }
}
</script>

