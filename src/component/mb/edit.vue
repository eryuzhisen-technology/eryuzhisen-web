<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
    .c-edit-content {
        width: 100%;
        height: 100%;
    }
    .w-e-text-container {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        & .w-e-text {
            width: 100%;
            height: 100%;
            // overflow-y: auto;
            // -webkit-overflow-scrolling: touch;
            .default_font_size_9;
            & b,
            & i,
            & p {
                line-height: 175%;
                word-wrap: break-word;
                word-break: break-all;
                text-align: justify;
                .default_color_2;
                .default_font_size_8;
            }
            & img {
                width: auto;
                max-width: 100%;
            }
        }
    }
    .w-e-toolbar {
        width: 100%;
        z-index: 2;
        height: 1rem;
        padding: 0 .3rem;
        .default_backgroud_7;
        & .w-e-menu {
            float: left;
            width: .4rem;
            height: 100%;
            margin-right: .4rem;
            .default_flex_center;
            &>i {
                display: block;
                width: .4rem;
                height: .4rem;
                &.w-e-icon-Indent {
                    .skin_edit_indent;
                }
                &.w-e-icon-bold {
                    .skin_edit_bold;
                }
                &.w-e-icon-justifyCenter {
                    .skin_edit_center;
                }
                &.w-e-icon-italic {
                    .skin_edit_italic;
                }
                &.w-e-icon-publish {
                    .skin_edit_publish;
                }
                &.w-e-icon-save {
                    .skin_edit_save;
                }
                &.w-e-icon-scan {
                    .skin_edit_scan;
                }
            }
            &.w-e-active>i {
                &.w-e-icon-Indent {
                    .skin_edit_indent_on;
                }
                &.w-e-icon-bold {
                    .skin_edit_bold_on;
                }
                &.w-e-icon-justifyCenter {
                    .skin_edit_center_on;
                }
                &.w-e-icon-italic {
                    .skin_edit_italic_on;
                }
                &.w-e-icon-publish {
                    .skin_edit_publish_on;
                }
                &.w-e-icon-save {
                    .skin_edit_save_on;
                }
                &.w-e-icon-scan {
                    .skin_edit_scan_on;
                }
            }
        }
        & .w-e-menu-publish {
            margin-right: 0;
        }
        & .w-e-menu-save,
        & .w-e-menu-publish,
        & .w-e-menu-scan {
            float: right;
        }
        // tip提示
        & .menu-tip {
            display: none;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-edit">
    <div class="c-edit-content" id="edit_wangeditor" @click.one="click"></div>
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
        getContent (content){
            var _value = content || this.editor.txt.html();            
            if (content) {
                this.editor.txt.html(_value);
            }
            return _value;
        },
        click () {
            this.$emit('edit_focus');
        },
        autoHeight (){
            var _height = $(window).height();
            var _header = $('.c-header').height();
            var _menu = $('.article-hd').height();
            var _tit = $('.article-bd .edit-title').height();
            $('.edit-content').css('height', _height - _header - _menu - _tit);
        },
    },
    watch: {
        content (){
            this.editor.txt.html(this.content);
        }
    },
    mounted (){
        var that = this;

        // 监听内容变化
        // 创建
        // 初始化编辑器的内容
        this.editor = new this.$edit('.m-article-menus', '#edit_wangeditor', {
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
            'italic'
        ];
        this.editor.create();
        this.getContent(this.content);

        // 添加额外的菜单
        var publish = $('<div class="w-e-menu w-e-menu-publish j-btn j-publish-btn"><i class="w-e-icon-publish"></i><div class="menu-tip" style="width: 100px; margin-left: 13.5px;"><i class="tip-triangle"></i>发布后不能修改</div></div>');
        var save = $('<div class="w-e-menu w-e-menu-save j-btn j-save-btn"><i class="w-e-icon-save"></i><div class="menu-tip" style="width: 41px; margin-left: 13.5px;"><i class="tip-triangle"></i>保存</div></div>');
        var scan = $('<div class="w-e-menu w-e-menu-scan j-btn j-scan-btn"><i class="w-e-icon-scan"></i><div class="menu-tip" style="width: 41px; margin-left: 13.5px;"><i class="tip-triangle"></i>预览</div></div>');
        var group = $('.w-e-toolbar');
        group.append(publish).append(save).append(scan);
        $('.wangEditor-menu-container').append(group);

        // 菜单事件
        save.on('click', res => {
            this.update();
        })
        scan.on('click', res => {
            this.scan();
        })
        publish.on('click', res => {
            this.publish();
        })

        setTimeout( res => {
            this.edit_init = true;

            // 初始化编辑器成功
            this.$emit('edit_init', this.editor);
            this.editor.$textElem.on('click, focus', function(){
                that.$emit('edit_focus');    
            })
            this.editor.$textElem.on('blur', function(){
                that.$emit('edit_blur');    
            })
        }, 10)
        // 设置高度
        // this.autoHeight();
    }
}
</script>

