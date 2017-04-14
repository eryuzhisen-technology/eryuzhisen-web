<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
@import (less) './search.less';
</style>

<!-- html代码 -->
<template>
<div>
	<HeaderDom :data="header" />
	<div class="m-search">
		<div class="m-search-content">
			<MenuLeft :data="menuLeft" :type="menuLeftType" />
			<div class="search-right">
				<div class="title">
					<div v-if="count <= 0">
						搜索结果
					</div>
					<div v-if="count > 0">
						共 <span class="number">{{count}}</span> 条结果
					</div>
				</div>
				<div class="result">
					<div class="result-content" v-if="count > 0">
						<ListDom v-for="(item, index) in lists" :data="item" class="z-small" :key="index"/>
					</div>
					<Empty class="content-empty" v-if="count <= 0" />
				</div>
				<Page 
					:count="count" 
					:length="pageSize"
					:index="pageIndex"
					@page_switch="pageSwitch"
				/>
			</div>
		</div>
	</div>
	<FooterDom />
	<SideMenu />
	<bubble />
</div>
</template>

<script>
import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import ListDom from '../../component/article.list.vue';
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import MenuLeft from '../../component/menu.left.vue';
import SideMenu from '../../component/sideMenu.vue';
import bubble from '../../component/bubble';
import {getCatalogCount, getCatalogList} from '../../server/getDataCommon';
export default {
	components: {
		Bubble: bubble,
    	HeaderDom: HeaderDom,
    	FooterDom: FooterDom,
    	ListDom: ListDom,
    	Empty: Empty,
       	Page: Page,
       	MenuLeft: MenuLeft,
    	SideMenu: SideMenu
    },
    data () {
    	return {
    		header: {

    		},
    		menuLeftType: 'article',
    		menuLeft: {
    			article: {
    				title: '作品',
                    url: 'search.article.html'
    			},
    			author: {
    				title: '作者',
                    url: 'search.author.html'
    			}
    		},
    		count: 0,
    		lists: [],
    		authors: [],
    		pageIndex: 1,
    		pageSize: 5,
    	}
    },
    methods: {
    	pageSwitch (pageIndex) {
    		this.pageIndex = pageIndex;
    		this.getCatalogList();
    	},
    	getCatalogList (){
    		var option = {
                "params": {
                    "pagination": "1",
                    "page": this.pageIndex, //页数,默认不传查询第一页
                    "pageSize": this.pageSize //每页数量 默认10
                },
                "body": {
                    "category_id": "1", //目录id
                }
            }
            getCatalogList(option).then( res => {
                console.log(res)
                this.lists = res.list;
                this.count = res.page_info.total_count;
            }).catch(res => {
                console.log(res)
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
    	// 按照搜索获取作品
    	this.getCatalogList();
    }
}
</script>

