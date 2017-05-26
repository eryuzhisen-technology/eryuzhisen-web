<style lang="less">
@import (reference) '../common/css/common';
    @module: c-menu-left;
    .@{module} {
        position: absolute;
        top: 0;
        left: 0;
        width: 260px;
        & .item {
            position: relative;
            width: 100%;
            height: 50px;
            overflow: hidden;
            & a {
                display: block;
                width: 100%;
                height: 100%;
                padding-left: 20px;
            }
            & .item__icon {
                float: left;
                display: block;
                width: 20px;
                height: 50px;
                margin-right: 12px;
            }
            & .item__title {
                float: left;
                display: block;
                height: 50px;
                line-height: 50px;
                .default_font_size_2;
                .default_color_1;
                .default_pointer;
                text-decoration: none;
                &:hover {
                    .default_color_1;
                }
            }
            &.z-on {
                .default_backgroud_6;
            }
            &:hover .item__title,
            &.z-on .item__title {
                .default_color_1;
            }
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
        <div 
            class="item" 
            v-for="item in data"
            :class="{'z-on': item.isActive}"
        ><a :href="item.url || 'javascript:void(0);'">
            <span class="item__icon"></span>
            <span class="item__title">{{item.title}}{{item.number ? '·' + item.number : ''}}</span>
        </a></div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

