<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <h1>Hamsterwars</h1>
    <h2>About hamsterwars</h2>
    <p>Hamsters are rodents (order Rodentia) belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera. They have become established as popular small house pets. The best-known species of hamster is the golden or Syrian hamster (Mesocricetus auratus), which is the type most commonly kept as pets. Other hamster species commonly kept as pets are the three species of dwarf hamster, Campbell's dwarf hamster (Phodopus campbelli), the winter white dwarf hamster (Phodopus sungorus) and the Roborovski hamster (Phodopus roborovskii). </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    
  }
};
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  justify-items: center;
  align-items: center;
}

.home > *{
  margin-bottom: 30px;
}

p{
  width : 70%;
  color: white;
}
</style>
