<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <h1>Hamsterwars</h1>
    <h2>About hamsterwars</h2>
    <p>
      Appen syftar till att vara en fullstack lösning för kommande virala
      sensationen, webplatsen HAMSTERWARS. Webbplatsen är en spinoff på
      <a href="http://www.kittenwar.com/">Kittenwar</a>, en hemsida där matcher
      mellan två bilder slumpas fram och besökarna röstar på den de finner
      gulligast. Poäng ska räknas, listor ska sammanställas.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  justify-items: center;
  align-items: center;
}

.home > * {
  margin-bottom: 30px;
}

p {
  width: 70%;
  color: white;
}
</style>




