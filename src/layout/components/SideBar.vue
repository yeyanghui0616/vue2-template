<template>
	<el-menu :default-active="$route.fullPath" class="el-menu-vertical-demo" router>
		<template v-for="route in sideMenuRoutes">
			<SideBarItem :routeItem="route" />
		</template>
	</el-menu>
</template>

<script>
import { routes } from '@/router';
import SideBarItem from './SideBarItem';
export default {
	components: {
		SideBarItem,
	},
	computed: {
		sideMenuRoutes: function () {
			const result = routes.find(
				(route) =>
					route.path === '/' + this.$route.fullPath.split('/')[1]
			);
			return result.children;
		},
	},
	data() {
		return {};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
