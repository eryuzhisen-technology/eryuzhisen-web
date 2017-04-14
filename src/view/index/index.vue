<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-index;
    .@{module} {
        position: relative;
        padding-top: 40px;
        padding-bottom: 40px;
        .default_backgroud_6;
    }
    .@{module}-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 450px;
        overflow: hidden;
        .user_background_2;
    }
    .@{module}-wrap {
        .default_width_960;
        .default_mar_auto;
        z-index: 2;
    }
    .@{module}-banner {
        position: relative;
        height: 480px;
        width: 100%;
        margin-bottom: 20px;
        .default_backgroud_3;
        & .banner-lists {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            & .banner-item {
                position: absolute; 
                top: 0;
                height: 0;
                transition: opacity 1s;
                width: 100%;
                height: 100%;
                .default_center;
                .default_opacity_0;
                &.z-on {
                    z-index: 2;
                    .default_opacity_100;
                }
                & p {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    background-color: rgba(0,0,0,0.5);
                    .default_font_size_6;
                    .default_color_fff;
                    .default_font_family_bolder;
                    .default_left;
                    padding-left: 40px;
                }
                & img { width: 100%; }
            }
        }
        & .banner-index {
            position: absolute;
            bottom: 35px;
            right: 60px;
            z-index: 2;
            overflow: hidden;
            & .banner-item {
                float: left;
                width: 10px;
                height: 10px;
                margin-left: 12px;
                .default_backgroud_fff;
                .default_border-r-50;
                .default_opacity_50;
                .default_pointer;
                &.z-on {
                    .default_opacity_100;
                }
            }
        }
        & .banner-btn {
            position: absolute;
            top: 50%;
            z-index: 3;
            width: 60px;
            height: 100px;
            margin-top: -50px;
            opacity: .5;
            background-color: #000;
            .default_pointer;
        }
        & .banner-left {
            left: 0;
            .default_border-r-r-4;
            .skin_icon_left;
        }
        & .banner-right {
            right: 0;
            .default_border-r-l-4;
            .skin_icon_right;
        }
    }
    .@{module}-content {
    	& .tags {
    		overflow: hidden;
    		margin-bottom: 30px;
            .default_border-r-4;
    		& .tags-item {
    			float: left;
    			width: 60px;
    			height: 30px;
    			line-height: 30px;
                .default_border-r-n;
    		}
            & .tags-item:first-child { margin-right: 0; .default_border-r-l-4; }
    		& .tags-item:last-child { margin-right: 0; .default_border-r-r-4; }
    	}
    	& .lists {
            overflow: hidden;
    		margin-bottom: 30px;
            .default_border-r-4;
            .default_backgroud_3;
    		& .c-artice-list {
                &:last-child {
    	           .default_border-n;
                }
                &:hover {
                    .default_backgroud_4;
                    & .c-artice-list-wrap {
                        .default_border-b-4;
                    }
                }
    		}
    	}
    	& .btn-more {
    		width: 100%;
            padding: 42px 0;
            .default_center;
            .default_color_5;
            .default_font_family_bolder;
            .default_font_size_3;
            .default_pointer;
            & .btn-more-loading {
                & em {
                    .default_disline;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    .default_middle;
                    .skin_icon_load;
                    animation: loading 1.5s linear infinite;
                }
                & span {
                    .default_disline;
                    .default_color_1;
                    .default_font_family_bolder;
                    .default_font_size_3;
                    .default_middle;
                }
            }
    	}
    }
