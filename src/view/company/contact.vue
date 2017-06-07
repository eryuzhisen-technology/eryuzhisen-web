<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './company.less';
</style>

<!-- html代码 -->
<template>
<div class="app-body">
	<HeaderDom />
    <div class="m-company">
	<div class="m-company-wrap">
		<div class="m-company-content">
			<MenuTop :data="menuTop" :type="menuTopType" />
			<div class="company-bottom">
				<div class="title">
					{{menuTop[menuTopType].title}}
				</div>
				<div class="content m-contact">
					<p class="text">QQ交流群:562204658</p>
					<p class="text">商务合作:business@eryuzhisen.com</p>
					<p class="text">客服联系:server@eryuzhisen.com</p>
					<!--<div class="item">
						<div class="item-title">QQ交流群</div>
						<div class="item-text">562204658</div>
					</div>
                    <div class="item">
                        <div class="item-title">商务合作</div>
                        <div class="item-text">business@eryuzhisen.com</div>
                    </div>
                    <div class="item">
                        <div class="item-title">客服联系</div>
                        <div class="item-text">server@eryuzhisen.com</div>
                    </div>-->
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
export default {
    data () {
    	return {
			menuTopType: 'contact',
			menuTop: {
				about: {
					title: '关于我们',
					url: 'about.html'
				},
				agreement: {
					title: '用户协议',
					url: 'agreement.html'
				},
				privacy: {
					title: '隐私政策',
					url: 'privacy.html'
				},
				statement: {
					title: '原创声明',
					url: 'statement.html'
				},
				standard: {
					title: '社区规范',
					url: 'standard.html'
				},
				contact: {
					title: '联系我们',
					url: 'contact.html',
					isActive:true
				}
			}
    	}
    },
    methods: {
    	changeType (type){
    		this.menuLeftType = type;
    	}
    }
}
</script>

