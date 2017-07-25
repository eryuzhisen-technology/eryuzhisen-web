<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-artilce-catalog {
        padding-top: 2.2rem;
        padding-bottom: .2rem;
        overflow: hidden;

        & .catalog-hd {
            position: fixed;
            top: 1rem;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 1rem;
            padding: 0 .3rem;
            .default_flex_middle;
            .default_backgroud_7;

            & .catalog-title {
                .default_color_1;
                .default_font_size_8;
            }
            & .catalog-publish {
                .default_color_1;
                .default_font_size_5;
            }
        }
        & .catalog-bd {
            z-index: 1;
            margin: 0 .3rem;
            .default_backgroud_3;

            & .catalog-img {
                position: relative;
                width: 100%;
                height: 3.8rem;
                overflow: hidden;
                border-radius: .1rem .1rem 0 0;

                & .catalog-img-bg {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-position: left center;
                    background-size: cover;
                    background-image: url(../../../common/images/mb/catalog-bg.png);
                    .default_backgroud_6;
                }
                & .catalog-img-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                    .default_flex__v_middle;
                }
                & .catalog-img-content {
                    position: relative;
                    width: 2rem;
                    height: 3rem;
                    overflow: hidden;
                    background-position: center;
                    background-size: cover;
                    .default_backgroud_6;
                    .default_border-r-10;
                }
                & .catalog-img-btn {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: .8rem;
                    height: .8rem;
                    .default_backgroud_000;
                    .default_border-r-50;
                    .skin_catalog_pic;
                }
            }
            & .catalog-item {
                width: 100%;
                min-height: 1.2rem;
                padding: 0 0.3rem;
                // overflow: hidden;
                .default_flex_left;
                .default_border-b-4;
            }
            & .catalog-label {
                width: 1.5rem;
                height: 1.2rem;
                line-height: 1.2rem;
                margin-right: .3rem;
                .default_color_3;
                .default_font_size_5;
            }
            & .catalog-input {
                position: relative;
                width: 4.5rem;
                min-height: 1.2rem;
                // overflow: hidden;
                .default_flex__v_middle;
            }
            & .catalog-input span,
            & .catalog-input input,
            & .catalog-input textarea {
                display: block;
                width: 100%;
                .default_color_1;
                .default_font_size_5;
            }
            & .catalog-input select {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
            & .catalog-input span.z-default {
                .default_color_4;
            }
            & .catalog-old {
                padding: .2rem .3rem;
                .default_backgroud_2;
                .default_border-b-4;

                & .catalog-old-item {
                    width: 100%;
                    height: 1rem;
                    padding: 0 .3rem;
                    margin-bottom: .2rem;
                    .default_border-6;
                    .default_border-r-10;
                    .default_backgroud_5;
                    .default_flex_left;

                    & input {
                        width: 100%;
                        .default_color_1;
                        .default_font_size_5;
                    }
                }
                & .catalog-old-item_upload {
                    padding: 0;
                    .default_backgroud_n;
                    .default_border-n;
                }
                & .catalog-old_img {
                    width: 1rem;
                    height: 1rem;
                    margin-right: .3rem;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    .default_border-r-10;
                }
                & .catalog-old_uploaded {
                    width: 5rem;
                    height: 1rem;
                    .default_flex__v_middle;
                    .default_color_1;
                    .default_font_size_6;
                    .default_border-r-10;
                    .default_border-1;
                    border: 0.01rem solid rgba(220,220,220, 0.5);
                    background-color: rgba(0,0,0, 0.5);
                }
            }
            & .catalog-intro {
                .default_flex_default;
            }
            & .catalog-intro .catalog-input {
                padding: .4rem 0;
            }
            & .catalog-intro textarea {
                width: 100%;
                height: 3rem;
            }
        }
        & .catalog-dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99;
            padding-top: 1rem;
            transition: all @default_speed_1;
            transform: translate(0, 110%);
            .default_backgroud_5;
    
            & .content-hd {
                width: 100%;
                height: 1rem;
                padding: 0 .3rem;
                .default_flex_middle;
                .default_backgroud_7;

                & h3 {
                    .default_color_1;
                    .default_font_size_8;
                }
            }
            & .content-bd {
                width: 100%;
                padding: .2rem .3rem;

                & .content-bd_input {
                    padding: .3rem;
                    margin-bottom: .2rem;

                    .default_backgroud_3;
                    .default_border-r-10;
                    & .input {
                        position: relative;
                        width: 100%;
                        height: 1rem;
                        padding: 0 .3rem;
                        .default_backgroud_5;
                        .default_border-r-10;
                        .default_flex_left;
                        .default_border-rr-6;

                        & input {
                            .default_color_2;
                            .default_font_size_5;
                        }

                        & .tag-list {
                            position: absolute;
                            top: 0;
                            left: .3rem;
                            // width: 100%;
                            height: 100%;
                            .default_flex_left;
                            .default_color_2;
                            .default_font_size_5;

                            & .tag-item {
                                margin-right: .2rem;
                            }
                        }
                    }
                }
                & .content-bd_tag {
                    width: 100%;
                    overflow: hidden;
                    .default_border-r-10;

                    & .tag-hd {
                        width: 100%;
                        height: .8rem;
                        padding: 0 0.3rem;
                        .default_flex_middle;
                        .default_backgroud_2;

                        & h3 {
                            .default_color_3;
                            .default_font_size_3;
                        }
                        & span {
                            width: .44rem;
                            height: .44rem;
                            .skin_catalog_refresh;
                        }
                    }
                    & .tag-bd {
                        width: 100%;
                        overflow: hidden;
                        height: 2.2rem;
                        padding: .3rem;
                        .default_backgroud_3;

                        & .tag-item {
                            float: left;
                            height: .7rem;
                            padding: 0 .3rem;
                            margin-right: .2rem;
                            margin-bottom: .2rem;
                            border-radius: .35rem;
                            .default_color_2;
                            .default_font_size_5;
                            .default_backgroud_13;
                            .default_flex_center;

                            &.z-select {
                                .default_color_1;
                                .default_backgroud_6;
                            }
                        }
                    }
                }
            }
            & .content-ft {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1rem;
                .default_flex_center;
                .default_color_1;
                .default_font_size_8;
                .default_backgroud_7;
            }
            &.z-show {
                transform: translate(0, 0);   
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-artilce-catalog">
        <div class="catalog-hd">
            <div class="catalog-title">{{created ? catalog.info.catalog_title : '创建故事'}}</div>
            <div class="catalog-publish" @click="save">{{created ? '更新' : '发布'}}</div>
        </div>
        <div class="catalog-bd">
            <div class="catalog-img">
                <div class="catalog-img-bg"></div>
                <div class="catalog-img-mask">
                    <div id="upload_image_catalog" class="catalog-img-content" v-lazy:background-image="image || $defaultData.mbData.catalog">
                        <div class="catalog-img-btn"></div>
                    </div>
                    <keep-alive v-if="init">
                    <UploadImg 
                        type="2"
                        select="upload_image_catalog"
                        container="container"
                        @uploadImg_uploaded="uploaded"
                    />
                    </keep-alive>
                </div>
            </div>
            <div class="catalog-item catalog-name">
                <div class="catalog-label">故事名字</div>
                <div class="catalog-input">
                    <input type="text" placeholder="请输入作品故事名字" v-model="articlename" />
                </div>
            </div>
            <div class="catalog-item catalog-fan">
                <div class="catalog-label">翻译授权</div>
                <div class="catalog-input">
                    <span v-if="control_id == -1" class="z-default">选择是否翻译授权</span>
                    <span v-else>{{control_id | control_select(catalog.controlArr)}}</span>
                    <select v-model="control_id">
                        <option v-for="option in catalog.controlArr" :value="option.control_id">{{option.control_text}}</option>
                    </select>
                </div>
            </div>
            <div class="catalog-old" v-if="control_id == 1">
                <div class="catalog-old-item">
                    <input type="text" placeholder="原作品故事名字" v-model="oldname" />
                </div>
                <div class="catalog-old-item">
                    <input type="text" placeholder="原作者" v-model="oldauthor" />
                </div>
                <div class="catalog-old-item">
                    <input type="text" placeholder="原作品连接" v-model="oldurl" />
                </div>
                <div class="catalog-old-item catalog-old-item_upload">
                    <div class="catalog-old_img" v-lazy:background-image="oldimg || catalog.info.catalog_cover_url"></div>
                    <div class="catalog-old_uploaded" id="old_upload_image_select">上传翻译授权截图证明</div>
                    <keep-alive v-if="control_id == 1">
                    <UploadImg 
                        type="2"
                        select="old_upload_image_select"
                        container="old_container"
                        @uploadImg_uploaded="old_uploaded"
                    />
                    </keep-alive>
                </div>
            </div>
            <div class="catalog-item catalog-zhuan">
                <div class="catalog-label">允许转载</div>
                <div class="catalog-input">
                    <span v-if="share_id == -1" class="z-default">选择是否允许转载</span>
                    <span v-else>{{share_id | share_select(catalog.shareArr)}}</span>
                    <select v-model="share_id">
                        <option v-for="option in catalog.shareArr" :value="option.share_id">{{option.share_text}}</option>
                    </select>
                </div>
            </div>
            <div class="catalog-item catalog-tag">
                <div class="catalog-label">标签</div>
                <div class="catalog-input" @click="showDialog(true)">
                    <span v-if="!tagsVal" class="z-default">多个标签用空格区分</span>
                    <span v-else>{{tagsVal}}</span>
                </div>
            </div>
            <div class="catalog-item catalog-status">
                <div class="catalog-label">状态</div>
                <div class="catalog-input">
                    <span v-if="audit_status == -1" class="z-default">选择故事状态</span>
                    <span v-else>{{audit_status | status_select(catalog.statusArr)}}</span>
                    <select v-model="audit_status">
                        <option v-for="option in catalog.statusArr" :value="option.audit_status">{{option.text}}</option>
                    </select>
                </div>
            </div>
            <div class="catalog-item catalog-level">
                <div class="catalog-label">等级</div>
                <div class="catalog-input">
                    <span v-if="level_id == -1" class="z-default">选择故事等级</span>
                    <span v-else>{{level_id | level_select(catalog.levelArr)}}</span>
                    <select v-model="level_id">
                        <option v-for="option in catalog.levelArr" :value="option.level_id">{{option.text}}</option>
                    </select>
                </div>
            </div>
            <div class="catalog-item catalog-intro">
                <div class="catalog-label">简介</div>
                <div class="catalog-input">
                    <textarea placeholder="填写故事简介" v-model="intro"></textarea>
                </div>
            </div>
        </div> 
        <div class="catalog-dialog" :class="{'z-show': isShowDialog}">
            <div class="content-hd">
                <h3>故事标签</h3>
                <span></span>
            </div>
            <div class="content-bd">
                <div class="content-bd_input">
                    <div class="input">
                        <div class="tag-list">
                            <div class="tag-item" v-for="(item, index) in tags"><div class="tag-item-text">{{item}}</div><em @click.stop="deleteTag" :data-index="index"></em></div>
                        </div>
                        <input 
                            class="tag-edit" 
                            @compositionstart="compositionstart" 
                            @compositionend="compositionend" 
                            @keydown.enter="enter" 
                            @keydown.space="enter" 
                            @keydown.delete="deleteTagLast" 
                            type="text" 
                            v-model="inputval" :placeholder="tags.length ? '' : '多个标签用空格区分'" 
                        />
                    </div>
                </div>
                <div class="content-bd_tag">
                    <div class="tag-hd">
                        <h3>热门标签</h3>
                        <span @click="getLabelList"></span>
                    </div>
                    <div class="tag-bd">
                        <div v-for="item in category.tags" @click="tagsSelect" class="tag-item" :class="{'z-select': tags.indexOf(item) > -1}">{{item}}</div>
                    </div>
                </div>
            </div>
            <div class="content-ft" @click="showDialog(false)">保存</div>
        </div>
    </div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            init: false,
            iscomposition: false,
            created: false,
            catalog_id: -1,
            tagNumber: 5,
            isShowDialog: false,

            image: '',
            articlename: '',
            control_id: -1,
            oldname: '',
            oldimg: '',
            oldurl: '',
            oldauthor: '',
            share_id: -1,
            audit_status: -1,
            level_id: -1,
            category_id: 1, // 默认写死文字-1
            tags: [],
            inputval: '',
            tagsVal: '',
            intro: ''
        }
    },
    computed: mapState({
        catalog: state => state.opus.catalog,
        category: state => state.opus.category
    }),
    methods: {
        compositionstart (e) {
            this.iscomposition = true;
        },
        compositionend (e) {
            this.iscomposition = false;
            return false;
        },
        showDialog (isShowDialog){
            this.isShowDialog = isShowDialog;
        },
        uploaded (fileUrl){
            // 设置上传的图片
            this.image = fileUrl;
        },
        old_uploaded (fileUrl){
            // 设置上传的图片
            this.oldimg = fileUrl;
        },
        freshInfo (catalog){
            this.create = true;
            this.image = catalog.catalog_cover_url;
            this.articlename = catalog.catalog_title;
            this.category_id = catalog.category_id;
            this.catalog_id = catalog.catalog_id;
            this.audit_status = catalog.catalog_status;
            this.level_id = catalog.level;
            this.intro = catalog.catalog_desc;
            this.share_id = catalog.reprint;
            this.control_id = catalog.translate;
            if (catalog.authorize) {
                this.oldname = catalog.authorize.original_title; 
                this.oldauthor = catalog.authorize.original_author; 
                this.oldimg = catalog.authorize.original_img_url; 
                this.oldurl = catalog.authorize.original_url;
            }
          
            // 匹配标签
            this.tags = [];
            catalog.labels.map( (item, index) => {
                this.tags.push(item);
            })
        },

        getCatalogDetail (){
            this.$store.dispatch('opus_getCatalogDetail', {
                catalogId: this.catalog_id
            }).then( res => {
                this.created = true;
                this.freshInfo(res.info);

                // todo
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 获取标签
        getLabelList (number){
            this.$store.dispatch('opus_getLabelList', {
                count: this.tagNumber
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        tagsSelect (e){
            var node = $(e.currentTarget);
            var tag = node.text();
            if (node.hasClass('z-select')) {
                for (var i = 0, len = this.tags.length; i < len; i++) {
                    if (this.tags[i] == tag) {
                        this.tags.splice(i, 1);
                        break;
                    }
                }
                return false;
            }
            if (this.tags.length >= 3) {
                return false;
            }
            this.tags.push(tag);
        },

        enter (e){
            if (this.tags.length >= 3 || this.iscomposition) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '标签不能超过3个'
                    }
                })
                this.inputval = '';
                return false;
            }
            if ($.trim(this.inputval) == '') {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '标签内容不能为空'
                    }
                })
                return false;
            }
            if ($.trim(this.inputval).length > 5) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '标签内容不能超出5个字'
                    }
                })
                return false;
            }
            this.tags.push(this.inputval);
            this.inputval = '';
        },
        deleteTagLast (e){
            if (e.target.value == '' && this.tags.length) {
                this.tags.splice(this.tags.length-1, 1);
            }
        },
        save (){
            var vaid = true;
            var msg = '';

            // 是否上传照片
            if (vaid && !this.image) {
                this.image = this.$defaultData.mbData.catalog;
            }

            // 名字
            if (vaid && !$.trim(this.articlename)) {
                vaid = false;
                msg = '填写30字中文以内故事名字';
            } else if (vaid && $.trim(this.articlename).length > 30) {
                vaid = false;
                msg = '超出最大30个字数';
            }

            // 授权
            if (vaid && $.trim(this.control_id) == -1) {
                vaid = false;
                msg = '是否为翻译授权作品';
            }

            // 授权-名称
            if (vaid && $.trim(this.oldname) == '' && this.control_id == 1) {
                vaid = false;
                msg = '填写原作品故事名';
            }

            // 授权-作者
            if (vaid && $.trim(this.oldauthor) == '' && this.control_id == 1) {
                vaid = false;
                msg = '填写原作者';
            }

            // 授权-原作品连接
            if (vaid && $.trim(this.oldurl) == '' && this.control_id == 1) {
                vaid = false;
                msg = '填写原作品连接';
            }

            // 授权-截图证明
            if (vaid && $.trim(this.oldimg) == '' && this.control_id == 1) {
                vaid = false;
                msg = '上传翻译授权截图证明';
            }

            // 转载
            if (vaid && $.trim(this.share_id) == -1) {
                vaid = false;
                msg = '是否允许他人复制和转载';
            }

            // 类型
            if (vaid && $.trim(this.category_id) == -1) {
                vaid = false;
                msg = '类型选定不可更改';
            }

            // 状态
            if (vaid && $.trim(this.audit_status) == -1) {
                vaid = false;
                msg = '连载完请及时更改便于推荐';
            }

            // 等级
            if (vaid && $.trim(this.level_id) == -1) {
                vaid = false;
                msg = '关系到推荐强度选定不可更改';
            }

            // 标签
            if (vaid && !this.tags.length) {
                vaid = false;
                msg = '填写3个以内标签于推荐';
            } else if (vaid && this.tags.length > 3) {
                vaid = false;
                msg = '超出3个标签个数';
            }

            // 作品介绍
            if (vaid && !$.trim(this.intro)) {
                vaid = false;
                msg = '填写1000字中文以内简介';
            } else if (vaid && $.trim(this.intro).length > 1000) {
                vaid = false;
                msg = '超出最大1000个字数';
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

            if (this.created) {
                return this.addCatalog();
            }

            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定创建故事集？',
                    html: '<span>我已阅读并同意遵守</span><a href="./agreement.html">《耳语之森原创声明及相关功能使用协议》》</a>',
                    btnCancel: '取消',
                    btnComfire: '确认'
                },
                methods: {
                    comfire: function (){
                        that.addCatalog();
                    }
                }
            })
        },

        addCatalog (){
            var option = {
                "level": this.level_id, // 等级
                "translate": this.control_id, // 0 不是翻译类 1 翻译类
                "reprint": this.share_id, // 0 不允许转载 1 允许
                // "category_id": this.category_id, // 类别id - 写死1文字
                "category_id": 1, // 类别id - 写死1文字
                "catalog_id": this.catalog_id, // 目录id
                "catalog_title": this.articlename, //目录标题
                "catalog_desc": this.intro, //简介
                "catalog_cover_url": this.image, //封面
                "catalog_status": this.audit_status, //0 连载中 1 已完结
                "catalog_label": this.tags.join(',') //标签，多个标签逗号分割
            }
            // 如果为翻译类作品，需要增加授权信息 必填
            if (this.control_id == 1) {
                option.authorize = { 
                    "original_title": this.oldname, // 原标题
                    "original_url": this.oldurl, // 原地址
                    "original_img_url": this.oldimg, // 授权截图
                    "original_author": this.oldauthor // 原作者
                }
            }
            this.$store.dispatch(this.create ? 'opus_updateCatalog' : 'opus_addCatalog', option).then( res => {
                var msg;
                if (this.create) {
                    // msg = '发布成功，作品重新进入审核中，请等待';
                    msg = '更新成功!';
                } else {
                    return window.location.href = './article.work.html';
                    msg = '创建故事成功！快更新章节吧！';
                }
                this.$eventHub.$emit('updateCatalog_success');

                // 更新目录信息
                this.$store.dispatch('opus_setCatalog_info', option)

                this.$store.dispatch('bubble_success', {
                    ret: 0,
                    type: 'top',
                    msg: msg
                });

                if (this.resType == 'author') {
                    this.refreshCatalog();
                }
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        }
    },
    filters: {
        control_select (value, controlArr){
            var text = '';
            controlArr.map((item, index) => {
                if (item.control_id == value) {
                    text = item.control_text;
                }
            })
            return text;
        },

        share_select (value, shareArr){
            var text = '';
            shareArr.map((item, index) => {
                if (item.share_id == value) {
                    text = item.share_text;
                }
            })
            return text;
        },

        status_select (value, statusArr){
            var text = '';
            statusArr.map((item, index) => {
                if (item.audit_status == value) {
                    text = item.text;
                }
            })
            return text;
        },

        level_select (value, levelArr){
            var text = '';
            levelArr.map((item, index) => {
                if (item.level_id == value) {
                    text = item.text;
                }
            })
            return text;
        }
    },
    created (){
        
    }, 
    updated(){
        // 标签更新
        var left = parseInt($('.tag-list').css('left'));
        $('.tag-edit').css('padding-left', $('.tag-list').width());
    }, 
    watch: {
        tags (newVal){
            this.tagsVal = newVal.join(' ');
        }
    },
    mounted (){
        this.init = true;

        // 获取url参数
        this.catalog_id = this.$url.getUrlParam('catalog_id') || -1;

        this.getLabelList(this.tagNumber);

        // 获取文章目录详情
        if (this.catalog_id != -1) {
            this.getCatalogDetail();
        }
    }
}
</script>