@keyframes loading {
    from { transform: rotate(0); }
    to { transform: rotate(359deg); }
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-index">
    <div class="m-index-bg"></div>
    <div class="m-index-wrap">
        <div class="m-index-banner">
            <div class="banner-lists">
                <div class="banner-item" v-for="(item, index) in banner_images" :class="{'z-on': index == 0}">
                    <img :src="item.image_url" />
                    <p>{{item.title}}</p>
                </div>
            </div>
            <div class="banner-index">
                <div class="banner-item" v-for="(item, index) in banner_images" :class="{'z-on': index == 0}"></div>
            </div>
            <div class="banner-btn banner-left" data-type="left" @click="bannerSwitch"></div>
            <div class="banner-btn banner-right" data-type="right" @click="bannerSwitch"></div>
        </div>
		<div class="m-index-content">
			<div class="tags">
				<div v-for="item in tags" @click="getCatalogList" :data-id="item.category_id" data-replace="1" class="tags-item" :class="tagIndex == item.category_id ? 'cpm_button_stress' : 'cpm_button_weaks'">{{item.category_title}}</div>
			</div>
			<div class="lists" >
				<ListDom v-for="(item, index) in lists" :data="item" :key="index" />
                <div class="btn-more" v-if="more" @click="getCatalogList">
                    <div v-if="!loading" class="btn-more-before">登录查看更多</div>
                    <div v-if="loading" class="btn-more-loading"><em></em><span>加载中...</span></div>
                </div>
			</div>
		</div>
	</div>
    </div>
	<FooterDom />
	<SideMenu />
    <Bubble />
    <edit />
    
</div>
</template>

<script>
import imgUrl from './img-1.png';
import imgUrl_ban from './img-1.jpg';
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.list.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble.vue'
import {getHomeBanner, getLabelList, getCategoryList, getCatalogList} from '../../server/getDataCommon';
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        ListDom: ListDom,
        SideMenu: SideMenu,
        Bubble: bubble
    },
    data () {
    	return {
            header: {
                page: 'index',
                isLogin: false
            },
    		lists: [],
            loading: false,
            banner_images: [],
            tags: [{
                category_desc: "全部",
                category_id: "0",
                category_title: "全部"
            }],
            tagIndex: 0,
            more: 0,
            pageIndex: 1,
            pageSize: 5
    	}
    },
    methods: {
        bannerSwitch (e){
            clearInterval(this.bannerTimer);

            var node = $(e.currentTarget);
            var type = node.data('type');

            this.switch(type);

            setTimeout( () => {
                this.silder();
            }, 500)
        },
        silder (){
            this.bannerTimer = setInterval(() => {
                this.switch();
            }, 4000)
        },
        switch (type) {
            var type = type || 'right';

            var lists = $('.m-index-banner .banner-lists');
            var indexs = $('.m-index-banner .banner-index');

            var nextFn;
            if (type == 'left') {
                nextFn = 'prev';
            } else {
                nextFn = 'next';
            }

            // 图片切换
            var item = lists.find('.banner-item.z-on');
                item.removeClass('z-on');

            if (item[nextFn]().length) {
                item[nextFn]().addClass('z-on');
            } else {
                if (type == 'left') {
                    lists.find('.banner-item').last().addClass('z-on');
                } else {
                    lists.find('.banner-item').eq(0).addClass('z-on');    
                }
            };

            // 下标圆点切换
            var index = indexs.find('.banner-item.z-on');
                index.removeClass('z-on');
            if (index[nextFn]().length) {
                index[nextFn]().addClass('z-on');
            } else {
                if (type == 'left') {
                    indexs.find('.banner-item').last().addClass('z-on');
                } else {
                    indexs.find('.banner-item').eq(0).addClass('z-on');   
                }
            };
        },
        // 获取文章
        getCatalogList (event){
            var replace;
            var category_id;
            if (event) {
                replace = event.currentTarget.dataset['replace'] == 1;
                category_id = event.currentTarget.dataset['id'];
            }
            if (replace) {
                this.pageIndex = 1;
                this.tagIndex = category_id;
            } else {
                this.loading = true;
            }
            var option = {
                "params": {
                    "page": this.pageIndex, //页数,默认不传查询第一页
                    "pageSize": this.pageSize //每页数量 默认10
                },
                "body": {
                    // "category_id": "3", //目录id
                }
            }
            if (category_id) {
                option.body.category_id = category_id;
            }
            getCatalogList(option).then( res => {
                if (replace) {
                    this.lists = res.list;
                } else {
                    this.lists = this.lists.concat(res.list);
                    this.pageIndex++;
                }
                this.more = res.more == 1;

                this.loading = false;
            }).catch(res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })

                this.loading = false;
            });
        },
        // 获取分类标签
        getCategoryList (){
            getCategoryList(null).then( res => {
                this.tags = this.tags.concat(res.list);
            }).catch(res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            });
        },
        // 获取banner数据
        getHomeBanner (){
            getHomeBanner().then( res => {
                this.banner_images = res.list;
                this.silder();
            }).catch(res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            });
        }
    },
    mounted (){
        var that = this;

        // 获取banner信息
        this.getHomeBanner();

        // 获取分类标签
        this.getCategoryList();

        // 获取文章
        this.getCatalogList();
    }
}
</script>

