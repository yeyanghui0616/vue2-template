<template>
	<div style="height: 60px;background-color: #2357e9;" class="flex">
		<Logo></Logo>
		<TopBar></TopBar>
		<Avator></Avator>
	</div>
</template>

<script>
import Logo from './Logo.vue';
import TopBar from './TopBar.vue'
import Avator from './Avator.vue'
export default {
	components: {
		Logo,
		TopBar,
		Avator
	},
	data() {
		return {};
	},

	methods: {},
};
</script>

<style lang="scss"></style>
