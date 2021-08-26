<template>
	<div>
		<p>Bienvenido jugador</p>
		<input v-model="nameplayer" placeholder="introduce tu nombre" class="text">
		<br>
		<br>
		<br>
		<button class="button1" @click="postPlayer()">Comenzar</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'NuevoJuego',
	data() {
		return {
			nameplayer: "",
		};
	},
	methods:{
		postPlayer(){
			axios.post('http://localhost:8000/api/player/', {
				nombre: this.nameplayer,
				/*headers:{
					'Access-Control-Allow-Origin': '*',
					'Content-type': 'application/json',
				}*/
			})
			.then(response => {
				console.log(response.data.id)
				this.$cookies.set('id', response.data.id, "86400", '/', "", "true", "None")
				this.$router.push('/game')
				/*this.$router.push({
					path: '/game',
					query: {
						id: this.game || response.data.id
					}
				})*/
			})
			.catch(function (error) {
				console.log(error)
			})
		}
	}
}

</script>

<style>
.button1{
	background-color: #008CBA;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin-right: 150px;
	margin-left: 150px;
	margin-top: 0px;
	margin-bottom: 0px;
}

</style>