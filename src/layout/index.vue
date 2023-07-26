<template>
    <div>
        <Navbar></Navbar>
        <div style="height: calc(100vh - 60px)" class="bg-purple-600 flex">
            <SideBar style="width:240px"></SideBar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
export default {
    components:{
        Navbar,
        SideBar
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