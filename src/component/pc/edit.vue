<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
    .c-edit {
        // min-height: 700px;
        & .c-edit-content-wrap {
            overflow-y: auto;
        }
        .w-e-toolbar,
        .w-e-text-container,
        .w-e-menu-panel {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .w-e-toolbar *,
        .w-e-text-container *,
        .w-e-menu-panel * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .w-e-clear-fix:after {
            content: "";
            display: table;
            clear: both;
        }
    }
    .w-e-text-container {
        position: relative;
        z-index: 1;
        width: 100%;
        .default_backgroud_3;
        & .w-e-text {
            width: 100%;
            padding: 40px;
            line-height: 1.75rem;
            .default_color_10;
            & b,
            & i {
                .default_color_10;
                .default_font_size_3;
            }
            & p {
                min-height: 1.75rem;
                line-height: 1.75em;
                word-wrap: break-word;
                word-break: break-all;
                text-align: justify;
                .default_color_10;
                .default_font_size_3;
            }
            & img {
                width: auto;
                max-width: 100%;
            }
        }
        & textarea {
            width: 100%;
            padding: 30px;
            margin-top: 0!important;
            height: auto!important;
            line-height: 1.5em;
            .default_color_2;
            .default_font_size_3;
        }
    }
    .w-e-toolbar {
        position: relative;
        width: 100%;
        height: 50px;
        .default_backgroud_2;
        & .w-e-menu {
            float: left;
            position: relative;
            text-align: center;
            width: 40px;
            height: 50px;
            .default_pointer;

            &.w-e-active,
            &:hover {
                .default_backgroud_14;
            }
            // 菜单
            &>span {
                display: block;
                width: 100%;
                height: 100%;
                line-height: 50px;
                .default_font_size_2;
                .default_color_2;
            }
            &>i {
                display: block;
                width: 100%;
                height: 100%;
                .default_font_size_2;
                .default_color_2;
                &:hover {
                    .default_color_1;
                }
                &.w-e-icon-Indent {
                    .skin_icon_edit-3;
                    &:hover {
                        .skin_icon_edit-3_on;
                    }
                }
                &.w-e-icon-bold {
                    .skin_icon_edit-2;
                    &:hover {
                        .skin_icon_edit-2_on;
                    }
                }
                &.w-e-icon-justifyCenter {
                    .skin_article_center;
                    &:hover {
                        .skin_article_center_on;
                    }
                }
                &.w-e-icon-italic {
                    .skin_icon_edit-4;
                    &:hover {
                        .skin_icon_edit-4_on;
                    }
                }
                &.w-e-icon-strikethrough {
                    .skin_icon_edit-5;
                    &:hover {
                        .skin_icon_edit-5_on;
                    }
                }
                &.w-e-icon-image {
                    .skin_icon_edit-6;
                    &:hover {
                        .skin_icon_edit-6_on;
                    }
                }
                &.w-e-icon-scan {
                    .skin_icon_edit-7;
                    &:hover {
                        .skin_icon_edit-7_on;
                    }
                }
            }
            &.w-e-active>i {
                &.w-e-icon-Indent {
                    .skin_icon_edit-3_on;
                }
                &.w-e-icon-bold {
                    .skin_icon_edit-2_on;
                }
                &.w-e-icon-justifyCenter {
                    .skin_article_center_on;
                }
                &.w-e-icon-italic {
                    .skin_icon_edit-4_on;
                }
                &.w-e-icon-strikethrough {
                    .skin_icon_edit-5_on;
                }
                &.w-e-icon-image {
                    .skin_icon_edit-6_on;
                }
            }
            &.j-save-btn-update {
                width: 100px;
                &:hover {
                    .default_backgroud_7;
                    & a {
                        cursor: default;
                        .default_color_2;
                    }
                }
            }
            &:hover .menu-tip {
                display: block!important;
            }
            &.w-e-menu-strikeThrough .menu-tip {
                width: 50px;
                margin-left: -25px;
            }
            &.j-publish-btn {
                & .menu-tip {
                    left: inherit;
                    right: 0;
                    transform: none;
                    text-align: right;
                }
                & .tip-triangle {
                    right: 15px;
                    left: inherit;
                    transform: translate(0%, 0px) rotate(45deg);
                }
            }
        }
        & .w-e-menu-save,
        & .w-e-menu-scan,
        & .w-e-menu-pubilsh {
            float: right;
        }
        // tip提示
        & .menu-tip {
            display: none;
            box-sizing: content-box;

            position: absolute;
            top: -36px;
            left: 50%;
            height: 36px;

            width: 48px;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            margin-left: 0!important;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.8);
            .default_color_2;
            .default_font_size_2;
            transform: translate(-50%, 0);

            & .tip-triangle {
                position: absolute;
                top: 25px;
                left: 50%;
                display: inline-block;
                border: 4px solid;
                border-color: transparent rgba(0,0,0,0.8) rgba(0,0,0,0.8) transparent;
                transform: translate(-50%, 0) rotate(45deg);
            }
        }
        & .menu-tip-40 {
            width: 40px;
            margin-left: -20px;
        }
        & .menu-tip-50 {
            width: 50px;
            margin-left: -25px;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-edit">
    <div class="c-edit-content" id="edit_wangeditor" @click="click"></div>
    <keep-alive v-if="edit_init">
    <UploadImg 
        type="2" 
        select="edit_upload_image_select"
        container="edit_container"
        @uploadImg_uploaded="uploaded" 
        @uploadImg_error="error"
    />
    </keep-alive>
</div>
</template>

<script>
export default {
    name: 'edit',
    data (){
        return {
            edit_init: false,
            editor: null
        }
    },
    props: ['content'],
    methods: {
        click (){
            this.$emit('edit_click');
        },
        uploaded (filename){
            var imgHtml = '<p><img style="max-width:100%;" src="' + filename + '"/></p>';
            this.editor.cmd.do('insertHtml', imgHtml);
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
            var value = this.getContent();       
            this.$emit('update', value);
        },
        // 发布内容
        publish (){
            var value = this.getContent();
            this.$emit('publish', value);
        },
        // 预览内容
        scan (){
            var value = this.getContent();
            this.$emit('scan', value);
        },
        change (){
            var value = this.getContent();
            this.$emit('edit', value);
        },
        autoHeight (){
            var _height = $(window).height() - 120;
            $('.c-edit-content').css('min-height', _height);
            $('.c-edit-content-wrap').height(_height);
        },
        getContent (content){
            var _value = content || this.editor.txt.html();            
            if (content) {
                this.editor.txt.html(_value);
            }
            return _value;
        }
    },
    watch: {
        content (){
            this.editor.txt.html(this.content);
        }
    },
    mounted (){
        // 监听内容变化
        // 创建
        // 初始化编辑器的内容
        this.editor = new this.$edit('#edit_wangeditor', null, {
            xss: this.$filterXSS,
            xssRule: this.$defaultData.xssRule
        });
        this.editor.customConfig.onchange = this.change;
        this.editor.customConfig.zIndex = 1;
        // 自定义菜单配置
        this.editor.customConfig.menus = [
            'indent',
            'justifyCenter',
            'bold',
            'italic',
            // 'strikeThrough',
            'image'
        ];
        this.editor.create();
        this.getContent(this.content);

        // 添加额外的菜单
        var publish = $('<div class="w-e-menu w-e-menu-pubilsh j-btn j-publish-btn"><span>发布</span><div class="menu-tip" style="width: 100px; margin-left: 13.5px;"><i class="tip-triangle"></i>发布后不能修改</div></div>');
        var scan = $('<div class="w-e-menu w-e-menu-scan j-btn j-scan-btn"><i class="w-e-icon-scan"></i><div class="menu-tip" style="width: 41px; margin-left: 13.5px;"><i class="tip-triangle"></i>预览</div></div>');
        var save = $('<div class="w-e-menu w-e-menu-save j-btn j-save-btn"><span>保存</span><div class="menu-tip" style="width: 41px; margin-left: 13.5px;"><i class="tip-triangle"></i>保存</div></div>');
        var group = $('.w-e-toolbar');
        group.append(publish).append(scan).append(save);
        $('.wangEditor-menu-container').append(group);

        // 菜单事件
        save.on('click', res => {
            this.update();
        })
        publish.on('click', res => {
            this.publish();
        })
        scan.on('click', res => {
            this.scan();
        })

        // 初始化编辑器成功
        this.edit_init = true;
        this.$emit('edit_init', this.editor);

        $('.w-e-text-container').addClass('c-edit-content-wrap');
        // 设置高度
        $('.c-edit-content').css('height', 'auto');
        this.autoHeight();
        $(window).on('resize', res => {
            this.autoHeight();
        })
    }
}
</script>

