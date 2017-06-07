<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    // ---------- begin 全局颜色配置 ------------
    /* 编辑器边框颜色 */
    @border-color: #ccc;
    /* 菜单颜色、上边框颜色 */
    @fore-color: #666;
    /* 菜单选中状态的颜色 */
    @selected-color: #1e88e5;
    /* input focus 时的颜色 */
    @focus-input-color: #1e88e5;
    /* 按钮颜色 */
    @button-color: #1e88e5;
    /* tab selected 状态下的颜色 */
    @selected-tab-color: #1e88e5;
    // ---------- end 全局颜色配置 ------------
    
    // ---------- begin 编辑器 ------------
    .wangEditor-container {
        position: relative;
        z-index: 1;
        width: 100%;
        .default_backgroud_3;
        .clearfix:after {
            content: '';
            display: table;
            clear: both;
        }
        .clearfix {
            *zoom: 1;
        }
        // 显示p head 高度的 tip
        .height-tip {
            position: absolute;
            width: 3px;
            background-color: #ccc;
            left: 0;
            transition: top .2s;
        }
        // 设置 img table 的 toolbar
        .txt-toolbar {
            position: absolute;
            background-color: #fff;
            padding: 3px 5px;
            border-top: 2px solid @fore-color;
            box-shadow: 1px 3px 3px #999;

            // for IE8
            border-left: 1px\9 solid\9 #ccc\9;
            border-bottom: 1px\9 solid\9 #999\9;
            border-right: 1px\9 solid\9 #999\9;

            // 小三角
            .tip-triangle {
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border: 5px solid;
                border-color: transparent transparent @fore-color transparent;
                top: -12px;
                left: 50%;
                margin-left: -5px;
            }

            a {
                color: @fore-color;
                display: inline-block;
                margin: 0 3px;
                padding: 5px;
                text-decoration: none;
                border-radius: 3px;

                &:hover {
                    background-color: #f1f1f1;
                }
            }
        }

        & .wangEditor-txt{
            width: 100%;
            padding: 40px;
            text-align: left;
            & p {
                // margin-bottom: 30px;
                line-height: 1.75em;
                word-wrap: break-word;
                word-break: break-all;
                text-align: justify;
                .default_color_10;
                .default_font_size_3;
            }
            & blockquote {
                display: block; 
                border-left: 8px solid #d0e5f2;
                padding: 5px 10px;
                margin: 10px 0; 
                line-height: 1.4; 
                font-size: 100%;
                background-color: #f1f1f1;
            }
            & img {
                width: auto;
                max-width: 100%;
                // margin-bottom: 10px;
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
    .wangEditor-menu-container {
        width: 100%;
        height: 50px;
        .default_backgroud_2;
        // 菜单组
        .menu-group {
            float: left;
        }
        // 单个菜单容器
        .menu-item {
            float: left;
            position: relative;
            text-align: center;
            width: 40px;
            height: 50px;
            line-height: 50px;
            &:hover {
                .default_backgroud_14;
            }
            // 菜单
            & a {
                display: block;
                width: 100%;
                height: 100%;
                .default_font_size_2;
                .default_color_2;
                text-decoration: none;
                &:hover {
                    .default_color_1;
                }
                & i {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            // 菜单选中状态
            &.selected {
                color: @selected-color;
            }
            // 激活状态
            &.active {
                background-color: #f1f1f1;
            }
            // 禁用状态
            &.disable {
                opacity: 0.5;
                filter: Alpha(opacity=50);
            }
            & .wangeditor-menu-img-indent-left {
                .skin_icon_edit-3;
                &:hover {
                    .skin_icon_edit-3_on;
                }
            }
            & .wangeditor-menu-img-bold {
                .skin_icon_edit-2;
                &:hover {
                    .skin_icon_edit-2_on;
                }
            }
            & .wangeditor-menu-img-italic {
                .skin_icon_edit-4;
                &:hover {
                    .skin_icon_edit-4_on;
                }
            }
            & .wangeditor-menu-img-strikethrough {
                .skin_icon_edit-5;
                &:hover {
                    .skin_icon_edit-5_on;
                }
            }
            & .wangeditor-menu-img-picture {
                .skin_icon_edit-6;
                &:hover {
                    .skin_icon_edit-6_on;
                }
            }
            &.menu-item-scan {
                .skin_icon_edit-7;
                &:hover {
                    .skin_icon_edit-7_on;
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
        }
        // tip提示
        .menu-tip {
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
    // ---------- end 编辑器 ------------

    .c-edit {
        // min-height: 700px;
        & .c-edit-content-wrap {
            overflow-y: auto;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-edit">
    <div class="c-edit-content" id="edit" @click="click"></div>
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
            this.editor.command(null, 'insertHtml', imgHtml);
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
            var value = this.editor.$txt.html();
            this.$emit('update', value);
        },
        // 发布内容
        publish (){
            var value = this.editor.$txt.html();
            this.$emit('publish', value);
        },
        // 预览内容
        scan (){
            var value = this.editor.$txt.html();
            this.$emit('scan', value);
        },
        change (){
            var value = this.editor.$txt.html();
            this.$emit('edit', value);
        },
        autoHeight (){
            var _height = $(window).height() - 120;
            $('.c-edit-content').css('min-height', _height);
            $('.c-edit-content-wrap').height(_height);
        }
    },
    watch: {
        content (){
            this.editor.$txt.html(this.content);
        }
    },
    mounted (){
        this.editor = new this.$edit('edit');
        // 监听内容变化
        this.editor.onchange = this.change;

        // 创建
        this.editor.create();

        // 初始化编辑器的内容
        this.editor.$txt.html(this.content);

        // 添加额外的菜单
        var save = $('<div class="menu-item menu-item-save clearfix j-save-btn"><a href="javascript:void(0);">保存</a></div>');
        var scan = $('<div class="menu-item menu-item-scan clearfix j-scan-btn"><a href="javascript:void(0);"></a></div>');
        var publish = $('<div class="menu-item clearfix"><a href="javascript:void(0);">发布</a></div>');
        var group = $('<div class="menu-group"></div>').css('float', 'right');
        group.append(save).append(scan).append(publish);
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

        // 设置iscroll
        $('.c-edit-content').wrap($('<div id="c-edit-content-wrap" class="c-edit-content-wrap"></div>'));

        // 设置高度
        $('.c-edit-content').css('height', 'auto');
        this.autoHeight();
        $(window).on('resize', res => {
            this.autoHeight();
        })
    }
}
</script>

