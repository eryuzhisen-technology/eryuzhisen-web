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
            width: 660px;
            transform: translate(-50%, -50%);
        }
    }
    .@{module}__create {
        width: 100%;
        & .create-top {
            width: 100%;
            padding: 20px;
            .default_backgroud_3;
            .default_border-r-4;
            & .create-top-left {
                width: 210px;
                margin-right: 20px;
                .default_float_l;
                .default_border-r-4;
                & .create-top-left-img {
                    position: relative;
                    width: 220px;
                    height: 330px;
                    .default_backgroud_5;
                    & .img {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        & img {
                            width: 100%;
                        }
                    }
                    & .mask {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 220px;
                        height: 330px;
                        line-height: 330px;
                        opacity: 0;
                        transition: opacity @default_speed_1;
                        background-color: rgba(0,0,0,0.6);
                        .default_center;
                        .default_color_1;
                        .default_font_size_7;
                        .default_font_bolder;
                        .default_pointer;
                        &:hover {
                            opacity: 1;
                            .skin_icon_author-6_on;
                        }
                    }
                    & .c-dialog__tip {
                        transform: translate(-115%, 0);
                    }
                }
                & .create-top-left-text {
                    width: 220px;
                    height: 40px;
                    line-height: 40px;
                    .default_backgroud_2;
                    .default_font_size_1;
                    .default_color_2;
                    .default_center;
                }
            }
            & .create-top-right {
                width: 380px;
                .default_float_l;
                & .create-top-item {
                    width: 380px;
                    height: 50px;
                    margin-bottom: 10px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    &.z-mini {
                        height: 40px;
                    }
                }
                & .create-top-input {
                    position: relative;
                    width: 100%;
                    height: 50px;
                    &.create-top-oldimg {
                        position: relative;
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        padding: 0 20px;
                        font-size: 14px;
                        border: 1px solid #232323;
                        border-radius: 4px;
                        .default_backgroud_4;
                        & span {
                            display: block;
                            float: left;
                            width: 16px;
                            height: 16px;
                            margin-top: 15px;
                            margin-right: 10px;
                            .skin_icon_edit-12;
                            .default_pointer;
                            &:hover {
                                .skin_icon_edit-12_on;
                            }
                        }
                        & input {
                            float: left;
                            width: 300px;
                            height: 48px;
                            line-height: 48px;
                            .default_color_4;
                        }
                    }
                }
                & .create-top-name,
                & .create-top-old {
                    & .c-dialog__tip {
                        transform: translate(395px, 0);
                    }
                }
                & .create-top-select {
                    position: relative;
                    float: left;
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    margin-left: 10px;
                    .default_border-13;
                    .default_border-r-4;
                    .default_backgroud_4;
                    .default_color_2;
                    .default_font_size_2;
                    .default_center;
                    .default_pointer;
                    & span {
                        .default_disline;
                        vertical-align: middle;
                    }
                    & .c-dialog__tip {
                        width: 200px;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                    &:first-child .c-dialog__tip {
                        transform: translate(-110%, 0);
                    }
                    &.create-top-share .c-dialog__tip {
                        transform: translate(205px, 0);
                    }
                    &.create-top-level .c-dialog__tip {
                        width: 220px;
                        transform: translate(140px, 0);
                    }
                    &.create-top-status .c-dialog__tip {
                        width: 200px;
                    }
                    &.z-active .cpm_sub_more {
                        display: block;
                    }
                    &.z-width {
                        width: 185px;
                    }
                }
                & .create-top-tagsInput {
                    position: relative;
                    height: 50px;
                    & .tag-wrap {
                        position: relative;
                        width: 100%;
                        height: 50px;
                    }
                    & .tag-list {
                        position: absolute;
                        top: 10px;
                        left: 20px;
                        height: 50px;
                        & .tag-item {
                            position: relative;
                            display: inline-block;
                            height: 30px;
                            line-height: 30px;
                            padding: 0 10px 0 12px;
                            margin-right: 10px;
                            border-radius: 15px;
                            .default_color_2;
                            .default_font_size_2;
                            .default_backgroud_3;
                            .default_center;
                            .default_middle;
                            & .tag-item-text {
                                float: left;
                                height: 30px;
                                line-height: 30px;
                                margin-right: 6px;
                            }
                            & em {
                                float: left;
                                display: block;
                                width: 16px;
                                height: 16px;
                                margin-top: 7px;
                                .skin_icon_edit-15;
                                .default_pointer;
                            }
                        }
                    }
                    & .tag-edit {
                        display: inline-block;
                        height: 50px;
                        line-height: 50px;
                        padding: 10px 0 10px 20px;
                        .default_color_2;
                        // .default_border-n!important;
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
                    top: 53px;
                    left: 0;
                    z-index: 4;
                    width: 100%;
                    overflow: hidden;
                    .default_border-r-4;
                    .default_border_shadow_3;
                    .default_border_shadow_5;
                    & .create-tags-select-title {
                        position: relative;
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
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
                            .default_pointer;
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
                    height: 150px;
                    width: 100%;
                    & .c-dialog__tip {
                        transform: translate(415px, 0);
                    }
                }
            }
            & .create-top-agree {
                height: 20px;
                overflow: hidden;
                margin-top: 20px;
                & em {
                    float: left;
                    display: block;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    overflow: hidden;
                    .default_backgroud_4;
                    .default_border-r-4;
                    .default_middle;
                }
                & p {
                    float: left;
                    display: block;
                    height: 20px;
                    line-height: 20px;
                    .default_float_l;
                    .default_color_2;
                    .default_font_size_1;
                    & a {
                        .default_color_1;
                    }
                }
                &.z-on {
                    & em {
                        .default_select_bg_01;
                    }
                }
            }
        }
        & .create-bottom {
            width: 100%;
            height: 50px;
            & .create-bottom-btn {
                width: 100%;
                height: 50px;
                padding: 10px 0;
                overflow: hidden;
                .default_backgroud_7;
                & .create-bottom-item {
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    .default_color_2;
                    .default_font_size_2;
                    .default_pointer;
                    &:hover {
                        .default_color_1;
                    }
                }
                & .create-bottom-cancel {
                    width: 50%;
                    .default_border-rr-2;
                }
                & .create-bottom-commit {
                    width: 50%;
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div v-if="show" class="c-artice-edit">
<div class="c-artice-edit-mask">
<div class="c-artice-edit-wrap">
    <div class="c-artice-edit__create">
        <div class="create-top">
            <div class='create-top-left'>
                <div class="create-top-left-img">
                    <div v-if="!reg_img" class="c-dialog__tip">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_img_con}}</div>
                    </div>
                    <div class="img">
                        <div class="mask" id="article_upload_image_select">添加封面</div>
                        <img v-if="image" :src="image" />
                    </div>
                    <UploadImg 
                        type="2" 
                        select="article_upload_image_select"
                        container="article_container"
                        @uploadImg_uploaded="uploaded"
                    />
                </div>
                <div class="create-top-left-text">添加封面：建议360X480以上</div>
            </div>
            <div class='create-top-right'>
            <!-- 名称 -->
                <div class="create-top-item create-top-input create-top-name cpm_form_input" :class="{'z-limit': articlename.length>30}">
                    <div v-if="!reg_name" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_name_con}}</div>
                    </div>
                    <input type="text" placeholder="作品名称" v-model="articlename" @focus="focus" @blur="blur" />
                    <!-- <span>{{articlename.length}}/10</span> -->
                </div>
            <!-- 授权 -->
            <!-- 转载 -->
                <div class="create-top-item z-mini">
                    <div @mouseover="selctEnter" @mouseout="selctOut" class="create-top-select create-top-control z-width j-close-1">
                        <div v-if="!reg_control" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_control_con}}</div>
                        </div>
                        <span>{{control}}</span>
                        <div class="c-sub-more cpm_sub_more">
                            <div class="item" @click="controlShowValue" data-control_id="1">是</div>
                            <div class="item" @click="controlShowValue" data-control_id="0">否</div>
                        </div>
                    </div>
                    <div @mouseover="selctEnter" @mouseout="selctOut" class="create-top-select create-top-share z-width j-close-1">
                        <div v-if="!reg_share" class="c-dialog__tip z-right">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_share_con}}</div>
                        </div>
                        <span>{{share}}</span>
                        <div class="c-sub-more cpm_sub_more">
                            <div class="item" @click="shareShowValue" data-share_id="1">是</div>
                            <div class="item" @click="shareShowValue" data-share_id="0">否</div>
                        </div>
                    </div>
                </div>
            <!-- 授权信息填写 -->
                <div v-if="control_id == 1" class="create-top-item create-top-input create-top-old create-top-oldname cpm_form_input">
                    <div v-if="!reg_old_name" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_old_name_con}}</div>
                    </div>
                    <input type="text" placeholder="原作品故事名字" v-model="oldname" @focus="focus" @blur="blur" />
                </div>
                <div v-if="control_id == 1" class="create-top-item create-top-input create-top-old create-top-oldauthor cpm_form_input">
                    <div v-if="!reg_old_author" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_old_author_con}}</div>
                    </div>
                    <input type="text" placeholder="原作者" v-model="oldauthor" @focus="focus" @blur="blur" />
                </div>
                <div v-if="control_id == 1" class="create-top-item create-top-input create-top-old create-top-oldurl cpm_form_input">
                    <div v-if="!reg_old_url" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_old_url_con}}</div>
                    </div>
                    <input type="text" placeholder="原作品连接" v-model="oldurl" @focus="focus" @blur="blur" />
                </div>
                <div v-if="control_id == 1" class="create-top-item create-top-input create-top-old create-top-oldimg">
                    <div v-if="!reg_old_img" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_old_img_con}}</div>
                    </div>
                    <span id="old_upload_image_select"></span>
                    <input type="text" disabled placeholder="上传翻译授权截图证明" v-model="oldimgname" />
                    <UploadImg 
                        type="2"
                        select="old_upload_image_select"
                        container="old_container"
                        @uploadImg_uploaded="old_uploaded"
                    />
                </div>
            <!-- 类型 -->
            <!-- 状态 -->
            <!-- 等级 -->
                <div class="create-top-item z-mini">
                    <div @mouseover="selctEnter" @mouseout="selctOut" class="create-top-select create-top-type j-close-1">
                        <div v-if="!reg_type" class="c-dialog__tip">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_type_con}}</div>
                        </div>
                        <span>{{articletype}}</span>
                        <div class="c-sub-more cpm_sub_more">
                            <div class="item" v-for="item in category.laberSubnode" @click="typeShowValue" :data-id="item.category_id">{{item.category_title}}</div>
                        </div>
                    </div>
                    <div @mouseover="selctEnter" @mouseout="selctOut" class="create-top-select create-top-status j-close-1">
                        <div v-if="!reg_status" class="c-dialog__tip z-top">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_status_con}}</div>
                        </div>
                        <span>{{status}}</span>
                        <div v-if="catalog.statusArr.length" class="c-sub-more cpm_sub_more">
                            <div class="item" v-for="item in catalog.statusArr" @click="statusShowValue" :data-audit_status="item.audit_status">{{item.text}}</div>
                        </div>
                    </div>
                    <div @mouseover="selctEnter" @mouseout="selctOut" class="create-top-select create-top-level j-close-1">
                        <div v-if="!reg_level" class="c-dialog__tip z-right">
                            <div class="tip-arrow"></div>
                            <div class="tip-text">{{reg_level_con}}</div>
                        </div>
                        <span>{{level}}</span>
                        <div v-if="catalog.levelArr.length" class="c-sub-more cpm_sub_more">
                            <div class="item" v-for="item in catalog.levelArr" @click="levelShowValue" :data-level_id="item.level_id">{{item.text}}</div>
                        </div>
                    </div>
                </div>
            <!-- 标签 -->
                <div class="create-top-item create-top-tagsInput j-close-2" @click="tagsshowOpen">
                    <div v-if="!reg_tag" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_tag_con}}</div>
                    </div>
                    <div class="tag-wrap cpm_form_input" :class="{'z-limit': tags.length>3, 'z-error': tagsshow}">
                        <div class="tag-list">
                            <div class="tag-item" v-for="(item, index) in tags"><div class="tag-item-text">{{item}}</div><em @click.stop="deleteTag" :data-index="index"></em></div>
                        </div>
                        <input class="tag-edit" @keyup.enter.stop.prevent="enter" @keyup.space.stop.prevent="enter" type="text" v-model="tagsVal" :placeholder="tags.length ? '' : '多个标签用空格区分'" />
                        <!-- <span>{{tags.length}}/3</span> -->
                    </div>

                    <div v-if="tagsshow" class="create-tags-select">
                        <div class="create-tags-select-title">
                            <span>热门标签</span>
                            <em @click="refresh"></em>
                        </div>
                        <div class="create-tags-select-body">
                            <div v-for="item in category.tags" @click="tagsSelect" class="body-item" :class="{'z-select': tags.indexOf(item) > -1}">{{item}}</div>
                        </div>
                    </div>
                </div>
            <!-- 介绍 -->
                <div class="create-top-item create-top-form cpm_form_textarea" :class="{'z-limit': intro.length>1000}">
                    <div v-if="!reg_intro" class="c-dialog__tip z-right">
                        <div class="tip-arrow"></div>
                        <div class="tip-text">{{reg_intro_con}}</div>
                    </div>
                    <textarea placeholder="填写作品简介..." v-model="intro" @focus="focus" @blur="blur"></textarea>
                    <!-- <span>{{intro.length}}/100</span> -->
                </div>
            </div>
            <div class="cpm_clear"></div>
            <div class="create-top-agree" :class="{'z-on': agree}">
                <em @click="agreeSwitch"></em>
                <p @click="agreeSwitch">我已阅读并同意遵守 <a href='./about.html'>《耳语之森原创声明及相关功能使用协议》 </a>
                </p>
            </div>
        </div>
        <div class="create-bottom">
            
            <div class="create-bottom-btn z-on">
                <div class="create-bottom-item create-bottom-cancel" @click="cancel">取消</div>
                <div class="create-bottom-item create-bottom-commit" @click="save">
                    <span>{{create ? '更新作品' : '创建新作品'}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import image from '../common/images/img/catalog.png';
export default {
    data (){
        return {
            show: false,
            tagsshow: false,
            create: false,

            image: image,
            articlename: '',
            control: '翻译授权',
            control_id: -1,
            oldname: '',
            oldimg: '',
            oldimgname: '',
            oldurl: '',
            oldauthor: '',
            share: '允许转载',
            share_id: -1,
            articletype: '类型',
            status: '状态',
            level: '等级',
            category_id: -1,
            audit_status: -1,
            level_id: -1,
            tags: [],
            tagsVal: '',
            intro: '',
            agree: true,

            reg_img: true,
            reg_name: true,
            reg_type: true,
            reg_control: true,
            reg_old_name: true,
            reg_old_url: true,
            reg_old_author: true,
            reg_old_img: true,
            reg_share: true,
            reg_status: true,
            reg_level: true,
            reg_tag: true,
            reg_intro: true,
            reg_img_con: '',
            reg_name_con: '',
            reg_control_con: '',
            reg_old_name_con: '',
            reg_old_url_con: '',
            reg_old_img_con: '',
            reg_old_author_con: '',
            reg_share_con: '',
            reg_type_con: '',
            reg_status_con: '',
            reg_level_con: '',
            reg_tag_con: '',
            reg_intro_con: '',

            // 随机标签
            count: 8
        }
    },
    props: ['resType'],
    computed: mapState({
        catalog: state => state.opus.catalog,
        category: state => state.opus.category
    }),
    methods: {
        focus (e){
            $(e.currentTarget).parents('.create-top-item').addClass('z-active');
        },
        blur (e){
            $(e.currentTarget).parents('.create-top-item').removeClass('z-active');
        },
        cancel (){
            this.show = false;
        },
        agreeSwitch (e) {
            this.agree = !this.agree;
        },
        selctEnter (e){
            $(e.currentTarget).addClass('z-active');
        },
        selctOut (e) {
            $(e.currentTarget).removeClass('z-active');  
        },
        typeShowValue (e){
            this.articletype = $(e.currentTarget).text();
            this.category_id = $(e.currentTarget).attr('data-id');
            $(e.currentTarget).parents('.create-top-select').removeClass('z-active');
        },
        statusShowValue (e){
            this.status = $(e.currentTarget).text();
            this.audit_status = $(e.currentTarget).attr('data-audit_status');
            $(e.currentTarget).parents('.create-top-select').removeClass('z-active');
        },
        levelShowValue (e){
            this.level = $(e.currentTarget).text();
            this.level_id = $(e.currentTarget).attr('data-level_id');
            $(e.currentTarget).parents('.create-top-select').removeClass('z-active');
        },
        controlShowValue (e){
            this.control = $(e.currentTarget).text();
            this.control_id = Number($(e.currentTarget).attr('data-control_id'));
            $(e.currentTarget).parents('.create-top-select').removeClass('z-active');
        },
        shareShowValue (e){
            this.share = $(e.currentTarget).text();
            this.share_id = Number($(e.currentTarget).attr('data-share_id'));
            $(e.currentTarget).parents('.create-top-select').removeClass('z-active');
        },
        tagsshowOpen (e){
            this.tagsshow = true;
            var node = e.currentTarget;
                node = $(node);
            node.find('input').focus();
            setTimeout(()=>{
                node.find('input').focus();
            }, 20)
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
            
            this.tagsVal = $.trim(this.tagsVal);
            var text = this.tagsVal;
            if ($.trim(text) == '') {
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
            if ($.trim(text).length > 5) {
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
            this.tags.push(text);
            this.tagsVal = '';
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
            this.image = fileUrl;
        },
        old_uploaded (fileUrl, name){
            // 设置上传的图片
            this.oldimgname = name;
            this.oldimg = fileUrl;
        },
        save (){
            this.reg_img = true;
            this.reg_name = true;
            this.reg_type = true;
            this.reg_control = true;
            this.reg_old_name = true;
            this.reg_old_url = true;
            this.reg_old_author = true;
            this.reg_old_img = true;
            this.reg_share = true;
            this.reg_status = true;
            this.reg_level = true;
            this.reg_tag = true;
            this.reg_intro = true;

            // 是否上传照片
            if (!this.image || this.image == image) {
                this.reg_img = false;
                this.reg_img_con = '添加封面';
                return false;
            } else {
                this.reg_img = true;
                this.reg_img_con = '';
            }

            // 名字
            if (!$.trim(this.articlename)) {
                this.reg_name = false;
                this.reg_name_con = '填写30字中文以内故事名字';
                return false;
            } else if ($.trim(this.articlename).length > 30) {
                this.reg_name = false;
                this.reg_name_con = '超出最大30个字数';
                return false;
            } else {
                this.reg_name = true;
                this.reg_name_con = '';
            }

            // 授权
            if ($.trim(this.control_id) == -1) {
                this.reg_control = false;
                this.reg_control_con = '是否为翻译授权作品';
                return false;
            } else {
                this.reg_control = true;
                this.reg_control_con = '';
            }

            // 授权-名称
            if ($.trim(this.oldname) == '' && this.control_id == 1) {
                this.reg_old_name = false;
                this.reg_old_name_con = '填写原作品故事名';
                return false;
            } else {
                this.reg_old_name = true;
                this.reg_old_name_con = '';
            }

            // 授权-作者
            if ($.trim(this.oldauthor) == '' && this.control_id == 1) {
                this.reg_old_author = false;
                this.reg_old_author_con = '填写原作者';
                return false;
            } else {
                this.reg_old_author = true;
                this.reg_old_author_con = '';
            }

            // 授权-原作品连接
            if ($.trim(this.oldurl) == '' && this.control_id == 1) {
                this.reg_old_url = false;
                this.reg_old_url_con = '填写原作品连接';
                return false;
            } else {
                this.reg_old_url = true;
                this.reg_old_url_con = '';
            }

            // 授权-截图证明
            if ($.trim(this.oldimg) == '' && this.control_id == 1) {
                this.reg_old_img = false;
                this.reg_old_img_con = '上传翻译授权截图证明';
                return false;
            } else {
                this.reg_old_img = true;
                this.reg_old_img_con = '';
            }

            // 转载
            if ($.trim(this.share_id) == -1) {
                this.reg_share = false;
                this.reg_share_con = '是否允许他人复制和转载';
                return false;
            } else {
                this.reg_share = true;
                this.reg_share_con = '';
            }

            // 类型
            if ($.trim(this.category_id) == -1) {
                this.reg_type = false;
                this.reg_type_con = '类型选定不可更改';
                return false;
            } else {
                this.reg_type = true;
                this.reg_type_con = '';
            }

            // 状态
            if ($.trim(this.audit_status) == -1) {
                this.reg_status = false;
                this.reg_status_con = '连载完请及时更改便于推荐';
                return false;
            } else {
                this.reg_status = true;
                this.reg_status_con = '';
            }

            // 等级
            if ($.trim(this.level_id) == -1) {
                this.reg_level = false;
                this.reg_level_con = '关系到推荐强度选定不可更改';
                return false;
            } else {
                this.reg_level = true;
                this.reg_level_con = '';
            }

            // 标签
            if (!this.tags.length) {
                this.reg_tag = false;
                this.reg_tag_con = '填写3个以内标签于推荐';
                return false;
            } else if (this.tags.length > 3) {
                this.reg_tag = false;
                this.reg_tag_con = '超出3个标签个数';
                return false;
            } else {
                this.reg_tag = true;
                this.reg_tag_con = '';
            }

            // 作品介绍
            if (!$.trim(this.intro)) {
                this.reg_intro = false;
                this.reg_intro_con = '填写1000字中文以内简介';
                return false
            } else if ($.trim(this.intro).length > 1000) {
                this.reg_intro = false;
                this.reg_intro_con = '超出最大1000个字数';
                return false;
            } else {
                this.reg_intro = true;
                this.reg_intro_con = '';
            }

            // 协议勾选
            if (!this.agree) {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '请同意协议'
                    }
                })
                return false; 
            }

            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '再次确定创建故事?',
                    html: '<p>为了不被相关部门请喝茶，以及本着挖掘内容更加有深度、而不是单纯靠视觉博人眼球的作品的原则</p>' +
                    '<p>请确保你的封面和即将发布的章节中，没有涉及血腥、暴力、色情、政治等违规情节，否则不予推送首页，严重者删除内容或封号处理</p><a href="javascript:void(0);">《耳语之森原创声明及相关功能使用协议》 </a>',
                    comfireFn: function(){
                        that.addCatalog();
                    }
                },
            })
        },

        addCatalog (){
            var option = {
                "level": this.level_id, // 等级
                "translate": this.control_id, // 0 不是翻译类 1 翻译类
                "reprint": this.share_id, // 0 不允许转载 1 允许
                "category_id": this.category_id, // 类别id
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
                    msg = '创建故事成功！块更新章节吧！';
                }
                this.$eventHub.$emit('updateCatalog_success');
                this.show = false;

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
        },

        // 获取分类标签
        getCategoryList (){
            this.$store.dispatch('opus_getCategoryList', {}).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        // 获取标签
        getLabelList (number){
            this.$store.dispatch('opus_getLabelList', {
                // categoryId: this.category_id,
                count: number || this.count
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        refresh (){
            this.getLabelList();
        },
        refreshCatalog (){
            this.$eventHub.$emit('author_chapter_list_refresh');
        }
    },
    watch: {
        show (newVal){
            if (newVal) {
                // 获取分类标签
                this.getCategoryList();

                // 获取标签
                this.getLabelList();
            }
        }
    },
    updated (){
        var w = 0;
        $(".tag-item").each(function(){
            w += $(this).width() + 10;
        })
        $('.tag-edit').css('padding-left', w + 20);
    },
    mounted (){
        this.$eventHub.$on('getLabelList', option => {
            this.getLabelList(option.number);
        });

        this.$eventHub.$on('header_article_setShow', option => {
            this.show = option.show;

            if (option.catalog) {
                this.create = true;
                this.image = option.catalog.catalog_cover_url;
                this.articlename = option.catalog.catalog_title;
                this.category_id = option.catalog.category_id;
                this.catalog_id = option.catalog.catalog_id;
                this.articletype = option.catalog.category_title;
                this.audit_status = option.catalog.audit_status;
                this.level_id = option.catalog.level;
                this.intro = option.catalog.catalog_desc;
                this.share_id = option.catalog.reprint;
                this.share = option.catalog.reprint == 1 ? '是' : '否';
                this.control_id = option.catalog.translate;
                this.control = option.catalog.translate == 1 ? '是' : '否';
                if (option.catalog.authorize) {
                    this.oldname = option.catalog.authorize.original_title; 
                    this.oldauthor = option.catalog.authorize.original_author; 
                    this.oldimg = option.catalog.authorize.original_img_url; 
                    this.oldurl = option.catalog.authorize.original_url;
                }
              
                // 匹配标签
                this.tags = [];
                option.catalog.labels.map( (item, index) => {
                    this.tags.push(item);
                })

                // 匹配状态
                for (var i = 0, len = this.catalog.statusArr.length; i < len; i++) {
                    var item = this.catalog.statusArr[i];
                    if (this.audit_status == item.audit_status) {
                        this.status = item.text;
                    }
                }

                // 匹配等级 
                for (var i = 0, len = this.catalog.levelArr.length; i < len; i++) {
                    var item = this.catalog.levelArr[i];
                    if (this.level_id == item.level_id) {
                        this.level = item.text;
                    }
                }
            } else {
                this.create = false;
                this.image = image;
                this.articlename = '';
                this.category_id = -1;
                this.audit_status = -1;
                this.level_id = -1;
                this.intro = '';
                this.articletype = '类型';
                this.status = '状态';
                this.level = '等级';
                this.tags = [];

                this.control = '翻译授权';
                this.control_id = -1;
                this.oldname = '';
                this.oldimg = '';
                this.oldurl = '';
                this.oldauthor = '';
                this.share = '允许转载';
                this.share_id = -1;
            }
        })

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
                } else {
                    $('.j-close-2').find('.tag-edit').text('');
                }
            }
        })
    }
}
</script>

