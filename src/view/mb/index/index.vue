<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-index {
        width: 100%;
        padding: 0 .3rem;
        padding-top: .2rem;
        .banner {
            overflow: hidden;
            .default_border-r-10;
            margin-bottom: .2rem;
            & .banner-list {
                position: relative;
                width: 100%;
                height: 2.75rem;
                overflow: hidden;
            }
            & .banner-list-item {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
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
        .catalog {
            width: 100%;
            height: 100%;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-index">
        <div class="banner">
            <div class="banner-list">
                <a v-for="item in banner_images" class="banner-list-item" :href="item.url">
                    <img :src="item.image_url" />
                </a>
            </div>
            <div class="banner-index">
                <div v-for="item in banner_images" class="banner-index-item"></div>
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
            big_index: 1,
            small_index: 1,
            bannerTimer: null,

            tagIndex: 0
        }
    },
    computed: mapState({
        isLogin: state => state.user.info.isLogin,
        banner_images: state => state.common.banner_images,
        article: state => state.opus.article
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

            var type = type || 'left';

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
            this.$store.dispatch('common_getHomeBanner', {
                isMB: true
            }).then( res => {
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
    }
}
</script>

