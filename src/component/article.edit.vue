<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-artice-edit;
    .@{module} {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        & &-mask {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }
        & &-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            width: 720px;
            transform: translate(-50%, -50%);
        }
    }
    .@{module}__create {
        width: 100%;
        padding: 40px 30px;
        .default_backgroud_3;
        & .create-top {
            width: 100%;
            height: 380px;
            margin-bottom: 20px;
            & .create-top-left {
                width: 240px;
                height: 380px;
                margin-right: 20px;
                .default_float_l;
                & .create-top-left-img {
                    position: relative;
                    width: 240px;
                    height: 320px;
                    .default_backgroud_4;
                    .default_border-r-4;
                    & img {
                        width: 100%;
                    }
                    & span {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 60px;
                        height: 60px;
                        .default_border-r-50;
                        .skin_icon_upload_img;
                        .default_backgroud_7;
                        .default_pointer;
                    }
                    & .c-dialog__tip {
                        transform: translate(-115%, 0);
                    }
                }
                & .create-top-left-text {
                    width: 240px;
                    height: 60px;
                    line-height: 60px;
                    .default_backgroud_2;
                    .default_font_size_2;
                    .default_color_3;
                    .default_center;
                }
            }
            & .create-top-right {
                width: 400px;
                height: 380px;
                .default_float_l;
                & .create-top-item {
                    width: 400px;
                    height: 60px;
                    margin-bottom: 10px;
                }
                & .create-top-input {
                    padding: 21px 30px;
                    & input {
                        width: 300px;
                    }
                }
                & .create-top-name {
                    & .c-dialog__tip {
                        transform: translate(415px, 0);
                    }
                }
                & .create-top-select {
                    position: relative;
                    z-index: 2;
                    float: left;
                    width: 195px;
                    height: 60px;
                    line-height: 60px;
                    .default_border-5;
                    .default_border-r-4;
                    .default_backgroud_3;
                    .default_color_2;
                    .default_font_size_3;
                    .default_center;
                    .default_pointer;
                    & span {
                        .default_disline;
                        margin-right: 4px;
                        vertical-align: middle;
                    }
                    & em {
                        .default_disline;
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                        .skin_icon_select;
                    }
                    &:first-child {
                        margin-right: 10px;
                    }
                    &:hover {
                        em {
                            .skin_icon_select_on;
                        }
                    }
                    &:first-child {
                        & .c-dialog__tip {
                            transform: translate(-118%, 0);
                        }
                    }
                    &:last-child {
                        & .c-dialog__tip {
                            transform: translate(210px, 0);
                        }
                    }
                }
                & .create-top-tagsInput {
                    position: relative;
                    & .tag-list {
                        float: left;
                        height: 40px;
                        margin-left: 10px;
                        margin-top: 10px;
                        & .tag-item {
                            position: relative;
                            display: inline-block;
                            height: 40px;
                            line-height: 40px;
                            padding: 0 14px;
                            margin-right: 10px;
                            .default_color_2;
                            .default_font_size_2;
                            .default_backgroud_7;
                            .default_border-r-4;
                            .default_middle;
                            & .tag-item-text {
                                height: 40px;
                                line-height: 40px;
                            }
                            & em {
                                position: absolute;
                                top: -5px;
                                right: -5px;
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                .skin_icon_logout_on;
                                background-size: 10px 10px;
                                .default_pointer;
                            }
                        }
                    }
                    & .tag-edit {
                        display: inline-block;
                        height: 40px;
                        line-height: 40px;
                        padding-left: 20px;
                        .default_color_4;
                        .default_middle;
                    }
                    & .c-dialog__tip {
                        transform: translate(415px, 0);
                    }
                    & .cpm_form_input {
                        position: relative;
                        padding: 0;
                    }
                }
                & .create-tags-select {
                    position: absolute;
                    top: 63px;
                    left: 0;
                    z-index: 4;
                    width: 100%;
                    overflow: hidden;
                    .default_border-r-4;
                    .default_border_shadow_3;
                    & .create-tags-select-title {
                        position: relative;
                        width: 100%;
                        height: 60px;
                        line-height: 60px;
                        padding-left: 30px;
                        .default_backgroud_2;
                        .default_color_3;
                        .default_font_size_3;
                        & em {
                            position: absolute;
                            top: 50%;
                            right: 30px;
                            width: 20px;
                            height: 20px;
                            transform: translate(0, -50%);
                            .skin_icon_refresh;
                        }
                    }  
                    & .create-tags-select-body {
                        padding: 20px;
                        overflow: hidden;
                        .default_backgroud_3;
                        & .body-item {
                            padding: 13px 15px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            .default_color_3;
                            .default_float_l;
                            .default_backgroud_5;
                            .default_border-r-4;
                            .default_pointer;
                            &.z-select {
                                .default_backgroud_7;
                            }
                        }
                    }
                }
                & .create-top-form {
                    height: 170px;
                    & .c-dialog__tip {
                        transform: translate(415px, 0);
                    }
                }
            }
        }
        & .create-bottom {
            width: 100%;
            height: 130px;
            & .create-bottom-agree {
                height: 20px;
                overflow: hidden;
                margin-bottom: 20px;
                & em {
                    display: block;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    .default_float_l;
                    .skin_icon_agree;
                }
                & p {
                    display: block;
                    height: 20px;
                    line-height: 20px;
                    .default_float_l;
                    .default_color_3;
                    .default_font_size_1;
                    & a {
                        .default_color_1;
                    }
                }
                &.z-on {
                    & em {
                        .skin_icon_agree_on;
                    }
                }
            }
            & .create-bottom-btn {
                width: 100%;
                height: 60px;
                line-height: 60px;
                .default_mar_auto;
                & .create-bottom-cancel {
                    width: 100px;
                    height: 60px;
                    line-height: 60px;
                    margin-right: 10px;
                    .default_float_l;
                }
                & .create-bottom-commit {
                    width: 550px;
                    height: 60px;
                    line-height: 60px;
                    .default_float_r;
                    & span {
                        opacity: .5;
                    }
                    &.z-on span {
                        opacity: 1;
                    }
                }
            }
        }
    }
    .@{module}__edit {
        width: 100%;
        .default_border-r-4;
        .default_backgroud_4;
        overflow: hidden;
        & .edit-title {
            width: 100%;
            height: 80px;
            padding-top: 30px;
            padding-left: 40px;
            & .edit-title-t {
                float: left;
                margin-right: 5px;
                .default_color_3;
                .default_font_size_4;
                .default_bolder;
            }
            & .edit-title-h {
                float: left;
                & input {
                    .default_color_4;
                    .default_font_size_4;
                }
            }
        }
    }
    .@{module}__complete {
        width: 100%;
        padding: 60px 0;
        .default_backgroud_3;
        .default_center;
        & .complete-title {
            .default_color_3;
            .default_font_size_5;
            .default_bolder;
            margin-bottom: 30px;
            & span {
                .default_color_7;
                .default_font_family_bolder;
            }
        }
        & .complete-status {
            .default_color_6;
            .default_font_size_4;
            .default_font_family_bolder;
            margin-bottom: 30px;
        }
        & .complete-text {
            .default_color_2;
            .default_font_size_3;
            margin-bottom: 80px;
        }
        & .complete-share {
            .default_color_2;
            .default_font_size_3;
            margin-bottom: 40px;
            & .complete-share-item {
                display: inline-block;
                margin-right: 40px;
                .default_pointer;
                & em {
                    display: block;
                    width: 40px;
                    height: 40px;
                    .default_mar_auto;
                    margin-bottom: 10px;
                }
                & span {
                    display: block;
                    .default_color_3;
                    .default_font_size_2;
                }
                &:nth-child(1) em {
                    .skin_icon_edit_share_wx;
                }
                &:nth-child(2) em {
                    .skin_icon_edit_share_peng;
                }
                &:nth-child(3) em {
                    .skin_icon_edit_share_qq;
                }
                &:nth-child(4) em {
                    .skin_icon_edit_share_kong;
                }
                &:nth-child(5) em {
                    .skin_icon_edit_share_wb;
                }
                &:nth-child(6) {
                    margin-right: 0;
                    & em {
                        .skin_icon_edit_share_more;    
                    }
                }
            }
        }
        & .complete-btn {
            width: 300px;
            .default_disline;
        }
    }
