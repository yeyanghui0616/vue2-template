<template>
	<div style="height: 60px" class="bg-gray-500 flex">
		<Logo></Logo>
		<div class="flex-1">
			<el-menu
				:default-active="activeIndex"
				mode="horizontal"
				@select="handleSelect"
                router
			>
				<el-menu-item  v-for="item in firstRoutes" :index="item.path">{{item.meta.title}}</el-menu-item>
			</el-menu>
		</div>
		<div class="bg-white w-80">control</div>
	</div>
</template>

<script>
import { routes } from '@/router'
import Logo from './Logo';

export default {
	components: {
		Logo,
	},
    computed:{
        firstRoutes:function(){
            return routes.filter(route=>!route.hidden)
        },
        activeIndex:function(){
            return '/' + this.$route.fullPath.split('/')[1]
        }
    },
	data() {
		return {
		};
	},

	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style lang="scss"></style>
