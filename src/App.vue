<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Upload />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Upload from "./components/Upload.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        Upload,
    },
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
