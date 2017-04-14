<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-author-list;

.@{module} {
    width: 100%;
    height: 100px;
    padding: 0 60px;
    & &-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .default_border-b-6;    
    }
    & .list-left {
        float: left;
        width: 200px;
        height: 40px;
        overflow: hidden;
        margin-top: 30px;
        & .img {
            float: left;
            width: 40px;
            height: 40px;
            margin-right: 16px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            .default_backgroud_4;
            .default_border-r-50;
            overflow: hidden;
        }
        & .name {
            float: left;
            padding-top: 10px;
            .default_font_size_4;
            .default_color_2;
        }
    }
    & .list-right {
        float: right;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin-right: 60px;
        margin-top: 30px;
        & .list-right-item {
            width: 100px;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-author-list">
<div class="c-author-list-wrap">
    <div class="list-left">
        <div class="img" :style="{backgroundImage: 'url(' + data.avatar_url + ')'}"></div>
        <div class="name">{{data.nick_name}}</div>
    </div>
    <div class="list-right" :data-uid="data.uid">
        <div v-if="data.isBack" class="list-right-item cpm_button_strong" @click="delBlack">取消拉黑</div>
        <div v-else-if="data.isMark" class="list-right-item cpm_button_weak">取消关注</div>
        <div v-else-if="!data.isMark && !data.getMark" class="list-right-item cpm_button_default">添加关注</div>
        <div v-else="!data.isMark && data.getMark" class="list-right-item cpm_button_warn">相互关注</div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        delBlack (e){
            this.$emit('delBlack', e.currentTarget.parentNode.dataset['uid']);
        }
    }
}
</script>

