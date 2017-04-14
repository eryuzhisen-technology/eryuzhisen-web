<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-artice-read;

.@{module} {
    position: relative;
    padding-top: 20px;
    padding-bottom: 40px;
    .default_backgroud_5;
    & &-wrap {
        .default_width_960;
        .default_mar_auto;    
    }
}
.@{module}__content {
    width: 720px;
    min-height: 500px;
    margin-bottom: 30px;
    & .content__header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 40px;
        .default_border-b-5;
        .default_backgroud_2;
        & h1,
        & p {
            float: left;
            height: 60px;
            line-height: 60px;
        }
        & h1 {
            .default_font_size_4;
            .default_color_7;
            .default_font_family_bolder;
        }
        & p {
            margin-top: 2px;
            .default_font_size_3;
            .default_color_7;
        }
    }
    & .content__read{
        padding-top: 40px;
        .default_backgroud_3;
    }
    & .content__read-text {
        padding: 0 60px;
        & p {
            width: 100%;
            line-height: 1.75rem;
            text-indent: 2rem;
            margin-bottom: 30px;
            .default_font_size_3;
            .default_color_2;
        }
        & img {
            width: 100%;
            margin-bottom: 30px;
        }
    }
    & .content__read-over {
        margin-right: 50px;
        margin-top: 40px;
        margin-bottom: 60px;
        text-align: right;
        .default_font_size_3;
        .default_color_3;
    }
    & .content__read-switch {
        overflow: hidden;
        height: 80px;
        padding: 20px 0;
        .default_border-t-4;
        .default_border-b-4;
        & .switch-item {
            width: 50%;
            float: left;
            height: 40px;
            line-height: 40px;
            .default_color_2;
            .default_font_size_4;
            .default_center;
            & a {
                display: block;
                width: 100%;
                height: 100%;
                .default_color_2;
                .default_font_size_4;
                .default_center;
                text-decoration: none;
            }
        }
        & .switch-left {
            .default_border-r-4;
        }
    }
    & .content__read-author {
        height: 80px;
        padding-top: 25px;
        .default_center;
        & .author-img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            vertical-align: middle;
            .default_disline;
            .default_border-r-50;
            .default_backgroud_5;
        }
        & .author-name {
            height: 30px;
            line-height: 30px;
            vertical-align: middle;
            .default_disline;
            .default_color_3;
            .default_font_size_2;
        }
    }
}
.@{module}__menu {
    position: fixed;
    top: 170px; 
    left: 0;
    width: 220px;
    height: 540px;
    .default_backgroud_4;
    & .menu__header {
        width: 220px;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        .default_font_size_3;
        .default_color_3;
        .default_border-b-5;
        .default_backgroud_2;
    }
    & .menu__content {
        height: 480px;
        overflow-y: auto;
    }
    & .menu__content-item {
        position: relative;
        width: 100%;
        height: 60px;
        .default_backgroud_4;
        & a {
            display: block;
            width: 100%;
            height: 60px;
            line-height: 60px;
            .default_center;
            .default_font_size_3;
            .default_color_2;
            text-decoration: none;
            &:hover {
                .default_color_1;
            }
        }
        &.z-on {
            .default_backgroud_8;
            .default_color_1;
            .default_border_shadow_1;
        }
    }
}
.@{module}__comment {
    width: 720px;
    margin-bottom: 30px;
    .default_backgroud_3;
    & .comment-header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 30px;
        .default_border-b-5;
        .default_backgroud_2;
        .default_font_size_3;
        .default_color_3;
        & span {
            margin-top: 2px;
            .default_font_size_3;
            .default_color_7;
        }
    }
    & .comment-content {
        padding: 0 60px;
    }
}
.@{module}__speak {
    width: 720px;
    margin-top: 60px;
    & .speak-header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 30px;
        .default_border-b-5;
        .default_backgroud_2;
        .default_font_size_3; 
        .default_color_3;
        & span {
            margin-top: 2px;
            .default_font_size_1;
        }
    }
    & .speak-form {
        height: 220px;
        width: 100&;
        padding: 30px 50px;
        .default_backgroud_4;
    }
    & .speak-form-top {
        overflow: hidden;
        margin-bottom: 20px;
    }
    & .speak-form-item {
        float: left;
    }
    & .speak-form-input {
        display: none;
        padding: 11px 20px;
        width: 300px;
        height: 40px;
        margin-right: 20px;
    }
    & .speak-form-textarea {
        padding: 12px 20px;
        width: 300px;
        height: 100px;
        margin-right: 24px;
    }
    & .speak-form-icon {
        padding-top: 10px;
        height: 40px;
        margin-right: 12px;
        .default_font_size_2;
        & span,
        & em {
            .default_disline;
            vertical-align: middle;
        }
        & em {
            width: 20px;
            height: 20px;
        }
    }
    & .speak-form-fabulous {
        & em {
            .skin_icon_fabulous;
        }
        & span {
            .default_color_7;
        }
    }
    & .speak-form-mark {
        & em {
            .skin_icon_mark;
        }
        & span {
            .default_color_9;
        }
    }
    & .speak-form-comment {
        & em {
            .skin_icon_comment;
        }
        & span {
            .default_color_3;
        }
    }
    & .speak-form-share {
        float: right;
    }
    &.z-small {
        position: fixed;
        bottom: 0;
        left: 0;
        & .speak-header {
            display: none;
        }
    }
    &.z-hide{
        & .speak-header {
            display: none;
        }
        & .speak-form {
            padding: 10px 50px;
            height: 60px;
            overflow: hidden;
            .default_border-t-5;
        }
        & .speak-form-textarea {
            display: none;
        }
        & .speak-form-input {
            display: block;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div>
    <HeaderDom :data="header" />
    <div class="m-artice-read">
    <div class="m-artice-read-wrap">
        <div class="m-artice-read__content">
            <div class="content__header">
                <h1>黑暗小巷的尽头</h1>
                <!-- <p>·杀戮的漩涡</p> -->
            </div>
            <div class="content__read">
                <div class="content__read-text">
                    <p>传说中，天狗长着红色的脸和长长的鼻子，身材高大、穿着修验僧服和高齿木屐，手持团扇、宝槌，身后长着翅膀能够在天上飞翔。通常隐居深山，是力量型的妖怪。</p>
                    <p>有关天狗最早的文献记录见于《日本书纪》，舒明天皇九年2月（公元637年）有火流星挟怪声破空而来，自唐朝留学而归的僧人旻见状说道：“非流星，是天狗也，其吠声，似雷也”。</p>
                    <img src="../../common/images/user/user-bg-01.jpg" />
                    <p>传说中，天狗长着红色的脸和长长的鼻子，身材高大、穿着修验僧服和高齿木屐，手持团扇、宝槌，身后长着翅膀能够在天上飞翔。通常隐居深山，是力量型的妖怪。</p>
                    <p>有关天狗最早的文献记录见于《日本书纪》，舒明天皇九年2月（公元637年）有火流星挟怪声破空而来，自唐朝留学而归的僧人旻见状说道：“非流星，是天狗也，其吠声，似雷也”。</p>
                    <img src="../../common/images/user/user-bg-01.jpg" />
                </div>
                <!-- <div class="content__read-over">
                    本章完 2016.10.23
                </div> -->
                <div class="content__read-switch">
                    <div class="switch-item switch-left"><a href="#none">上一篇</a></div>
                    <div class="switch-item switch-right"><a href="#none">下一篇</a></div>
                </div>
                <div class="content__read-author">
                    <div class="author-img"></div>
                    <div class="author-name">奇昊大本营</div>
                </div>
            </div>
        </div>
        <div class="m-artice-read__comment">
            <div class="comment-header">
                共 <span>98</span> 条评论
            </div>
            <div class="comment-content">
                <ArticleCommentDom v-for="(item, index) in articleComment" :data="item" :key="index" />
            </div>
        </div>
        <Page 
            class="z-width"
            :count="count" 
            :length="pageSize"
            :index="pageIndex"
            @page_switch="pageSwitch"
        />
        <div class="m-artice-read__speak">
            <div class="speak-header">参与评论</div>
            <div class="speak-form">
                <div class="speak-form-top">
                    <div class="speak-form-item speak-form-input cpm_form_input">
                        <input @focus="inputFocus" type="text" placeholder="发表评论..." />
                    </div>
                    <div class="speak-form-item speak-form-textarea cpm_form_textarea">
                        <textarea @blur="textareaBlur"  placeholder="发表评论..."></textarea>
                    </div>
                    <div class="speak-form-item  speak-form-icon speak-form-fabulous">
                        <em></em>
                        <span>98</span>
                    </div>
                    <div class="speak-form-item speak-form-icon speak-form-mark">
                        <em></em>
                        <span>142</span>
                    </div>
                    <div class="speak-form-item speak-form-icon speak-form-comment">
                        <em></em>
                        <span>142</span>
                    </div>
                    <div class="speak-form-item speak-form-share cpm_button_default">分享</div>
                </div>
                <div class="speak-form-bottom">
                    <div class="cpm_button_default">提交</div>
                </div>
            </div>
        </div>
        <div class="m-artice-read__menu">
            <div class="menu__header">作品目录</div>
            <div class="menu__content">
                <div v-for="(item, index) in menu" class="menu__content-item" :class="{'z-on': menuIndex == index}"><a href="#none">{{(index + 1) + '. ' + item}}</a></div>
            </div>
        </div>
    </div>
    </div>
    <FooterDom />
    <SideMenu />
    <Bubble />
</div>
</template>

<script>
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ArticleCommentDom from '../../component/article.comment.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
export default {
    components: {
        HeaderDom: HeaderDom,
        ArticleCommentDom: ArticleCommentDom,
        FooterDom: FooterDom,
        Page: Page,
        Bubble: bubble,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        Empty: Empty
    },
    data () {
        return {
            header: {

            },
            menuIndex: 4,
            menu: [
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去',
                '走过来走过去'
            ],
            pageSize: 5,
            pageIndex: 2,
            count: 100,
            articleComment: [
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
                },
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
                },
                {
                    name: '奇昊大本营',
                    time: '2小时前',
                    avartar: '',
                    text: '我哈哈大笑，准备继续调戏一番却发现这小妞的一对漂亮的眸子里似乎闪烁着泪光。糟糕！玩过火了......我吓了一跳。',
                    fabulous: 23,
                    hasFabulous: false,
                    record: [
                        {
                            text: '<strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '50分钟前'
                        },
                        {
                            text: '<span>奇昊大本营</span> 回复 <strong>【作者】</strong><span>爱吃冰棒的鱼</span>：认真点看，挺恐怖的，我看了10多秒就不敢看了,不敢看了,不敢看了,不敢看了,不敢看了,不敢看了。',
                            time: '1小时前'
                        }
                    ],
                    recordNumber: 100
                }
            ]
        }
    },
    methods: {
        changeType (type){
            this.menuLeftType = type;
        },
        resize () {
            var left = $('.m-artice-read-wrap').offset().left;
            $('.m-artice-read__speak').css({
                left: left
            })

            $('.m-artice-read__menu').css({
                left: left + 720 + 30
            })
        },
        speak (init){
            var top = $('.m-artice-read__comment').offset().top;
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            if (top < scrollTop + height) {
                $('.m-artice-read__speak').removeClass('z-small z-hide');
            } else {
                $('.m-artice-read__speak').addClass('z-small z-hide');
            }
        },
        inputFocus (){
            $('.m-artice-read__speak').removeClass('z-hide');
            $('.m-artice-read__speak .speak-form-textarea textarea').focus();
        },
        textareaBlur (){
            this.speak();
        },
        pageSwitch (){}
    },
    mounted (){
        this.resize();
        this.speak(true);
        $(window).on('resize', () => (this.resize() && this.speak()));
        $(window).on('scroll', () => this.speak());
    },

    
}
</script>

