<template>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet">
  <Inicial></Inicial>
</template>

<script>
import Inicial from './components/Inicial.vue'

export default {
  name: 'App',
  components: {
    Inicial
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
