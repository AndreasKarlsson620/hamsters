<template>
    <div class="container">

        <div id="navbar">
        <h1>Battle </h1>
        </div>
        <div>
        
        <div id="vs" style="position:relative; top:220px"><h2>VS</h2></div> </div>
         <div  id="Json" v-for="Hamster in ApiData" :key="Hamster.id">
                 <p id="imgName">
                    <img :src="getImgUrl(Hamster.imgName)" v-bind:alt="Hamster.imgName" v-on:click="CuteVote(Hamster.id)" style="width: 450px;height: 400px"></p>
                  <p id="Name">Name:{{ Hamster.name}}</p>    
                  <p id="age"> AGE:{{ Hamster.age}}</p>
                   
              
                  
         </div>    
        
    </div>
</template>

<script>
import axios from 'axios';
//import json from "@/assets/hamster.json";



export default {
    
    name: "Battle",
     data () {
    return {
      ApiData: null,
      options: {
                headers: {
                    "Content-Type": "application/json",
                },
            },
       
    }
    
  },
   created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },
  

 
  methods:{
    getImgUrl(pic) {
    return require('../assets/hamsters/'+pic)
},
     
    getData() {
     
     
     
    axios
      .get('/battle')
      .then(response => (this.ApiData = response.data))

      .catch(error => {
        console.log(error)
        this.errored = true
      })
    
  
  },
  
  }
}

</script>

<style scope>
#navbar > h1{
text-align: center;
}
#vs {
text-align: center;

}

#Json{
  display: grid;
  float: left;
  margin-right: 15px;
  margin-left: 25px;
}

.container > *{
    margin: 1px;  
    font-family: Arial, Helvetica, sans-serif;
}

</style>