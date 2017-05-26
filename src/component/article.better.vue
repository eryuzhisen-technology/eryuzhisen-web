<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-artice-better;

.@{module} {
    & &-wrap {
        width: 100%;
        height: 100%;
        margin-bottom: 30px;
    }
    & .@{module}-item {
        width: 100%;
        height: 100%;
        padding: 20px;
        .default_backgroud_2;
        .default_border-b-14; 
    }
    & .@{module}_content {
        & .content__title {
            margin-bottom: 10px;
            .default_font_size_7;
            .default_color_1;
            .default_font_family_bolder;
        }
        & .content__time {
            margin-bottom: 15px;
            .default_font_size_1;
            .default_color_3;
        }
        & .content__img {
            width: 640px;
            height: 320px;
            overflow: hidden;
            margin-bottom: 20px;
            & img {
                width: 100%;
            }
        }
        & .content__text {
            width: 100%;
            line-height: 1.5rem;
            margin-bottom: 15px;
            .default_font_size_2;
            .default_color_2;
        }
    }
    & .@{module}_bottom {
        & .bottom__link {
            .default_font_size_2;
            .default_color_5;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-artice-better">
<div class="c-artice-better-wrap">
    <div class="c-artice-better-item" v-for="item in lists">
        <div class="c-artice-better_content">
            <div class="content__title">{{item.title}}</div>
            <div class="content__time">{{item.time}}</div>
            <div class="content__img"><img :src="item.img" /></div>
            <div class="content__text">{{item.text}}</div>
        </div>
        <div class="c-artice-better_bottom">
            <a class="bottom__link" href="#none">阅读全文</a>
        </div>
    </div>
    <Empty v-if="count <= 0" />
</div>
<Page 
    :count="count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>
</div>
</template>

<script>
import img1 from '../common/images/discover/img-1.png'
export default {
    data (){
        return {
            count: 4,
            lists: [
                {
                    name: '奇昊大本营',
                    time: '2小时',
                    img: img1,
                    title: '路边传来了歌声',
                    text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...'
                },
                {
                    name: '奇昊大本营',
                    time: '2小时',
                    img: img1,
                    title: '路边传来了歌声',
                    text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...',
                    tags: ['漫画'],
                    fabulous: 123,
                    comment: 8134
                },
                {
                    name: '奇昊大本营',
                    time: '2小时',
                    img: img1,
                    title: '路边传来了歌声',
                    text: '《姑获鸟之夏》是日本作家京极夏彦的处女作，也是“京极堂”系列推理小说的第一部。在这部作品中，人称“京极堂”的主人公中禅寺秋彦运用广博的民俗学知识、复杂的...',
                    tags: ['文字'],
                    fabulous: 123,
                    comment: 8134
                }
            ],

            pageIndex: 1,
            pageSize: 5,
            messageType: 1
        }
    },
    methods: {
        pageSwitch (pageIndex){
            if (this.pageSwitch == pageIndex) {
                return false;
            }
            this.pageSwitch = pageIndex;
        },
        getMessageList (){
            this.$store.dispatch('message_getMessageList', {
                "page": this.pageIndex,
                "pageSize": this.pageSize,
                "pagination": 1,
                "messageType": this.messageType
            }).then( info => {
                this.$store.dispatch('bubble_success', info);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            });
        }
    },
    mounted (){
        // 获取精选列表
        this.getMessageList();
    }
}
</script>

