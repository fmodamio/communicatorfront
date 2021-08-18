<template>
   <div id="app">
  </div>
  <router-view></router-view>
</template>

<script>
//import Inicial from './components/Inicial.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  methods:{
   goToHome(){
   this.$router.push('/'); 
    },
    goToAbout(){
   this.$router.push('/newgame'); 
    }
  }
}



</script>

<style>
h2 {
  text-align: center;
  color: aqua;
  font-family: 'Roboto', sans-serif;
}

.cita{
  text-align: right;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 500px;
  margin-top: 80px;
  margin-bottom: 0px;
  font-weight:100;
}

.autor{
  text-align: right;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 0px;
  margin-bottom: 0px;
}

p {
  text-align: left;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
}

body{
  background-color: #030119;
}
</style>
