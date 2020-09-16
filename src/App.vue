<template>
    <div id="app">
        <Home />
        <Upload />
        <SideBar />
        <router-view id="main_content"/>
    </div>
</template>

<script>
import Home from "./components/Home.vue";
import Upload from "./components/Upload.vue";
import SideBar from "../src/components/SideBar.vue";

export default {
    name: "App",
    components: {
        Home,
        Upload,
        SideBar
    },
    props: {},
    data: () => ({}),
    computed: {},
    methods: {},
};
</script>

<style lang="scss">
#app {
    background-color: #96b6c1;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    min-height: 700px;
}

#main_content{
  grid-column-start: 2;
  grid-column-end: 6;
}
</style>
