<template>
    <div>
        <Navbar></Navbar>
        <div style="height: calc(100vh - 60px)" class="flex">
            <SideBar style="width:240px"></SideBar>
            <div class="flex-1 flex flex-col">
                <Tag style="height: 40px;"></Tag>
                <div class="bg-gray-50 flex-1 p-4 flex">
                    <router-view class="bg-white flex-1 rounded-lg p-2 shadow-sm"></router-view>
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
        };
    },

    methods: {
    },
};
</script>
 
<style lang="scss">
 
</style> 