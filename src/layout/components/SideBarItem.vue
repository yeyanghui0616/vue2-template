<template>
	<div>
		<template v-if="routeItem.children?.length > 0">
			<el-submenu :index="routeItem.path">
				<template #title>
					<i :class="routeItem.meta.icon"></i>
					<span>{{ routeItem.meta.title }}</span>
				</template>
				<side-bar-item
					v-for="route in routeItem.children"
					:routeItem="route"
				/>
			</el-submenu>
		</template>

		<template v-else>
			<el-menu-item :index="routeItem.path">
				<i class="el-icon-location"></i>
				<template #title>{{ routeItem.meta.title }}</template>
			</el-menu-item>
		</template>
	</div>
</template>

<script>
export default {
	name: 'SideBarItem',
	props: {
		routeItem: Object,
	},
	data() {
		return {};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
