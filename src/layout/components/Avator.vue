<template>
	<el-dropdown class="mr-4">
		<div class="flex justify-center items-center" style="margin-top:10px">
			<img
				class="w-10 h-10 cursor-pointer rounded-full"
				src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
				alt=""
			/>
			<div class="ml-1 cursor-pointer text-white">
				admin
				<i class="el-icon-arrow-down el-icon--right"></i>
			</div>
		</div>

		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>Action 1</el-dropdown-item>
				<el-dropdown-item>Action 2</el-dropdown-item>
				<el-dropdown-item>Action 3</el-dropdown-item>
				<el-dropdown-item disabled>Action 4</el-dropdown-item>
				<el-dropdown-item divided>退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {},
};
</script>
