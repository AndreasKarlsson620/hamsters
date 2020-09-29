<template>
  <div id="app">
    <SideBar />
    <router-view id="main_content" />
  </div>
</template>

<script>
import SideBar from "../src/components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
#app {
  min-height: 300px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #96b6c1;
}

#main_content {
  grid-column-start: 2;
  grid-column-end: 6;
}
</style>
