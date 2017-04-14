<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './company.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom  :data="header" />
    <div class="m-company">
	<div class="m-company-wrap">
		<div class="m-company-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" @typeswitch="changeType" />
			<div class="company-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="content m-contact">
                    <div class="item">
                        <div class="item-title">商务合作</div>
                        <div class="item-text">邮箱：business@eryuzhisen.com</div>
                    </div>
                    <div class="item">
                        <div class="item-title">客服联系</div>
                        <div class="item-text">邮箱：server@eryuzhisen.com</div>
                    </div>
				</div>
			</div>
		</div>
    </div>
	</div>
	<FooterDom />
	<SideMenu />
</div>
</template>

<script>
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.list.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
export default {
    data () {
    	return {
            header: {
                
            },
    		menuLeftType: 'contact',
            menuLeft: {
                about: {
                    title: '关于我们',
                    url: 'about.html'
                },
                xieyi: {
                    title: '用户协议',
                    url: 'about.html'
                },
                yinsi: {
                    title: '隐私政策',
                    url: 'about.html'
                },
                chanquan: {
                    title: '知识全产',
                    url: 'about.html'
                },
                jubao: {
                    title: '侵权举报',
                    url: 'about.html'
                },
                shengming: {
                    title: '免责声明',
                    url: 'about.html'
                },
                contact: {
                    title: '联系我们',
                    url: 'contact.html'
                }
            }
    	}
    },
    methods: {
    	changeType (type){
    		this.menuLeftType = type;
    	}
    },
    components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	ListDom: ListDom,
        MenuLeft: MenuLeft,
    	SideMenu: SideMenu
    }
}
</script>

