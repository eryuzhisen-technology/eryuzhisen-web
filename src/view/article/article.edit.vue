<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-artice-edit;
    .app-body {
        padding-top: 0;
    }
    .@{module} {
        width: 100%;
        height: 100%;
        & &-wrap {
            min-width: 1200px;
            width: 100%;
            height: 100%;
            .default_backgroud_5;
        }
    }
    .@{module}__edit {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-left: 500px;
        & .edit-catalog {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            .default_backgroud_4;
            .default_border-rr-5;
            &:hover {
                z-index: 2;
            }
            & .catalog-hd {
                position: relative;
                width: 100%;
                height: 60px;
                padding: 15px 0;
                overflow: hidden;
                .default_mar_auto;
                .default_border-b-5;
                .default_backgroud_4;
                & .catalog-hd_back {
                    float: left;
                    width: 15%;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 10%;
                    margin-right: 5%;
                    .default_center;
                    .default_border-r-4;
                    .default_border-15;
                    .default_center;
                    .default_border-r-4;
                    .default_color_2;
                    .default_font_size_2;
                    .default_pointer;
                    &:hover {
                        .default_color_fff;
                        border: 1px solid #fff;
                    }
                }
                & .catalog-hd_add {
                    float: left;
                    width: 60%;
                    height: 30px;
                    line-height: 30px;
                    border: 1px dotted @default_backgroud_15;
                    .default_center;
                    .default_border-r-4;
                    .default_color_2;
                    .default_font_size_2;
                    .default_pointer;
                    &:hover {
                        .default_color_fff;
                        border: 1px dotted #fff;
                    }
                }
            }
            & .catalog-menu {
                width: 100%;
                height: 100%;
                & .catalog-menu-warp {
                    width: 100%;
                }
                & .iScrollVerticalScrollbar {
                    opacity: 0;
                }
                &:hover {
                    & .iScrollVerticalScrollbar {
                        opacity: 1;
                    }
                }
                & .catalog-menu_item {
                    position: relative;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    padding-left: 46px;
                    .default_pointer;
                    & .catalog-menu_item-icon {
                        position: absolute;
                        top: 50%;
                        left: 20px;
                        margin-top: -8px;
                        width: 16px;
                        height: 16px;
                        .skin_icon_edit-8;
                    }
                    & .catalog-menu_item-text {
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        text-decoration: none;
                        text-overflow: ellipsis; 
                        overflow: hidden; 
                        white-space: nowrap;
                        .default_font_size_2;
                        .default_color_2;
                    }
                    & .catalog-menu_item-more {
                        display: none;
                        position: absolute!important;
                        top: 0;
                        right: 0;
                        width: 50px;
                        height: 50px;
                        .skin_icon_edit-14;
                        &:hover {
                            .skin_icon_edit-14_on;
                            & .cpm_sub_more {
                                display: block;
                                left: 15px;
                                width: 180px;
                            }
                        }
                    }
                    &:hover {
                        & .catalog-menu_item-more {
                            display: block;
                        }
                    }
                    &:hover,
                    &.z-active {
                        .default_backgroud_5;
                        & .catalog-menu_item-icon {
                            .skin_icon_edit-8_on;
                        }
                        & .catalog-menu_item-text {
                            .default_color_1;
                        }
                    }
                }
            }
        }
        & .edit-chapter {
            position: absolute;
            top: 0;
            left: 200px;
            width: 300px;
            height: 100%;
            .default_border-rr-5;
            .default_backgroud_3;
            &:hover {
                z-index: 2;
            }
            & .chapter-hd {
                position: relative;
                width: 100%;
                height: 60px;
                line-height: 60px;
                overflow: hidden;
                padding-left: 46px;
                .default_mar_auto;
                .default_border-b-5;
                .default_pointer;
                .default_backgroud_2;
                & .chapter-hd_icon {
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    margin-top: -8px;
                    width: 16px;
                    height: 16px;
                    .skin_icon_edit-9;
                }
                & .chapter-hd_text {
                    width: 100%;
                    height: 60px;
                    line-height: 60px;
                    text-decoration: none;
                    text-overflow: ellipsis; 
                    overflow: hidden; 
                    white-space: nowrap;
                    .default_font_size_2;
                    .default_color_2;
                }
                &:hover {
                    & .chapter-hd_text {
                        .default_color_1;
                    }
                }
            }
            & .chapter-menu {
                width: 100%;
                height: 100%;
                & .chapter-menu-warp {
                    width: 100%;
                }
                & .iScrollVerticalScrollbar {
                    opacity: 0;
                }
                &:hover {
                    & .iScrollVerticalScrollbar {
                        opacity: 1;
                    }
                }
                & .chapter-menu_item {
                    position: relative;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    padding-left: 41px;
                    .default_border-b-5;
                    .default_pointer;
                    border-left: 5px solid @default_backgroud_3;
                    & .chapter-menu_item-icon {
                        position: absolute!important;
                        top: 50%;
                        left: 15px;
                        margin-top: -8px;
                        width: 16px;
                        height: 16px;
                        .skin_icon_edit-11;
                    }
                    & .chapter-menu_item-delete {
                        display: none;
                        position: absolute!important;
                        top: 0;
                        right: 0;
                        width: 50px;
                        height: 50px;
                        .skin_icon_edit-13;
                        &:hover {
                            .skin_icon_edit-13_on;
                        }
                    }
                    & .chapter-menu_item-text {
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        text-decoration: none;
                        text-overflow: ellipsis; 
                        overflow: hidden; 
                        white-space: nowrap;
                        .default_font_size_2;
                        .default_color_2;
                    }
                    & .c-dialog__tip {
                        width: 70px;
                        top: -50px;
                        display: none;
                    }
                    &.z-active {
                        border-left: 5px solid @default_backgroud_13;
                        .default_backgroud_5;
                        & .chapter-menu_item-icon {
                            .skin_icon_edit-11_on;
                        }
                        & .chapter-menu_item-text {
                            .default_color_1;
                        }
                    }
                    &:hover {
                        & .chapter-menu_item-text {
                            .default_color_1;
                        }
                        & .chapter-menu_item-delete {
                            display: block;
                        }
                        & .c-dialog__tip {
                            display: block;
                        }
                    }

                    &.z-finish .chapter-menu_item-icon {
                        .skin_icon_edit-10;
                    }
                    // &.z-finish:hover .chapter-menu_item-icon,
                    &.z-finish.z-active .chapter-menu_item-icon {
                        .skin_icon_edit-10_on;
                    }
                }
            }
        }
        & .edit-content {
            width: 100%;
            height: 100%;
            // overflow: hidden;
            .default_backgroud_3;
            & .edit-content_read {
                padding: 0 40px;
                & .edit-content_read-title {
                    padding: 40px 0;
                    .default_color_1;
                    .default_font_size_6;
                    .default_font_bolder;
                }
                & .edit-content_read-content-wrap {
                    width: 100%;
                    overflow: hidden;
                }
                & .edit-content_read-content {
                    & p {
                        line-height: 1.75rem;
                        margin-bottom: 30px;
                        .default_color_10;
                        .default_font_size_3;
                    }
                }
                & .iScrollVerticalScrollbar {
                    opacity: 0;
                }
                &:hover {
                    & .iScrollVerticalScrollbar {
                        opacity: 1;
                    }
                }
            }
            & .edit-content_edit {
                & .edit-content_edit-title {
                    position: relative;
                    width: 100%;
                    height: 60px;
                    line-height: 60px;
                    padding: 0 40px;
                    & .edit-content_edit-title-input {
                        display: inline-block;
                        width: 100%;
                        .default_middle;
                        .default_color_1;
                        .default_font_size_5;
                        .default_font_bolder;
                    }
                    & .edit-content_edit-title-number {
                        position: absolute;
                        bottom: 20px;
                        right: 30px;
                        .default_color_4;
                        .default_font_size_1;
                        &.z-warn {
                            .default_color_7;
                        }
                    }
                    & .c-dialog__tip {
                        top: 20px;
                    }
                }
                & .edit-content_edit-body {
                    position: relative;
                    & .c-dialog__tip {
                        top: 90px;
                    }
                }
                & .iScrollVerticalScrollbar {
                    opacity: 0;
                }
                &:hover {
                    & .iScrollVerticalScrollbar {
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="m-artice-edit">
    <div class="m-artice-edit-wrap">
        <div class="m-artice-edit__edit">

            <!-- 目录-列表 -->
            <div class="edit-catalog">
                <div class="catalog-hd">
                    <div class="catalog-hd_back" @click="formback">返</div>
                    <div class="catalog-hd_add" @click="addCatalog">创建新故事</div>
                </div>
                <div class="catalog-menu" ref="catalogMenu">
                <div class="catalog-menu-wrap">
                    <div 
                        class="catalog-menu_item" v-for="item in article.lists" 
                        @click="getChapterList(item.catalog_id, true)" 
                        :class="{'z-active': catalog_id == item.catalog_id}"
                    >
                        <div class="catalog-menu_item-icon"></div>
                        <div class="catalog-menu_item-text">{{item.catalog_title}}</div>
                        <div class="catalog-menu_item-more">
                            <div class="cpm_sub_more z-left">
                                <div class="item">
                                    <div class="item-text" @click.stop="updateCatalog(item)">编辑</div>
                                </div>
                                <div class="item">
                                    <div class="item-text" @click.stop="removeCatalog(item.catalog_id)">删除</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <!-- 章节列表 -->
            <div class="edit-chapter">
                <div v-if="catalog_id" class="chapter-hd" @click="addEnpry">
                    <div class="chapter-hd_icon"></div>
                    <div class="chapter-hd_text">增加新章节</div>
                </div>
                <div v-if="lists && lists.length" class="chapter-menu" ref="chapterMenu">
                <div class="chapter-menu-wrap">
                    <div 
                        class="chapter-menu_item"
                        v-for="item in lists" 
                        :class="{'z-active': chapter_id == item.chapter_id, 'z-finish': item.chapter_status == 0}"
                        @click="getChapterDetail(item.chapter_id)" 
                    >
                        <div class="chapter-menu_item-icon">
                            <div class="c-dialog__tip z-top">
                                <div class="tip-arrow"></div>
                                <div class="tip-text">{{item.chapter_status == 0 ? '已发布' : '未发布'}}</div>
                            </div>
                        </div>
                        <div class="chapter-menu_item-text">{{ chapter_id != item.chapter_id ? item.chapter_title : title}}</div>
                        <div class="chapter-menu_item-delete" @click.stop="remove(item.chapter_id, item.chapter_status == 0)"></div>
                    </div>
                </div>
                </div>
            </div>

            <!-- 文章展示 -->
            <div v-if="chapter && chapter_id != -1" class="edit-content">
                <div v-if="chapter.chapter_status == 0" class="edit-content_read">
                    <div class="edit-content_read-content-wrap" ref="chapterContent">
                    <div>
                        <div class="edit-content_read-title">
                            {{chapter.chapter_title}}
                        </div>
                        <div class="edit-content_read-content" v-html="chapter.chapter_content"></div>
                    </div>
                    </div>
                </div>
                <div v-else class="edit-content_edit">
                    <div class="edit-content_edit-title">
                        <input class="edit-content_edit-title-input" type="text" placeholder="填写章节标题" v-model="title" @focus="hideTip" />
                        <!-- <span class="edit-content_edit-title-number" :class="{'z-warn': title.length > 10}">{{title.length}}/10</span> -->
                        <div v-if="!reg_title" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_title_con}}</div>
                        </div>
                    </div>
                    <div class="edit-content_edit-body">
                        <Create 
                            :content="content"
                            @update='update'
                            @publish='publish'
                            @scan="scan"
                            @edit="edit"
                            @edit_init="edit_init"
                            @edit_click="hideTip"
                        />
                        <div v-if="!reg_content" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_content_con}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="cpm_clear"></div>
    </div>
    <Edit :resType="resType" />
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            resType: 'edit',
            from: '',

            reg_title: true,
            reg_content: true,
            reg_title_con: '',
            reg_content_con: '',

            chapter_id: -1,
            catalog_id: -1,

            isUpdata: 0,
            isCreate: true,
            list: [],
            title: '',
            desc: '',
            content: ''
        }
    },
    computed: mapState({
        user: state => state.user.info,
        chapter: state => state.opus.chapter.info,
        article: state => state.opus.article,
        lists: state => state.opus.chapter.lists
    }),
    methods: {
        hideTip (){
            this.reg_title = true;
            this.reg_title_con = '';
            this.reg_content = true;
            this.reg_content_con = '';
        },
        edit_init (editor){
            this.editor = editor;
            $('.j-save-btn').on('mouseenter', res => {
                if (this.isUpdata == 2 || this.isUpdata == 3) {
                    this.isUpdata = 0;
                }
            })
        },
        formback (){
            if (this.from) {
                window.location.href = this.from;
            }
        },

        updateCatalog (catalog){
            this.$eventHub.$emit('header_article_setShow', {
                show: true,
                catalog: catalog
            });
        },

        removeCatalog (catalogId){
            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除你的故事?',
                    content: '删除后无法恢复，读者也将无法看见，请谨慎操作',
                    comfireFn: function(){
                        that.delCatalog(catalogId);
                    }
                },
            })
        },

        delCatalog (catalogId){
            this.$store.dispatch('opus_delCatalog', {
                "catalogId": catalogId
            }).then( res => {
               this.getMyCatalogList();

               this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 删除草稿
        remove (chapterId, isPublish){
            var that = this;
            if (!isPublish) {
                that.deleteChapter(chapterId);
                return;
            }
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除已发布的章节？',
                    content: '若删除已发布的章节，读者也将永远无法看见，请谨慎操作',
                    comfireFn: function(){
                        that.deleteChapter(chapterId)
                    }
                }
            })
        },

        // 删除文章
        deleteChapter (chapterId){
            this.$store.dispatch('opus_deleteChapter', {
                "chapterId": chapterId
            }).then( res => {
               this.getChapterList(this.catalog_id, true);

               this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        addCatalog (){
            this.$eventHub.$emit('header_article_setShow', {
                show: true
            });
        },

        // 添加新文章
        addEnpry (){
            this.isCreate = false;
            this.addChapter(1);
        },
        
        // 校验内容
        check (checkContent){
            // 名字
            if (!$.trim(this.title)) {
                this.reg_title = false;
                this.reg_title_con = '填写章节标题';
                return false;
            } else if ($.trim(this.title).gblen() > 60) {
                this.reg_title = false;
                this.reg_title_con = '超出30中文字数';
                return false;
            } else {
                this.reg_title = true;
                this.reg_title_con = '';
            }

            // 内容
            if (checkContent) {
                if ($.trim(this.content) == '<p><br></p>') {
                    this.reg_content = false;
                    this.reg_content_con = '填写章节内容';
                    return false;
                } else {
                    this.reg_content = true;
                    this.reg_content_con = '';
                }
            }

            return true;
        },

        // 保存内容
        update (value, auto){
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

            this.content = value;
            if (!this.check(true)) {
                return
            }
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定发布吗？',
                    content: '章节发布后不可修改编辑，只能删除重新发布，请谨慎检查',
                    comfireFn: function(){
                        that.updateChapter(0);
                    }
                }
            })
        },

        // 预览内容
        scan (value){
            this.content = value;

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
                // this.getChapterDetail();
                if (status == 1) {
                    this.isUpdata = 2;

                    var chapaterEdit_edit = this.$version.chapaterEdit_edit;
                    var key = chapaterEdit_edit.key + '_' + this.catalog_id + '_' + this.chapter_id;
                    var chapter = this.$cache.getStore(key, chapaterEdit_edit.version);
                        chapter.chapter_title = this.title;
                        chapter.chapter_desc = this.desc;
                        chapter.chapter_content = this.content;
                    this.$cache.setStore(key, chapter, chapaterEdit_edit.version, chapaterEdit_edit.time);
                } else {
                    that.getChapterList(that.catalog_id, true);
                    this.$store.dispatch('bubble_showBubble', {
                        show: true,
                        type: 'complete',
                        complete: {
                            title: this.title
                        },
                        methods: {
                            cancel (){
                                that.isCreate = true;
                                // that.addEnpry();
                            },
                            comfire (){
                                var href = './article.read.html?catalog_id='+ that.catalog_id +'&chapter_id='+ that.chapter_id;
                                window.open(href);
                            }
                        }
                    })
                }
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                status == 1 && (this.isUpdata = 3);
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 创建内容
        addChapter (status){
            this.$store.dispatch('opus_addChapter', {
                "catalog_id": this.catalog_id, //目录id
                "chapter_title": status == 1 ? '无标题文章' : this.title, //章节标题
                "chapter_desc": status == 1 ? '' : this.desc, //简介
                "chapter_content": status == 1 ? '<p><br /></p>' : this.content, //内容　***base64 编码***
                "chapter_status": status //　0 发布，已完成 1 临时保存 未完成
            }).then( res => {
                this.getChapterList(this.catalog_id, true);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 获取目录列表
        getMyCatalogList (){
            // 未登录处理
            if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getCatalogList');
                return false;
            }
            this.$store.dispatch('opus_getMyCatalogList', {
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$emit('article_count', this.article.count);
                if (res.list.length) {
                    this.catalog_id = res.list[0].catalog_id;
                    this.getChapterList(this.catalog_id, true);
                }

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 获取文章列表
        getChapterList (catalog_id, isget){
            this.$store.dispatch('opus_getChapterList', {
                'resType': 'edit',
                "catalogId": catalog_id, // 目录id
                "pagination": "1", // 获取总数
                "page": 1, //页数,默认不传查询第一页
                "pageSize": 100 //每页数量 默认10
            }).then( res => {
                this.catalog_id = catalog_id;

                if (res.list.length && isget) {
                    this.chapter_id = res.list[0].chapter_id;
                    this.getChapterDetail(this.chapter_id);   
                } else {
                    this.chapter_id = -1;
                    this.$store.dispatch('opus_setChapterInfo', {});
                }

                //todo
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 获取文章详情内容
        getChapterDetail (chapter_id){
            this.$store.dispatch('opus_getChapterDetail', {
                chapterId: chapter_id
            }).then( res => {
                this.chapter_id = chapter_id;
                // todo
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    watch: {
        isUpdata (isUpdata){
            if (isUpdata == 1) {
                $('.j-save-btn').addClass('j-save-btn-update').find('a').text('保存中...');    
            } else if (isUpdata == 4) {
                $('.j-save-btn').addClass('j-save-btn-update').find('a').text('自动保存中...');    
            } else if (isUpdata == 2) {
                $('.j-save-btn').addClass('j-save-btn-update').find('a').text('已保存');
                this.timeSave = setTimeout( res => {
                    $('.j-save-btn').removeClass('j-save-btn-update').find('a').text('保存');
                }, 3000)
            } else if (isUpdata == 3) {
                $('.j-save-btn').addClass('j-save-btn-update').find('a').text('保存失败');
                this.timeSave = setTimeout( res => {
                    $('.j-save-btn').removeClass('j-save-btn-update').find('a').text('保存');
                }, 3000)
            } else if (isUpdata == 0) {
                clearTimeout(this.timeSave);
                $('.j-save-btn').removeClass('j-save-btn-update').find('a').text('保存');
            }
        },

        chapter (chapter){
            this.content = chapter.chapter_content;
            this.title = chapter.chapter_title;
            this.desc = chapter.chapter_desc;

            var chapaterEdit_edit = this.$version.chapaterEdit_edit;
            var key = chapaterEdit_edit.key + '_' + this.catalog_id + '_' + this.chapter_id;
            this.$cache.setStore(key, chapter, chapaterEdit_edit.version, chapaterEdit_edit.time);
        },

        lists (lists){
            if (this.isCreate && this.chapter_id == -1) {
                // this.addEnpry();
            }
        }
    },
    created (){
        this.$eventHub.$on('updateCatalog_success', option => {
            this.getMyCatalogList();
        });
    },
    updated (){
        if (this.$refs.catalogMenu) {
            if (!this.catalogMenu) {
                // 创建iscroll
                this.catalogMenu = new this.$iScroll(this.$refs.catalogMenu, {
                    bounce: false,
                    scrollbars: true,
                    mouseWheel: true,
                    interactiveScrollbars: true,
                    shrinkScrollbars: 'scale',
                    // fadeScrollbars: true
                });
            } else {
                this.catalogMenu.refresh();
            }
        }

        if (this.$refs.chapterMenu) {
            if (!this.chapterMenu) {
                // 创建iscroll
                this.chapterMenu = new this.$iScroll(this.$refs.chapterMenu, {
                    bounce: false,
                    scrollbars: true,
                    mouseWheel: true,
                    interactiveScrollbars: true,
                    shrinkScrollbars: 'scale',
                    // fadeScrollbars: true
                });
            } else {
                this.chapterMenu.refresh();
            }
        }

        if (this.chapter.chapter_status == 0) {
            $('.edit-content_read-content-wrap').height($(window).height());
            $(window).on('resize', function(){
                $('.edit-content_read-content-wrap').height($(window).height());
            })

            // 设置高度
            this.chapterContent = new this.$iScroll(this.$refs.chapterContent, {
                bounce: false,
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                // fadeScrollbars: true
            });
        } else {
            this.chapterContent && this.chapterContent.destroy();
            $(window).off('resize');
            $('.edit-content_edit-title').height(60);
        }
    },
    mounted (){
        // 获取url的参数
        this.from = decodeURIComponent(this.$url.getUrlParam('from')) || '';

        // 获取目录
        this.getMyCatalogList();
    }
}
</script>

