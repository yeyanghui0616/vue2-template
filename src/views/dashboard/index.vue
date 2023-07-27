<template>
	<div class="flex flex-col">
		<div
			class="flex items-center pb-2 h-10"
			style="border-bottom: solid #ededed 1px"
		>
			<div class="w-1 h-6 bg-blue-600 rounded mr-2"></div>
			<div class="ml-0 mr-auto">职员信息</div>
			<div class="flex gap-4 items-center cursor-pointer">
				<font-awesome-icon
					icon="fa-regular fa-square-plus"
					class="hover:text-blue-600"
					size="lg"
				/>
				<font-awesome-icon
					icon="fa-solid fa-arrow-up-from-bracket"
					class="hover:text-blue-600"
				/>
				<font-awesome-icon
					icon="fa-solid fa-rotate-right"
					class="hover:text-blue-600"
				/>
			</div>
		</div>
		<div class="py-3 form h-15">
			<el-form :inline="true" :model="formInline" class="ml-0 mr-auto">
				<el-form-item label="审批人">
					<el-input
						v-model="formInline.user"
						placeholder="审批人"
						size="small"
					></el-input>
				</el-form-item>
				<el-form-item label="活动区域">
					<el-select
						v-model="formInline.region"
						placeholder="活动区域"
						size="small"
					>
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="small">查询</el-button>
				</el-form-item>
			</el-form>
			<el-dropdown>
				<el-button size="small">
					更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
					<el-dropdown-item>螺蛳粉</el-dropdown-item>
					<el-dropdown-item>双皮奶</el-dropdown-item>
					<el-dropdown-item>蚵仔煎</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="flex flex-col flex-1">
			<el-table
				:header-cell-style="{ background: '#fafafa', color: '#000' }"
				:data="tableData"
				stripe
				max-height="calc(100vh - 19.5rem)"
				style="
					width: 100%;
					color: #000;
					overflow-y: auto;
				"
				border
			>
				<el-table-column
					type="index"
					align="center"
					label=""
					width="50"
				>
				</el-table-column>
				<el-table-column label="操作" align="center" width="100">
					<template slot-scope="scope">
						<i class="el-icon-edit"></i>
					</template>
				</el-table-column>
				<el-table-column
					prop="date"
					label="日期"
					align="center"
					width="180"
				>
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					align="center"
					width="180"
				>
				</el-table-column>
				<el-table-column prop="address" label="地址" align="center">
				</el-table-column>
				<el-table-column label="状态" align="center">
					<template slot-scope="scope">
						<span
							v-if="scope.row.status === '启用'"
							class="text-green-500"
							>{{ scope.row.status }}</span
						>
						<span
							v-if="scope.row.status === '禁用'"
							class="text-red-500"
							>{{ scope.row.status }}</span
						>
					</template>
				</el-table-column>
			</el-table>
			<div class="flex justify-center items-center py-3 h-10 mt-2">
				
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[100, 200, 300, 400]"
				:page-size="100"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400"
			>
			</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 4,
			formInline: {
				user: '',
				region: '',
			},
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: '禁用',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: '启用',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: '禁用',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					status: '启用',
				},
			],
		};
	},

	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
	},
};
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	::v-deep {
		.el-form-item {
			margin-bottom: 0;
		}
	}
}
</style>
