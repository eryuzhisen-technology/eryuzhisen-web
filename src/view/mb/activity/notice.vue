<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-notice {
        width: 100%;
        height: 41.8rem;
        overflow: hidden;

        & img {
            width: 100%;
        }
    }
</style>

<!-- html代码 -->
<template>
    <div class="m-notice">
        <img :src="img" />
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            img: this.$defaultData.mbData.noticeImg
        }
    },
    computed: mapState({
        
    }),
    methods: {
        
    },
    mounted (){
        
    }
}
</script>

