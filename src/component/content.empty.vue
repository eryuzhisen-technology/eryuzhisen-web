<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-empty;
.@{module} {
    padding-top: 60px;
    padding-bottom: 120px;
    .default_center;
    .default_font_size_4;
    .default_color_4;
    & .c-empty-img {
        width: 100px;
        height: 120px;
        .default_mar_auto;
        margin-bottom: 20px;
        & img {
            width: 100%;
        }
    }
    & .c-emptytext {
        opacity: .1;
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-empty">
    <div class="c-empty-img"><img src="../common/images/icon/empty.png" /></div>
    <div class="c-empty-text">没有相关结果</div>
</div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

