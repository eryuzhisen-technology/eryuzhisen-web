<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-app;
.@{module} {
	min-height: 400px;
	& .banner {
		width: 100%;
		height: 600px;
		.user_background_1;
		& .banner-content {
			height: 100%;
			.default_width_960;
			.default_mar_auto;
			& .left,
			& .right {
				float: left;
				height: 100%;
			}
			& .left {
				width: 430px;
				margin-right: 100px;
				.default_right;
				& span {
					height: 100%;
					width: 0;
					vertical-align: middle;
					.default_disline;
				}
				& img {
					vertical-align: middle;
				}
			}
			& .right {
				width: 430px;
				padding-top: 91px;
				& .img {
					margin-bottom: 25px;
				}
				& .download {
					& .btn {
						float: left;
						width: 200px;
						margin-right: 30px;
						& img {
							margin-bottom: 20px;
						}
					}
				}
			}
		}
	}
	& .content {
		width: 100%;
		& .content-item {
			width: 100%;
			height: 100%;
			& .content-item-wrap {
				.default_width_960;
				.default_mar_auto;
				height: 500px;
				display: table;
				padding: 0 50px;
			}
			& .left {
				display: table-cell;
				height: 100%;
				vertical-align: middle;
				width: 380px;
			}
			& .right {
				display: table-cell;
				height: 100%;
				vertical-align: middle;
				width: 455px;
			}
			& .item-title {
				.default_font_size_6;
				.default_color_5;
				margin-bottom: 30px;
			}
			& .item-text {
				.default_font_size_4;
				.default_color_2;
				line-height: 150%;
			}
		}
		& .content-item:nth-child(2n+1) {
			.default_backgroud_3;
		}
		& .content-item:nth-child(2n) {
			.default_backgroud_4;
		}
	}
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-app">
		<div class="banner">
			<div class="banner-content">
				<div class="left">
					<span></span>
					<img src="/dist/images/app/img-1.png" />
				</div>
				<div class="right">
					<div class="img"><img src="/dist/images/app/img-2.png" /></div>
					<div class="download">
						<div class="btn">
							<img src="/dist/images/app/btn-1.png" />
							<img src="/dist/images/app/btn-2.png" />
						</div>
						<div class="qr">
							<img src="/dist/images/app/img-3.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-item">
				<div class="content-item-wrap">
					<div class="left">
						<div class="item-img"></div>
					</div>
					<div class="right">
						<div class="item-title">让独特的作品为独特的人所遇见</div>
						<div class="item-text">身为作者，再也无须担心你的奇异世界淹没在平淡无奇的主流中，无人欣赏</div>
					</div>
				</div>
			</div>
			<div class="content-item">
				<div class="content-item-wrap">
					<div class="right">
						<div class="item-title">叫独特的审美与独特的故事所交流</div>
						<div class="item-text">作为读者，再也无须怀疑你的诡异品味是否与众人格格不入，无处交流</div>
					</div>
					<div class="left">
						<div class="item-img"></div>
					</div>
				</div>
			</div>
			<div class="content-item">
				<div class="content-item-wrap">
					<div class="left">
						<div class="item-img"></div>
					</div>
					<div class="right">
						<div class="item-title">从此拒绝鸡汤与清新</div>
						<div class="item-text">在这幽幽魑魅的黑暗中，寻找你的故事，品尝怪诞直抵心灵的摧毁力量，抑或婉转缠绵的妩媚纤柔</div>
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
import SideMenu from '../../component/sideMenu.vue';
export default {
    data () {
    	return {
    		header: 'app',
    	}
    },
    methods: {
    	
    },
    components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	SideMenu: SideMenu
    }
}
</script>

