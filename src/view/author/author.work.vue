<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './author.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-author">
	<div class="m-author-wrap">
		<AuthorHeaderDom :data="author" class="author-header" />
		<div class="author-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="content-right">
				<div class="title">
					{{menuLeft[menuLeftType].title}}
				</div>
				<div class="result">
					<div class="result-content" v-if="count > 0">
						<ListDom v-for="(item, index) in works" :data="item" class="z-small" :key="index"/>
					</div>
					<Empty class="content-empty" v-if="count <= 0" />
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
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.list.vue';
import AuthorHeaderDom from '../../component/author.header.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
import {getUserInfo} from '../../server/getDataCommon';
export default {
	components: {
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	AuthorHeaderDom: AuthorHeaderDom,
    	ListDom: ListDom,
       	Page: Page,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu,
    	Empty: Empty,
    	Bubble: bubble
    },
    data () {
    	return {
    		header: {},
    		menuLeftType: 'works',
    		menuLeft: {
    			'works': {
    				title: 'Ta的作品',
    				url: 'author.work.html'
    			},
    			'follow': {
    				title: '关注',
    				url: 'author.follow.html'
    			},
    			'fans': {
    				title: '粉丝',
    				url: 'author.fans.html'
    			}
    		},
    		author: {
                hasMore: true,
                type: 'author',
                name: '爱吃棒冰的鱼',
                time: '02',
                isMark: false,
                hasMore: false,
                text: '一个喜欢讲故事的人，记录自己的生活及其有意思的事儿；关注自己所爱和所关心的人的点滴；分享自己过往的经历、体验、感悟；分享美食及喜爱或珍藏的音乐、电影...'
            },
    		works: [
                {
                    isNew: true,
                    isManger: true,
                    user: {
                        avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
                        nick_name: "若邪123"
                    },
                    catalog_cover_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/11.png",
                    catalog_title: '路边传来了歌声',
                    catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
                    category_title: '文字',
                    praise_count: 123,
                    comment_count: 8134
                },
                {
                    user: {
                        avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
                        nick_name: "若邪"
                    },
                    catalog_cover_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/11.png",
                    catalog_title: '路边传来了歌声',
                    catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
                    category_title: '漫画',
                    praise_count: 123,
                    comment_count: 8134
                },
                {
                    user: {
                        avatar_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/user/FQwabhc2sw.png",
                        nick_name: "若邪"
                    },
                    catalog_cover_url: "http://eryu.oss-cn-shanghai.aliyuncs.com/11.png",
                    catalog_title: '路边传来了歌声',
                    catalog_desc: '人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。人的自由意志不能改变历史进程，更不能阻止两个人相爱，这是一场天生杀人狂的悲剧。',
                    category_title: '文字',
                    praise_count: 123,
                    comment_count: 8134
                }
            ],
    		count: 3
    	}
    },
    methods: {
    	getUserInfo (){
    		// BlNVAVA=
    		var option = {
                "params": {}, 
                "userId": 'BlNVAVA' // 用户uid
            }
            getUserInfo(option).then( res => {
                this.authors = res.list;
                this.count = res.list.length;
            }).catch(res => {
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
    	// 获取作者信息
    	// this.getUserInfo();
    }
}
</script>

