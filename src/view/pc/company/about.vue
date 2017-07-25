<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/common.less';
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
					<p class="img"><img src="../../../common/images/logo-text.png" /></p>
                    <p class="text">
                        耳语之森，是国内首个以奇妙为主题的原创文学平台，所有故事的内容全权围绕奇妙而设。身为作者，你再也无须抱怨内心独特的世界无人欣赏；作为读者，你再也无须担心吊诡精怪的品味无处交流。
                    </p>
                    <p class="text">
                        在平庸无为的大众潮流中保持独特的审美，是我们创办耳语之森的理念，愿你在这光怪陆离幽幽魑魅的环境中，找到属于你的故事，品尝奇妙直抵心灵的摧毁力，抑或婉转缠绵的妩媚纤柔。
                    </p>
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

