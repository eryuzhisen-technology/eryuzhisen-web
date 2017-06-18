<style lang="less">
@import (reference) '../../common/css/common';
    @module: c-menu-left;
    .@{module} {
        padding-top: 60px;
        width: 100%;
        & a {
            text-decoration: none;
        }
    }
</style>
<template>
    <div class="c-menu-left">
        <div class="item cpm-top-menu" :style="{'width': Object.keys(data).length*90 + 'px'}">
            <a 
                class="menu-item" 
                v-for="item in data"
                :class="{'z-active': item.isActive}" 
                :href="item.url || 'javascript:void(0);'"
            >
                {{item.title}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

