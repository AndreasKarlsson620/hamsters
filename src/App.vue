<template>
    <div id="app">
        <Home />
        <Upload />
    </div>
</template>

<script>
import Home from "./components/Home.vue";
import Upload from "./components/Upload.vue";

export default {
    name: "App",
    components: {
        Home,
        Upload,
    },
    props: {},
    data: () => ({}),
    computed: {},
    methods: {},
};
</script>

<style>
#app {
    background-color: #96b6c1;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
