<template>
   <div id="app">
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  /*methods:{
   goToHome(){
   this.$router.push('/'); 
    },
    goToAbout(){
   this.$router.push('/newgame'); 
    }
  }*/
}



</script>

<style>
h2 {
  text-align: center;
  color: aqua;
  font-family: 'Roboto', sans-serif;
}
/*En movil los margenes no funcionan bien*/
/*Si se quitan, en movil bien, en PC mal*/
.cita.desk{
  text-align: right;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 500px;
  margin-top: 80px;
  margin-bottom: 0px;
  font-weight:100;
  display: block;
}

.autor.desk{
  text-align: right;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: block;
}

.cita.mobile{
  display: none;
}

.autor.mobile{
  display: none;
}

p.desk {
  text-align: left;
  text-align: justify;
  text-justify: inter-word;
  color: aqua;
  font-family: 'Roboto', sans-serif;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
}

p.mobile{
  display: none;
}

@media screen and (max-width: 768px) {

  .cita.desk{
    display: none;
  }

  .autor.desk{
    display: none;
  }

  .cita.mobile{
    text-align: right;
    color: aqua;
    font-family: 'Roboto', sans-serif;
    font-weight:100;
    margin-right: 30px;
    margin-left: 30px;
    display: block;
  }

  .autor.mobile{
    text-align: right;
    color: aqua;
    font-family: 'Roboto', sans-serif;
    margin-right: 30px;
    margin-left: 30px;
    display: block;
  }

  p.desk {
    display: none;
  }

  p.mobile {
    text-align: left;
    text-align: justify;
    text-justify: inter-word;
    color: aqua;
    font-family: 'Roboto', sans-serif;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
    display: block;
  }

}

body{
  background-color: #030119;
}
</style>
