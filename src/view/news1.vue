<template>
  <div id="about">
    <div class="title text-center" >
     <h2><p>{{title}}</p></h2>
     <div class="content text-center">
        <p >{{message}}</p>
        
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
        return{
            title:'123445656',
            message: '123546576tf',
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>






