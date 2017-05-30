<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@module: m-setting;

.@{module} {
    padding-bottom: 40px;
    .default_backgroud_5;
    & &-wrap {
        .default_width_1200;
        .default_mar_auto;
    }
}
.@{module}-content {
    position: relative;
    overflow: hidden;
    min-height: 400px;
    & .setting-content {

    }
    & .title {
        width: 100%;
        min-width: 240px;
        .default_font_size_5;
        .default_color_1;
        .default_mar_auto;
        margin-top: 30px;
        margin-bottom: 20px;
        & .number {
            .default_font_family_bolder;
            .default_font_size_6;
        }
        & .clear {
            margin-left: 15px;
            .default_font_size_1;
            .default_color_3;
            .default_pointer;
        }
    }
    & .content {
        
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
			<div class="setting-content">
				<div class="title" :style="{'width': (count <= 5 ? count*240 : 1200) + 'px'}"
                >
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
import {mapState} from 'vuex'
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
    computed: mapState({
        count: state => state.auth.count,
        lists: state => state.auth.lists
    }),
    methods: {
        author_count (count){
            this.count = count;            
        }
    }
}
</script>

