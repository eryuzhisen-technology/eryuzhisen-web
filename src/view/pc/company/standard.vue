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
				<div class="content m-standard">
					<p class="sub-title">一、评论管理规定</p>
					<p class="text">1、同一用户每天在同一本作品下发布超过5条评论且均为万金油书评或无意义的内容，将由管理员发出警告；</p>
					<p class="text">2、获得三次警告的用户，将被禁言7天。解禁后再犯的用户，将被禁言30天（账号禁言期间，用户不能进行发评论、评论回复等会干扰社区正常运行的行为）；</p>
					<p class="text">3、情节特别严重的，将进行封号处理。以下情况作封号处理：</p>
					<p class="text">带有侮辱性文字、非法用户名、耳语之森官方、国家重要人物名字的ID；</p>
					<p class="text">经警告、短期禁言后，继续违反相关规定的ID；</p>
					<p class="text">故意捣乱的马甲ID；</p>
					<p class="text">恶意攻击国家、社会、耳语之森、作者、读者的ID；</p>
					<p class="text">宣传未获耳语之森允许的QQ群、广告、传销、黄色网站等违反国家法律或者侵害其它用户利益的ID；</p>
					<p class="text">发布广告和骚扰信息的ID；</p>
					<p class="text">发表带有政治倾向的言论，或对作者进行人身攻击；</p>
					<p class="text">违反国家现行法律法规、破坏社会公共安全的；</p>
					<p class="text">宣扬邪教和封建迷信，宣扬色情、淫秽、暴力、教唆犯罪的；</p>
					<p class="text">含有法律、行政法规禁止的其他内容的；</p>
					<p class="text">账号在评论区大量刷万金油书评或无意义的内容回复如：支持，顶，纯表情帖等违规情况；</p>
					<p class="text">发表与作品无关的内容、违反相应栏目具体规定。</p>
					<p class="sub-title">二、作品管理规定</p>
					<p class="text">1、以下情况封号并删除作品处理：</p>
					<p class="text">盗取、转载、抄袭、复制他人作品；</p>
					<p class="text">发布违反国家现行法律法规、破坏社会公共安全的作品。</p>
					<p class="text">2、以下情况的作品做删除处理：</p>
					<p class="text">作品不是发布者本人创作的作品；</p>
					<p class="text">作品涉及现实政治或影射现实政治；</p>
					<p class="text">作品有露骨的色情描写；</p>
					<p class="text">作品鼓动民族仇恨、民族歧视，破坏民族团结；</p>
					<p class="text">作品宣扬邪教和封建迷信，宣扬色情、淫秽、暴力、教唆犯罪；</p>
					<p class="text">含有法律、行政法规禁止的其他内容的；</p>
					<p class="text">作品与所打标签毫不相关；</p>
					<p class="text">作品与耳语之森承载的主题毫不相关；</p>
					<p class="text">作品中有影射攻击他人的言行；</p>
					<p class="text">作品中有大量极端低俗无味、有悖与现实社会公众道德的内容；</p>
					<p class="text">作品内容为无意义乱码。</p>
					<p class="sub-title">三、抄袭或借鉴过度处理制度</p>
					<p class="text">1、可以受理的举报需包含以下内容，但杜绝恶意举报行为，如遇不实举报，该涉嫌文章将拒绝该用户ID继续举报：</p>
					<p class="text">涉嫌抄袭与被抄袭的文章名字、地址以及涉嫌抄袭段落最早的发表时间；</p>
					<p class="text">涉嫌抄袭与被抄袭文章中涉嫌抄袭部分的详细对比，每段对比文字要提供相应章节号。</p>
					<p class="text">2、判定前提：</p>
					<p class="text">著作权法保护的是表达形式而非思想本身，受到保护的是表达该创意的具体文字，或者将很多个创意链接起来的顺序、逻辑和因果关系；</p>
					<p class="text">抄袭的目的是“掩人耳目”“据为己有”，如果作者已明确表示或显而易见某段文字、某些创意属于其它作品，不属于抄袭行为。但使用其它作品的内容不能超过“合理使用”范畴；</p>
					<p class="text">被抄袭作品的发表时间必须早于涉嫌抄袭作品，且被抄袭部分必须具有独创性。</p>
					<p class="text">3、判定标准：</p>
					<p class="text">文字或全文情节走向（细纲）方面完全雷同，或者基本雷同，认定为抄袭；</p>
					<p class="text">具体描述语言上雷同，并且不是判定前提中所列的例外情况的，雷同总字数低于1000字的，判定为借鉴过度。超过1000字的，判定为抄袭；</p>
					<p class="text">模仿或使用他人文章的创意超过该文三分之一的，或者超过自身三分之一的，判定为借鉴过度；</p>
					<p class="text">原创作品模仿或使用他人细纲超过该文十分之一的，或者超过自身十分之一的，判定为借鉴过度，超过该文五分之一的，或者超过自身五分之一的，判定为抄袭；</p>
					<p class="text">同人作品使用原著剧情超过本身创作剧情五分之一的，判定为借鉴过度，超过本身创作剧情三分之一的，判定为抄袭。读书笔记类和人物分析类作品除外。</p>
					<p class="text">4、处罚规定：</p>
					<p class="text">构成借鉴过度的作品，会处于审核中状态，他人不可见，管理员通知作者要求清理，清理干净之前不得通过审核；</p>
					<p class="text">构成抄袭的，作品会处于审核中状态，他人不可见，情节不严重的情况下，管理员通知作者要求清理，清理干净之前不得通过审核；情节严重的，管理员对该作品作者做删文封号处理。</p>
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
			menuTopType: 'standard',
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
					url: 'standard.html',
					isActive:true
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

