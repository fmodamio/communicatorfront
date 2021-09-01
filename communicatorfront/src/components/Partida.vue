<template>
	<div class="historia">
		<div class="marco">
			<div>
				<img :src="getImgUrl(this.laimgdeaqui)" v-bind:alt="pic">
				<p class="hist">{{this.lahistdeaqui}}</p>
				<button class="button4" @click="loadNewHistory()">Opcion1</button>
				<button class="button4">Opcion2</button>
				<button class="button4">Opcion3</button>
				<button class="button4">Opcion4</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Partida',
	props: ['idp','history','myimage'],
	data() {
		return {
			id: "",
			laimgdeaqui: this.myimage,
			lahistdeaqui: this.history,
		};
	},
	methods:{
		getIdFromCookie(){
			//ya no se recupera la cookie
			/*const id = this.$cookies.get("id")
			console.log(id);*/
		},
		getImgUrl(pic) {
			return require('@/assets/hist/'+pic)
		},
		loadNewHistory(){
			this.laimgdeaqui = "street3.jpg",
			this.lahistdeaqui = "blabalbalba",
			console.log("yeah")
		}
	},
	mounted() {
		//este metodo ya no hace nada
		this.getIdFromCookie()
		console.log("idp:"+this.idp+"img:"+this.myimage)
	}
}

</script>

<style>
	.historia{
		margin-top: 200px;
		width: 100%;
		height: 800px;
	}
	.marco{
		width: 60%;
		height: 800px;
		text-align: center;
		position: relative;
		top: 0%;
		left: 20%;
		background-size: cover;
		border: 2px;
		border-color: black;
		border-style: solid;
		background-color: grey;
	}
	.hist{
		text-align: left;
		text-align: justify;
		text-justify: inter-word;
		color: black;
		font-family: 'Roboto', sans-serif;
		margin-right: 10px;
		margin-left: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	@media screen and (max-width: 768px) {
		.historia{
			margin-top: 200px;
		}
		.marco{
			width: 60%;
			height: 800px;
			text-align: center;
			position: relative;
			top: 0%;
			left: 20%;
			background-size: cover;
			border: 2px;
			border-color: black;
			border-style: solid;
			background-color: grey;
		}
	}
</style>