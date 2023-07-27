<template>
	<el-dropdown class="mr-4" @command="handleCommand">
		<div class="flex justify-center items-center" style="margin-top: 10px">
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
				<el-dropdown-item command="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		handleCommand(command) {
			this.$confirm('您确认要退出登录吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					sessionStorage.clear();
					this.$router.push('/login');
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消退出',
					});
				});
		},
	},
};
</script>
