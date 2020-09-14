<template>
<<<<<<< HEAD
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
=======
	<div id="app">
		<Home/>
	</div>
</template>

<script>

import Home from './components/Home.vue'

export default
{
	name: 'App',
	components:
	{
		Home
	}
}
>>>>>>> 4c5b80ea5ea2f44cd3badf3eb347c30448f66fad
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
