<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
    .app-body {
        padding-top: 0;
        height: 100%;
    }
    & .m-article-menus {
        position: fixed;
        top: 1rem;
        left: 0;
        z-index: 200;
    }
    .m-article-edit {
        z-index: 1;
        padding: 2rem .3rem 0;
        height: 100%;
        
        & .article-bd {
            min-height: 100%;
            .default_backgroud_3;

            & .edit-title {
                width: 100%;
                line-height: 150%;
                padding: .5rem .4rem;
                .default_color_1;
                .default_font_size_11;
                .default_flex_left;
                .default_border-b-4;
                & * {
                    line-height: 150%;
                    .default_color_1;
                    .default_font_size_11;
                }
            }
            & .edit-content {
                width: 100%;
                padding: .4rem;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-article-menus" ref='menu'></div>
    <div class="m-article-edit">
        <div class="article-bd">
            <div class="edit-title" contenteditable="true" ref="title">{{title}}</div>
            <Edit class="edit-content"
                :content="contentEdit"
                @update='update'
                @publish='publish'
                @edit="edit"
                @scan="scan"
                @edit_init="edit_init"
                @edit_focus="edit_focus"
                @edit_blur="edit_blur"
            />
            </Edit>
        </div>
    </div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            chapter_id: -1,
            catalog_id: -1,

            isEdit: false,

            title: '',
            desc: '',
            content: '',
            contentEdit: ''
        }
    },
    computed: mapState({
        user: state => state.user.info,
        chapter: state => state.opus.chapter.info
    }),
    methods: {
        edit_init (editor){
            this.editor = editor;
        },
        edit_focus (){
            this.isEdit = true;
            // javascript
            // 在输入框获取焦点, 键盘弹起后, 真的是一行代码
            // $(this.$refs.menu).css('bottom', document.body.scrollHeight - window.innerHeight);
        },
        edit_blur (){
            this.isEdit = false;
            // $(this.$refs.menu).css('bottom', 0);
        },
        changeTitle (){
            var title = $(this.$refs.title).text();
            this.title = title;
        },  
        // 校验内容
        check (checkContent){
            var vaid = true;
            var msg = '';
            
            this.changeTitle();

            // 名字
            if (!$.trim(this.title)) {
                vaid = false;
                msg = '填写章节标题';
            } else if ($.trim(this.title).gblen() > 60) {
                vaid = false;
                msg = '超出30中文字数';
            }

            // 内容
            if (checkContent) {
                if ($.trim(this.content) == '<p><br></p>') {
                    vaid = false;
                    msg = '填写章节内容';
                }
            }

            if (!vaid) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        msg: msg
                    }
                })
                return;
            }

            return true;
        },

        // 预览内容
        scan (value){
            this.changeTitle();

            var chapaterEdit_edit = this.$version.chapaterEdit_edit;
            var key = chapaterEdit_edit.key + '_' + this.catalog_id + '_' + this.chapter_id;
            var chapter = this.$cache.getStore(chapaterEdit_edit.key , chapaterEdit_edit.version) || {};
                chapter.chapter_title = this.title;
                chapter.chapter_desc = this.desc;
                chapter.chapter_content = this.content;
            this.$cache.setStore(key, chapter, chapaterEdit_edit.version, chapaterEdit_edit.time);

            var href = './article.read.html?isScan=1&chapter_id='+this.chapter_id+'&catalog_id='+this.catalog_id;
            window.open(href);  
        },

        // 保存内容
        update (value, auto){
            if (this.content == value && auto) {
                return false;
            }
            this.content = value;
            
            if (!this.check()) {
                return
            }
            if (this.chapter_id && this.chapter_id != -1) {
                this.updateChapter(1, auto);
            } else {
                this.addChapter(1, auto);
            }
        },

        // 发布内容
        publish (value){
            var that = this;
            if (!this.check(true)) {
                return
            }
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定发布吗？',
                    content: '章节发布后不可修改编辑，只能删除重新发布，请谨慎检查',
                    btnComfire: '确定'
                },
                methods: {
                    comfire: function (){
                        that.updateChapter(0);
                    }
                }
            })
        },

        // 编辑更新
        edit (value){
            clearTimeout(this.timer);

            // 2s自动保存
            var chapaterEdit = this.$version.chapaterEdit;
            this.timer = setTimeout( () => {
                this.update(value, true);
            }, chapaterEdit.time)
        },

        // 更新内容
        updateChapter (status, auto){
            var that = this;

            if (status == 1) {
                if (auto) {
                    this.isUpdata = 4;
                } else {
                    this.isUpdata = 1;
                }
            }
            this.$store.dispatch('opus_updateChapter', {
                "chapter_id": this.chapter_id, //文章id
                "chapter_title": this.title, //章节标题
                "chapter_desc": this.desc, //简介
                "chapter_content": this.content, //内容　***base64 编码***
                "chapter_status": status //　0 发布，已完成 1 临时保存 未完成
            }).then( res => {
                if (status == 1) {
                    var chapaterEdit_edit = this.$version.chapaterEdit_edit;
                    var key = chapaterEdit_edit.key + '_' + this.catalog_id + '_' + this.chapter_id;
                    var chapter = this.$cache.getStore(key, chapaterEdit_edit.version) || {};
                        chapter.chapter_title = this.title;
                        chapter.chapter_desc = this.desc;
                        chapter.chapter_content = this.content;
                    this.$cache.setStore(key, chapter, chapaterEdit_edit.version, chapaterEdit_edit.time);

                    if (!auto) {
                        this.$store.dispatch('bubble_success', {
                            ret: 0,
                            type: 'top',
                            msg: '保存成功'
                        });
                    }
                } else {
                    this.$store.dispatch('bubble_showBubble', {
                        show: true,
                        type: 'warn',
                        warn: {
                            className: 'z-center',
                            title: '发布成功！',
                            content: '快把你的故事分享给好友吧！'
                        },
                        methods: {
                            cancel: function(){

                            },
                            comfire: function (){
                                var href = './article.read.html?catalog_id='+ that.catalog_id +'&chapter_id='+ that.chapter_id;
                                window.open(href);
                            }
                        }
                    })
                }
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 获取文章详情内容
        getChapterDetail (){
            this.$store.dispatch('opus_getChapterDetail', {
                chapterId: this.chapter_id
            }).then( res => {
                // todo
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        menuMove (){
            var top = $(window).scrollTop();
            var height = $(".c-header").height();
            if (this.isEdit && top >= height) {
                $(".m-article-menus").css({
                    'top': top,
                    'position': 'absolute'
                });
            } else {
                $(".m-article-menus").css({
                    'top': height,
                    'position': 'fixed'
                });
            }
        }
    },
    watch: {
        chapter (chapter){
            this.contentEdit = chapter.chapter_content || '';
            this.content = chapter.chapter_content || '';
            this.title = chapter.chapter_title || '';
            this.desc = chapter.chapter_desc || '';
        }
    },
    created (){

    },
    updated (){

    },
    mounted (){
        this.chapter_id = this.$url.getUrlParam('chapter_id');
        this.catalog_id = this.$url.getUrlParam('catalog_id');

        // 获取目录
        this.getChapterDetail(); 

        $(window).on('scroll', e => {
            this.menuMove();
        })
    }
}
</script>

