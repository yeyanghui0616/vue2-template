<template>
    <div>
        <Navbar></Navbar>
        <div style="height: calc(100vh - 60px)" class="flex">
            <SideBar style="width:240px"></SideBar>
            <div class="flex flex-col" :style="{'width': mainWidth}">
                <Tag style="height: 40px;width:100%"></Tag>
                <div class="bg-gray-50 flex-1 p-4 flex w-full">
                    <router-view class="bg-white flex-1 rounded-lg p-3 shadow-sm w-full"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Tag from './components/Tag'
export default {
    components:{
        Navbar,
        SideBar,
        Tag
    },
    data() {
        return {
            mainWidth:(document.documentElement.clientWidth - 240) + 'px'
        };
    },
    mounted(){
        window.onresize = ()=>{
            this.mainWidth = (document.documentElement.clientWidth - 240) + 'px'
        }
    },

    methods: {
    },
};
</script>
 
<style lang="scss">
 
</style> 