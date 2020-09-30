<template>
    <div class="container">

        <div id="navbar">
        <h1>Battle </h1>
        
        </div>
        
        <div id="vs" style="position:relative; top:220px"><h2>VS</h2></div> 
         <div  id="Json" v-for="Hamster in ApiData" v-bind:key="Hamster.id">
                 <p id="id"> ID:{{ Hamster.id}}</p> 
                  <p id="imgName">
                    <img :src="getImgUrl(Hamster.imgName)" v-bind:alt="Hamster.imgName" v-on:click="CuteVote(Hamster.id)" style="width: 450px;height: 400px"></p>
                  
                  <p id="Name">Name:{{ Hamster.name}}</p>    
                  <p id="age"> AGE:{{ Hamster.age}}</p>
                   <button v-on:click="Vote(Hamster.id)">Vote for cute one</button>
              
                  
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
      ApiData: null
      
    }
  },
   created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getJsonData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getJsonData'
  },
  methods:
   {
        getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
},
getImgUrl(pic) {
    return require('../assets/hamsters/'+pic)
},
     
  getJsonData(){
     
      axios
      .get('hamster.json') // .get('/battle')
      .then(response =>{ 
         // this.ApiData=new Array(2);
          //this.ApiData.push(response.data[this.getRandomInt(41)]); 
          //this.ApiData.push(response.data[this.getRandomInt(41)]);
           this.ApiData= response.data.slice(0,2);


          //return this.ApiData;        //this.getRandomInt();
         // (this.ApiData = response.data)
      // console.log(this.ApiData);
      
      console.log(this.getRandomInt(41), response.data[this.getRandomInt(41)])
      })
      
      .catch(error => {
        console.log(error)
      })
      
  },
  },
 
  
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
}

</style>