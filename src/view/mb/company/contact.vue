<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
@import (less) './company.less';
    .m-company {
        height: 100%;
    }
    .m-company .bd {
        padding-top: 0;
        height: 100%;
        .default_flex__v_middle;
    }
</style>

<!-- html代码 -->
<template>
    <div class="m-company">
        <div class="bd">
            <div class="title">
                QQ交流群
            </div>
            <div class="text">
                432769756
            </div>
            <div class="title">
                商务合作
            </div>
            <div class="text">
                business@eryuzhisen.com
            </div>
            <div class="title">
                客服联系
            </div>
            <div class="text">
                server@eryuzhisen.com
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            
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

