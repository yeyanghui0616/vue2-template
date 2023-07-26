<template>
	<div class="flex-1 topbar">
		<el-menu :default-active="activeIndex" mode="horizontal" router>
			<el-menu-item v-for="item in firstRoutes" :index="item.path">{{
				item.meta.title
			}}</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { routes } from '@/router';
export default {
	computed: {
		firstRoutes: function () {
			return routes.filter((route) => !route.hidden);
		},
		activeIndex: function () {
			return '/' + this.$route.fullPath.split('/')[1];
		},
	},
	data() {
		return {};
	},

	methods: {
    },
};
</script>

<style lang="scss" scoped>
.topbar{
    ::v-deep{
        .el-menu{
            background-color: #3b82f6;
        }
        .el-menu.el-menu--horizontal{
            border-bottom: 0;
        }
        .el-menu--horizontal>.el-menu-item.is-active{
            color: #fff;
            border-bottom: 2px solid #fff
        }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background-color: #5993f0;
            color: #fff;
        }
        .el-menu--horizontal>.el-menu-item{
            color: #fff;
        }
    }
}
</style>
