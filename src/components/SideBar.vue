<template>
  <div id="nav">
    <span class="icon"><router-link to="/">Home</router-link></span>
    <div class="nav_el"><router-link to="/battle">Battle</router-link></div>
    <div class="nav_el">
      <router-link to="/statistics">Statistics</router-link>
    </div>
    <div class="nav_el"><router-link to="/upload">Upload</router-link></div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
#nav {
  position: relative;
  background-color: #2c3e50;
  height: 100%;
  padding: 30px 30px 30px 0;
  padding-top: 100px;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  flex-direction: column;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-weight: bold;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon > *,
div > * {
  text-decoration: none;
  color: black;
}
.icon > * {
  color: white;
}

.nav_el {
  font-weight: bold;
  margin: 20px 50px 20px 0;
  background-color: #ffda7b;
  width: 200px;
  height: 70px;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav:last-child {
  margin-bottom: 20px;
}

/*
.router-link-exact-active {
  color: #42b983;
}
*/
</style>
