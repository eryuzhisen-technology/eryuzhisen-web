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
				<div class="content m-about">
					<p class="img"><img src="../../common/images/company/logo.png" /></p>
                    <p class="text">耳语之森是国内首个以「 怪诞」为主题的原创文学平台，目前承有悬疑推理、科学幻想、惊悚怪谈三大内容，为渴望神秘的你量身打造。身为「 作者」，你再无须抱怨内心奇特的世界无人欣赏；作为「读者」，你再无须担心吊诡精怪的嗜好无处交流。</p>
                    <p class="text">与主流文学平台不同，在平庸的大众潮流中保持独特品味，诠释散落黑暗角落间孤寂的审美，是我们创办耳语之森的理念，希望你在这幽幽魑魅的环境中，找到属于你的故事，品尝「怪诞」直抵心灵的摧毁力，抑或百般婉转缠绵的妩媚纤柔。</p>
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
			menuTopType: 'about',
			menuTop: {
                about: {
                    title: '关于我们',
                    url: 'about.html',
					isActive:true
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
                    url: 'contact.html'
                }
            }
    	}
    },
    methods: {

    },

}
</script>

