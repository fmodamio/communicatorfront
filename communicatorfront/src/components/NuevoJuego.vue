<template>
	<Header/>
	<div v-if="show1">
		<p>Bienvenido jugador</p>
		<input v-model="nameplayer" placeholder="introduce tu nombre" class="text mobile" v-bind:style="{
		textAlign:'left',
		backgroundColor: 'white'
		}">
		<br>
		<br>
		<br>
		<button class="button1" @click="postPlayer()">Comenzar</button>
	</div>
	<div v-if="show2">
			<Partida/>
	</div>
</template>

<script>
import Header from './Header.vue'
import Partida from './Partida.vue'
import axios from 'axios'

export default {
	name: 'NuevoJuego',
	data() {
		return {
			show1: true,
			show2: false,
			nameplayer: "",
		};
	},
	components: {
		Header, Partida
	},
	methods:{
		postPlayer(){
			axios.post('http://192.168.1.43:8000/api/player/', {
				nombre: this.nameplayer,
				/*headers:{
					'Access-Control-Allow-Origin': '*',
					'Content-type': 'application/json',
				}*/
			})
			.then(response => {
				console.log(response.data.id)
				this.$cookies.set('id', response.data.id, "86400")
				//this.$router.push('/game')
				this.show1 = false
				this.show2 = true
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