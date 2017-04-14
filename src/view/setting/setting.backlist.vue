<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-setting-backlist;

    .@{module} {
    	padding-top: 20px;
    	padding-bottom: 80px;
        .default_backgroud_5;
        & &-wrap {
            .default_width_960;
            .default_mar_auto;
        }
    }
    .@{module}-content {
    	position: relative;
    	overflow: hidden;
        .default_mar_auto;
    	& .setting-right {
    		width: 720px;
    		margin-left: 240px;
    		& .title {
    			width: 100%;
    			height: 60px;
    			padding-left: 20px;
    			padding-top: 22px;
    			.default_font_size_3;
    			.default_color_4;
    			.default_backgroud_2;
    		}
            & .content {
                margin-bottom: 30px;
                .default_backgroud_3;
                & .content-wrap {
                    & .c-author-list:last-child .c-author-list-wrap {
                        .default_border-n;
                    }
                }
            }
    	}
    }
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
    <div class="m-setting-backlist">
	<div class="m-setting-backlist-wrap">
		<div class="m-setting-backlist-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="setting-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
                <div class="content">
				<div class="content-wrap">
                    <AuthorDom 
                        v-for="(item, index) in authors" 
                        :data="item" 
                        :key="index" 
                        @delBlack="delBlack"
                    />
                    <Empty class="content-empty" v-if="count <= 0" />
                </div>
				</div>
                <Page 
                    :count="count" 
                    :length="pageSize"
                    :index="pageIndex"
                    @page_switch="pageSwitch"
                />
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
import AuthorDom from '../../component/author.list.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble'
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
export default {
    components: {
        HeaderDom: HeaderDom,
        FooterDom: FooterDom,
        MenuLeft: MenuLeft,
        SideMenu: SideMenu,
        Bubble: bubble,
        Page: Page,
        Empty: Empty,
        AuthorDom: AuthorDom
    },
    data () {
    	return {
            header: {
                page: ''
            },
    		menuLeftType: 'backlist',
    		menuLeft: {
    			userinfo: {
                    title: '基本资料',
                    url: 'setting.userinfo.html'
                },
    			password: {
                    title: '密码安全',
                    url: 'setting.password.html'
                },
    			phone: {
                    title: '手机号',
                    url: 'setting.phone.html'
                },
    			backlist: {
                    title: '黑名单',
                    url: 'setting.backlist.html'
                }
    		},
            
            count: 0,
            pageSize: 5,
            pageIndex: 1,
            authors: []
    	}
    },
    methods: {
        getBlackList (){
            this.$store.dispatch('user_getBlackList', {
                pageSize: this.pageSize,
                pageIndex: this.pageIndex
            }).then( res => {
                this.count = res.page_info.total_count;
                this.authors = res.list;

            }).catch( res => {
                console.log(res)
                // 未登录
                if (res.ret == -10) {
                    return false;
                }
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            }); 
        },
        pageSwitch (pageIndex){
            this.pageIndex = pageIndex;
            this.getBlackList();
        },
        delBlack (userId){
            this.$store.dispatch('user_delBlack', {
                userId: userId
            }).then( res => {
                this.getBlackList();
            }).catch( res => {
                console.log(res)
                // 未登录
                if (res.ret == -10) {
                    return false;
                }
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            }); 
        }
    },
    mounted (){
        this.getBlackList();
    }
}
</script>

