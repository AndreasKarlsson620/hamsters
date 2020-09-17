<template>
  <div class="container">
    <h1>Battle 1</h1>
    <h3>Pick one</h3>
    <div class="btl_fieled"></div>
    <div class="btm">
      <div>Previous</div>
      <div><router-link to="/Battles/battle2">Next</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Battle"
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btl_fieled {
  height: 280px;
}
.btm {
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
}

.btm > div {
  height: 50px;
  width: 100px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
}
.btm > div > * {
  color: white;
  text-decoration: none;
}

.container > * {
  margin: 10px;
}
</style>
