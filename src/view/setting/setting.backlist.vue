<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './setting.less';
.m-setting-content .setting-right .content {
    padding: 0;
    background: none;
    & .content-wrap {
        width: 100%;
    }
}
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom />
    <div class="m-setting">
	<div class="m-setting-wrap">
		<div class="m-setting-content">
			<MenuLeft :data="menuLeft" />
			<div class="setting-right">
				<div class="title">
					黑名单
				</div>
                <div class="content">
				<div class="content-wrap">
                    <AuthorDom 
                        resType="blacklist"
                        @author_count="author_count"
                        class="result-content" 
                    />
                </div>
				</div>
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
export default {
    data () {
    	return {
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
                    isActive: true
                }
    		},
            count: 0
    	}
    },
    methods: {
        author_count (count){
            this.count = count;            
        }
    }
}
</script>

