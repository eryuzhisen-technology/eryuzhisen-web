<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-feedback;
    .@{module} {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
    	width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        & &-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 720px;
            padding: 60px 0 80px;
            transform: translate(-50%, -50%);
            .default_backgroud_3;
        }
        & .content-form {
            width: 330px;
            height: 230px;
            padding: 22px 30px;
            .default_mar_auto;
            margin-bottom: 20px;
            & textarea {
                .default_color_4;
                .default_font_size_3;
            }
        }
        & .content-input {
            width: 330px;
            height: 60px;
            padding: 20px 30px;
            .default_mar_auto;
            margin-bottom: 20px;
            & input {
                .default_color_4;
                .default_font_size_3;
            }
        }
        & .content-btn {
            width: 330px;
            height: 60px;
            overflow: hidden;
            .default_mar_auto;
            & .content-btn-cancel {
                width: 80px;
                height: 60px;
                line-height: 60px;
                .default_float_l;
            }
            & .content-btn-submit {
                width: 240px;
                height: 60px;
                line-height: 60px;
                .default_float_r;
            }
        }
        .c-dialog__tip {
            transform: translate(-140%, 0);
        }
    }
</style>

<!-- html代码 -->
<template>
    <div v-if="data.show" class="c-feedback">
	<div class="c-feedback-wrap">
        <div class="content-form cpm_form_textarea" :class="{'z-error': !content_reg}">
            <div v-if="!content_reg" class="c-dialog__tip">
                <div class="tip-arrow"></div>
                <div class="tip-text">{{content_reg_con}}</div>
            </div>
            <textarea placeholder="写下你的宝贵建议..."></textarea>
        </div>
        <div class="content-input cpm_form_input" :class="{'z-error': !contact_reg}">
            <div v-if="!contact_reg" class="c-dialog__tip">
                <div class="tip-arrow"></div>
                <div class="tip-text">{{contact_reg_con}}</div>
            </div>
            <input type="text" placeholder="留下你的联系方式..." />
        </div>
        <div class="content-btn">
            <div class="content-btn-cancel cpm_button_weak" @click="close">取消</div>
            <div class="content-btn-submit cpm_button_default" @click="send">发送</div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            content_reg: true,
            content_reg_con: '',
            contact_reg: true,
            contact_reg_con: ''
        }
    },
    computed: mapState({
        data: state => state.feedback
    }),
    methods: {
        close (){
            this.$store.dispatch('feedback_switch', false);
        },
        send (){
            
        }
    }
}
</script>