</style>

<!-- html代码 -->
<template>
<div v-if="show" class="c-artice-edit">
<div class="c-artice-edit-mask">
<div class="c-artice-edit-wrap">
    <div v-if="step == 1" class="c-artice-edit__create">
        <div class="create-top">
            <div class='create-top-left'>
                <div class="create-top-left-img">
                    <div v-if="!reg_img" class="c-dialog__tip">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_img_con}}</div>
                    </div>
                    <img v-if="create.image" :src="create.image" />
                    <span id="article_upload_image_select"></span>
                    <UploadImg 
                        :type="type" 
                        :select="select"
                        :container="container"
                        @uploadImg_uploaded="uploaded" 
                    />
                </div>
                <div class="create-top-left-text">添加封面：建议360X480以上</div>
            </div>
            <div class='create-top-right'>
                <div class="create-top-item create-top-input create-top-name cpm_form_input" :class="{'z-limit': articlename.length>10}">
                    <div v-if="!reg_name" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_name_con}}</div>
                    </div>
                    <input type="text" placeholder="作品名称" v-model="articlename" />
                    <span>{{articlename.length}}/10</span>
                </div>
                <div class="create-top-item">
                    <div @click="typeShowSwitch" class="create-top-select j-close-1">
                        <div v-if="!reg_type" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_type_con}}</div>
                        </div>
                        <span>{{articletype}}</span>
                        <em></em>
                        <div v-if="create.typeArr.length" v-show="typeShow" class="c-sub-more cpm_sub_more z-center">
                            <div class="item" v-for="item in create.typeArr" @click="typeShowValue">{{item}}</div>
                        </div>
                    </div>
                    <div @click="statusShowSwitch" class="create-top-select j-close-1">
                        <div v-if="!reg_status" class="c-dialog__tip z-right">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_status_con}}</div>
                        </div>
                        <span>{{status}}</span>
                        <em></em>
                        <div v-if="create.statusArr.length" v-show="statusShow" class="c-sub-more cpm_sub_more z-center">
                            <div class="item" v-for="item in create.statusArr" @click="statusShowValue">{{item}}</div>
                        </div>
                    </div>
                </div>
                <div class="create-top-item create-top-tagsInput j-close-2" @click="tagsshowOpen">
                    <div v-if="!reg_tag" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_tag_con}}</div>
                    </div>
                    <div class="create-top-item cpm_form_input" :class="{'z-limit': tags.length>3, 'z-error': tagsshow}">
                        <div class="tag-list">
                            <div class="tag-item" v-for="(item, index) in tags"><div class="tag-item-text">{{item}}</div><em @click.stop="deleteTag" :data-index="index"></em></div>
                            <div class="tag-edit" contenteditable @keyup.enter="enter" @keyup.space="enter">{{tags.length ? '   ' : '填写标签便于推荐，多个标签用空格区分'}}</div>
                        </div>
                        <span>{{tags.length}}/3</span>
                    </div>

                    <div v-if="tagsshow" class="create-tags-select">
                        <div class="create-tags-select-title">
                            <span>热门标签</span>
                            <em></em>
                        </div>
                        <div class="create-tags-select-body">
                            <div v-for="item in create.tags" @click="tagsSelect" class="body-item" :class="{'z-select': tags.indexOf(item) > -1}">{{item}}</div>
                        </div>
                    </div>
                </div>
                <div class="create-top-item create-top-form cpm_form_textarea" :class="{'z-limit': intro.length>100}">
                    <div v-if="!reg_intro" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_intro_con}}</div>
                    </div>
                    <textarea placeholder="填写作品简介..." v-model="intro"></textarea>
                    <span>{{intro.length}}/100</span>
                </div>
            </div>
        </div>
        <div class="create-bottom">
            <div class="create-bottom-agree" :class="{'z-on': agree}" @click="agreeSwitch">
                <em></em>
                <p>我已阅读并同意遵守 <a href='#none'>《耳语之森原创声明及相关功能使用协议》 </a>
                </p>
            </div>
            <div class="create-bottom-btn z-on">
                <div class="create-bottom-cancel cpm_button_weak" @click="cancel">取消</div>
                <div class="create-bottom-commit cpm_button_default" @click="save"><span>创建新作品</span></div>
            </div>
        </div>
    </div>
    <div v-show="step == 2" class="c-artice-edit__edit">
        <div class="edit-title">
            <div class="edit-title-t">第3话</div>
            <div class="edit-title-h">
                <input type="text" placeholder="填写章节标题" />
            </div>
        </div>
        <div class="edit-body">
            <edit 
                v-model="editContent"
            />
        </div>
    </div>
    <div v-show="step == 3" class="c-artice-edit__complete">
        <div class="complete-title">第3话 <span>黎明前的沉默</span></div>
        <div class="complete-status">发布成功！</div>
        <div class="complete-text">我们审核后会推送至首页，但你可以先分享好友阅读</div>
        <div class="complete-share">
            <div class="complete-share-item">
                <em></em>
                <span>微信</span>
            </div>
            <div class="complete-share-item">
                <em></em>
                <span>朋友圈</span>
            </div>
            <div class="complete-share-item">
                <em></em>
                <span>企鹅</span>
            </div>
            <div class="complete-share-item">
                <em></em>
                <span>QQ空间</span>
            </div>
            <div class="complete-share-item">
                <em></em>
                <span>微博</span>
            </div>
            <div class="complete-share-item">
                <em></em>
                <span>更多</span>
            </div>
        </div>
        <div class="complete-btn cpm_button_default">查看作品</div>
    </div>
