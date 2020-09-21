<template>
    <div class="container">
        <div id="navbar">
        <!-- Latest Snippet-->
      
        
        
         <br>
    </div>
        <h1>Battle 1</h1>
        <button v-on:click="getJsonData">Battle 1</button>
         <div  id="contain" v-for="Hamster in ApiData" v-bind:key="Hamster.id">
                  <h2 id="id"> ID:{{ Hamster.id}}</h2>         
                  <p id="age"> AGE:{{ Hamster.age}}</p>
                  <p id="favFood">favFood:{{ Hamster.favFood}}</p>
                  <p id="loves"> LOVE:{{ Hamster.loves}}</p>
                  <p id="image">i {{ Hamster.imgName}}</p>
                  <button v-on:click="vote(Hamster.id)">vote for cute Hamster</button>
                 
      </div>
        <h3>Pick one</h3>
        <div class="btl_fieled"></div>
        <div class="btm">
            <div>Previous</div>
            <div><router-link to="/Battles/battle2">Next</router-link></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import json from "@/assets/hamster.json";

export default {
    name: "Battle",
     data () {
    return {
    
      ApiData: json
    
    }
  },
  
  methods:
   {
  getJsonData(){
      axios
      .get('hamster.json')
      .then(response =>{ (this.ApiData = response.data)
      console.log(response.data)})
      
      .catch(error => {
        console.log(error)
      })
  },
  }
  /*vote(id){
      axios
        .post('https://localhost:1357//battle/:id1/:id2',{vote:'',id1: id1,id2:id2})
        .then(response => {console.log(response.data)
                if(response !== null){
                    this.result();
          }  }) 
        .catch(error => {
        console.log(error)
        
      })

  }*/
  
}
</script>

<style>
.container{
    text-align: center;
    padding: 30px;
    display: flex;
    flex-direction: column ;
    align-items: center;
}
.btl_fieled{
    height:280px;
}
.btm{
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: space-between;
}

.btm > div{
    height: 50px;
    width: 100px;
    background-color:  #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: white;
}
.btm > div > *{
    color: white;
    text-decoration: none;
}

.container > *{
    margin: 10px;
}
</style>