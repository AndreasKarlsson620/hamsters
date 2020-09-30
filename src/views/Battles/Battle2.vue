<template>
    <div class="container">
        <div id="navbar">
        <h1>Battle 1</h1>
        </div>
        <div>
          <h3>mehdi dag</h3>
        </div>
        
         
        <div class="btl_fieled"></div>
        <div class="btm">
            <div>Previous</div>
            <div id="next"><router-link to="/battle">Next</router-link></div>
        </div>
    </div>
</template>

<script>




export default {
    
    name: "Battle2",
     data () {
    return {
      ApiData: null
      
    }
  },
   
 
  methods: {

  
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
    margin-left: 200px;
}
.btm > div > *{
    color: white;
    text-decoration: none;
}

.container > *{
    margin: 1px;
    
}



</style>