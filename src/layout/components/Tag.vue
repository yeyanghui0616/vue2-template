<template>
	<div class="tag">
		<el-tabs
			v-model="tabActive"
			type="card"
			:closable="tabSelection.length > 1"
			@tab-remove="removeTab"
            @tab-click="clickTab"
		>
			<el-tab-pane
				v-for="tab in tabSelection"
				:key="tab.fullPath"
				:label="tab.meta.title"
				:name="tab.fullPath"
				></el-tab-pane
			>
		</el-tabs>
	</div>
</template>

<script>
export default {
    watch: {
        '$route' (to, from) {
            // 监听路由变化
            this.addTab(to)
        }
    },
	data() {
		return {
            tabSelection:[],
			tabActive: '',
		};
	},
    mounted(){
        this.init()
    },
	methods: {
        init(){
            const tabSelection = localStorage.getItem('tabSelection')
            if(tabSelection){
                this.tabSelection = JSON.parse(tabSelection)
            }else{
                this.tabSelection.push({fullPath: this.$route.fullPath, meta:this.$route.meta})
            }
            const tabActive = localStorage.getItem('tabActive')
            if(tabActive){
                this.tabActive = tabActive
            }else{
                this.tabActive = this.$route.fullPath
            }
        },
        addTab(to){
            const result =  this.tabSelection.find(item=>item.fullPath === to.fullPath)
            if(!result){
                this.tabSelection.push({fullPath: to.fullPath, meta:to.meta})
            }
            this.tabActive = to.fullPath
            localStorage.setItem('tabActive', this.tabActive)
            localStorage.setItem('tabSelection', JSON.stringify(this.tabSelection))
        },
        removeTab(tabName){
            const index = this.tabSelection.findIndex(item=>item.fullPath === tabName)
            this.tabSelection.splice(index, 1)
            this.tabActive = this.tabSelection[index]?.fullPath || this.tabSelection[index - 1]?.fullPath
            localStorage.setItem('tabSelection', JSON.stringify(this.tabSelection))
            localStorage.setItem('tabActive', this.tabActive)
        },
        clickTab(tab){
            this.$router.push(tab.name)
        },
    }
};
</script>

<style lang="scss" scoped>
.tag {
	::v-deep {
		.el-tabs__content {
			display: none;
		}
		.el-tabs--card > .el-tabs__header,
		.el-tabs--card > .el-tabs__header .el-tabs__nav,
		.el-tabs--card > .el-tabs__header .el-tabs__item {
			border-bottom: 0;
			border: 0;
		}
	}
}
</style>