</div>
</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import uploadImg from './uploadImg'
import edit from './edit'
export default {
    components: {
        UploadImg: uploadImg,
        edit: edit
    },
    data (){
        return {
            type: 2, 
            select: 'article_upload_image_select',
            container: 'article_container',

            typeShow: false,
            statusShow: false,

            articlename: '',
            articletype: '类型',
            status: '状态',
            tagsshow: false,
            tags: [],
            intro: '',
            agree: true,

            reg_img: true,
            reg_name: true,
            reg_type: true,
            reg_status: true,
            reg_tag: true,
            reg_intro: true,
            reg_img_con: '错误了',
            reg_name_con: '错误了',
            reg_type_con: '错误了',
            reg_status_con: '错误了',
            reg_tag_con: '错误了',
            reg_intro_con: '错误了',

            editContent: '<p>123</p>'
        }
    },
    computed: mapState({
        show: state => state.article.show,
        step: state => state.article.step,
        create: state => state.article.create,
    }),
    methods: {
        agreeSwitch (e) {
            this.agree = !this.agree;
        },
        typeShowSwitch (){
            this.typeShow = !this.typeShow;
            this.statusShow = false;
        },
        statusShowSwitch (){
            this.statusShow = !this.statusShow;
            this.typeShow = false;
        },
        typeShowValue (e){
            this.articletype = $(e.currentTarget).text();
        },
        statusShowValue (e){
            this.status = $(e.currentTarget).text();
        },
        tagsshowOpen (e){
            this.tagsshow = true;
            var node = e.currentTarget;
                node = $(node);
            node.find('.tag-edit').text('');
        },
        deleteTag (e){
            var index = e.currentTarget.dataset['index'];
                index = Number(index);
            this.tags.splice(index, 1);
            return false;
        },
        enter (e){
            if (this.tags.length >= 3) {
                return false;
            }
            var node = e.currentTarget;
                node = $(node);

            var text = $.trim(node.text());
            this.tags.push(text);

            node.text('');
        },
        tagsSelect (e){
            var node = $(e.currentTarget);
            if (node.hasClass('z-select')) {
                return false;
            }
            if (this.tags.length >= 3) {
                return false;
            }
            var tag = node.text();
            this.tags.push(tag);
        },
        uploaded (fileUrl){
            // 设置上传的图片
            this.$store.dispatch('article_setState', {
                create: {
                    image: fileUrl
                }
            });
        },
        save (){
            // 是否上传照片
            if (!this.create.image) {
                this.reg_img = false;
                this.reg_img_con = '输入上传封面';
                return false;
            } else {
                this.reg_img = true;
                this.reg_img_con = '';
            }

            // 名字
            if (!$.trim(this.articlename)) {
                this.reg_name = false;
                this.reg_name_con = '输入作品名称';
                return false;
            } else if ($.trim(this.articlename).length > 10) {
                this.reg_name = false;
                this.reg_name_con = '作品名称超出长度';
                return false;
            } else {
                this.reg_name = true;
                this.reg_name_con = '';
            }

            // 类型
            if ($.trim(this.articletype) == '类型') {
                this.reg_type = false;
                this.reg_type_con = '选择类型';
                return false;
            } else {
                this.reg_type = true;
                this.reg_type_con = '';
            }

            // 状态
            if ($.trim(this.status) == '状态') {
                this.reg_status = false;
                this.reg_status_con = '选择类型';
                return false;
            } else {
                this.reg_status = true;
                this.reg_status_con = '';
            }

            // 标签
            if (!this.tags.length) {
                this.reg_tag = false;
                this.reg_tag_con = '输入作品标签';
                return false;
            } else if (this.tags.length > 3) {
                this.reg_tag = false;
                this.reg_tag_con = '作品标签超出个数';
                return false;
            } else {
                this.reg_tag = true;
                this.reg_tag_con = '';
            }

            // 作品介绍
            if (!$.trim(this.intro)) {
                this.reg_intro = false;
                this.reg_intro_con = '输入作品简介';
            } else if ($.trim(this.intro).length > 100) {
                this.reg_intro = false;
                this.reg_intro_con = '作品简介超出长度';
                return false;
            } else {
                this.reg_intro = true;
                this.reg_intro_con = '';
            }

            // 协议勾选
            if (!this.agree) {
                alert('请同意协议');
                return false;
            }

            this.$store.dispatch('article_setState', {
                step: 2
            });
        },
        cancel (){
            this.$store.dispatch('article_setState', {
                show: false
            });
        }
    },
    mounted (){
        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-1') && node.parents('.j-close-1').length == 0) {
                this.typeShow = false;
                this.statusShow = false;
            }
            if (!node.hasClass('j-close-2') && node.parents('.j-close-2').length == 0) {
                this.tagsshow = false;
                if (this.tags.length == 0) {
                   $('.j-close-2').find('.tag-edit').text('填写标签便于推荐，多个标签用空格区分');
                }
            }
        })

        // 初始化数据
        this.$store.dispatch('article_reset');
    }
}
</script>

