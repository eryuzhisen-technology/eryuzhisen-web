<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-empty;
.@{module} {
    width: 720px;
    height: 200px;
    line-height: 200px;
    .default_width_720;
    .default_mar_auto;
    .default_center;
    .default_font_bolder;
    .default_font_size_7;
    .default_color_4;
    .default_backgroud_3;
    & .c-empty-text {
        height: 200px;
        line-height: 200px;
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-empty">
    <div class="c-empty-text">没有相关结果</div>
</div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

