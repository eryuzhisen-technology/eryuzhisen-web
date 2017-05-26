<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './company.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
	<div class="m-company">
    <div class="m-company-wrap">
		<div class="m-company-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="company-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="content m-about">
					<p class="img"><img src="../../common/images/company/img-1.png" /></p>
                    <p class="text">耳语之森，是国内首个以“怪诞”为主题的原创内容平台，包括但不限于文字、漫画等形式。身为作者，你再无须抱怨内心奇特的世界观无人欣赏；作为读者，你再无须担心吊诡精怪的嗜好无处交流。</p>
                    <p class="text">反鸡汤反清新，在平庸的大众潮流中保持独特品味的审美，是我们创办耳语之森的理念，希望你在这幽幽魑魅的环境中，找到属于你的故事，品尝“怪诞”直抵心灵的摧毁力，抑或婉转缠绵的妩媚纤柔。</p>
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
    		menuLeftType: 'about',
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
    	
    },
    
}
</script>

