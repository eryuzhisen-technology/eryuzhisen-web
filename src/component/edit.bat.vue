<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@import {reference} '../lib/edit/css/edit.less';
    .c-edit {
        width: 100%;
        & .edit-tool {
            position: relative;
            width: 100%;
            height: 50px;
            padding-left: 10px;
            .default_backgroud_7;
            & .edit-tool-item {
                position: relative;
                float: left;
                width: 50px;
                height: 58px;
                text-align: center;
                .default_pointer;
                & a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
                & em {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                }
                &:hover {
                    .default_backgroud_7;
                    & .edit-tool-tip {
                        display: block;
                    }
                }
            }
            & .edit-tool-suo {
                .skin_icon_edit_suo;
                &:hover em {
                    .skin_icon_edit_suo_on;
                }
            }
            & .edit-tool-bold {
                .skin_icon_edit_bold;
                &:hover em {
                    .skin_icon_edit_bold_on;
                }
            }
            & .edit-tool-xie {
                .skin_icon_edit_xie;
                &:hover em {
                    .skin_icon_edit_xie_on;
                }
            }
            & .edit-tool-delete {
                .skin_icon_edit_delete;
                &:hover em {
                    .skin_icon_edit_delete_on;
                }
            }
            & .edit-tool-img {
                .skin_icon_edit_img;
                &:hover em {
                    .skin_icon_edit_img_on;
                }
            }
            & .edit-tool-save {
                .skin_icon_edit_save;
                &:hover em {
                    .skin_icon_edit_save_on;
                }
            }
            & .edit-tool-scan {
                .skin_icon_edit_scan;
                &:hover em {
                    .skin_icon_edit_scan_on;
                }
            }
            & .edit-tool-save,
            & .edit-tool-scan,
            & .edit-tool-publish {
                float: right;
            }
            & .edit-tool-publish {
                width: 70px;
                height: 58px;
                line-height: 58px;
                text-align: center;
                .default_font_size_3;
                .default_color_2;
                .default_pointer;
                & .edit-tool-tip p {
                    width: 118px;
                }
            }
            & .edit-tool-tip {
                display: none;
                position: absolute;
                top: -36px;
                left: 50%;
                height: 36px;
                transform: translate(-50%, 0);
                & p {
                    width: 48px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    .default_color_2;
                    .default_font_size_2;
                    background-color: rgba(0, 0, 0, 0.8);
                }
                & span {
                    position: absolute;
                    top: 25px;
                    left: 50%;
                    margin-left: -5px;
                    display: inline-block;
                    border: 4px solid;
                    border-color: transparent rgba(0,0,0,0.8) rgba(0,0,0,0.8) transparent;
                    transform: rotate(45deg);
                }
            }
        }
        & .edit-content {
            height: 460px;
            overflow-y: auto;
            padding: 40px 60px;
            .default_font_size_3;
            .default_color_2;
            .default_backgroud_2;
            & p,
            & div,
            & blockquote {
                text-align: left;
                line-height: 1.75rem;
                min-height: 16px;
                margin-bottom: 10px;
                .default_font_size_3;
                .default_color_2;
            }
            & img {
                max-width: 100%;
                margin-bottom: 10px;
                .default_center;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-edit">
    <div class="edit-tool">
        <div @click="execCommand" class="edit-tool-item edit-tool-suo" data-role="indent">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>缩进</p>
            </div>
        </div>
        <div @click="execCommand" class="edit-tool-item edit-tool-bold" data-role="Bold">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>粗体</p>
            </div>
        </div>
        <div @click="execCommand" class="edit-tool-item edit-tool-xie" data-role="Italic">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>斜体</p>
            </div>
        </div>
        <div @click="execCommand" class="edit-tool-item edit-tool-delete" data-role="strikeThrough">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>删除线</p>
            </div>
        </div>
        <div @click="execCommand" class="edit-tool-item edit-tool-img" ref="container" data-role="insertImage">
            <a id="edit_upload_image_select" href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>图片</p>
            </div>
            <UploadImg 
                type="2" 
                select="edit_upload_image_select"
                container="edit_container"
                @uploadImg_uploaded="uploaded" 
                @uploadImg_error="error"
            />
        </div>
        <div class="edit-tool-item edit-tool-publish" @click="publish">
            发布
            <div class="edit-tool-tip">
                <span></span>
                <p>发布后不可更改</p>
            </div>
        </div>
        <div class="edit-tool-item edit-tool-scan">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>预览</p>
            </div>
        </div>
        <div class="edit-tool-item edit-tool-save" @click="update">
            <a href="javascript:void(0);"><em></em></a>
            <div class="edit-tool-tip">
                <span></span>
                <p>保存</p>
            </div>
        </div>
    </div>
    <div ref="edit" @keyup="upadte" class="edit-content" contenteditable v-html="value" data-placeholder="输入内容">
    </div>
</div>
</template>

<script>
export default {
    name: 'edit',
    props: ['value'],
    methods: {
        upadte (){
            this.$emit('input', this.$refs.edit.innerHTML);
        },
        command (commandName, commandValue){
            document.execCommand(commandName, false, commandValue); 
            this.upadte();
        },
        execCommand (event){
            var type = event.currentTarget.dataset['role'];
            if (type == 'insertImage') {
                $(this.$refs.input).click();
            } else {
                this.command(type, null);
            }
        },
        uploaded (filename){
            var value = '<img style="max-width:100%;" src="' + filename + '"/>';
            this.command('insertHtml', value);
        },
        error (err){
            if (err.code == -600) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小'
                    }
                })
            } else if (err.code == -601) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型'
                    }
                })
            } else if (err.code == -602) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '这个文件已经上传过一遍了'
                    }
                })
            } else {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: err.response
                    }
                })
            }
        },
        // 保存内容
        update (){
            this.$emit('update');
        },
        // 发布内容
        publish (){
            this.$emit('publish');
        }
    },
    mounted (){
        
    },
    watch: {
        value (newVal, oldVal){
            if (!newVal) {
                this.$emit('input', '<p><br /></p>');
            }
        }
    }
}
</script>

