<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
    .c-qrcode {
        width: 140px;
        height: 140px;
        padding: 20px;
        .default_border_shadow_4;
        .default_backgroud_3;
    }
    .c-qrcode-wrap {
        width: 100%;
        height: 100%;
        padding: 5px;
        background-color: #fff;
    }
</style>

<!-- html代码 -->
<template>
    <div class="c-qrcode">
        <div class="c-qrcode-wrap" ref="qrcode"></div>
    </div>
</template>

<script>
export default {
    name: 'qrcode',
    data () {
    	return {
    		
    	}
    },
    props: ['data'],
    methods: {
        
    },
    mounted (){
        var data = this.data;
        if (!data.url) {
            return false;
        }

        var qrcode = new this.$QRCode(this.$refs.qrcode, {
            text: data.url,
            width: data.width || 150,
            height: data.height || 150
        });
        this.$emit('init', qrcode);
    }
}
</script>

