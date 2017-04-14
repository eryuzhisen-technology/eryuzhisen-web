<style lang="less">
@import (reference) '../common/css/common';
@module: c-menu-left;
.@{module} {
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    & .item {
        position: relative;
        width: 100%;
        height: 60px;
    }
    & .item__title {
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        .default_center;
        .default_font_size_3;
        .default_color_3;
        .default_pointer;
        text-decoration: none;
        &:hover {
            .default_color_1;
        }
    }
    & .item__title.z-on {
        .default_backgroud_7;
        .default_color_1;
        .default_font_family_bolder;
    }
    &.z-left .item__title {
        padding-left: 40px;
        text-align: left;
    }
    &.z-tip .item__tip {
        display: block;
    }
}
</style>
<template>
    <div class="c-menu-left">
        <div class="item" v-for="(item, index) in data">
            <a v-if="item.url" class="item__title" :class="{'z-on': index == type}" :data-type="index" :href="item.url">{{item.title}}{{item.number ? '·' + item.number : ''}}</a>
            <span v-else class="item__title" :class="{'z-on': index == type}" :data-type="index" href="#none">{{item.title}}{{item.number ? '·' + item.number : ''}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: ['data', 'type'],
}
</script>

