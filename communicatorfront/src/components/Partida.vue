<template>
	<div>
		<br>
		<br>
		<br>
		<p>Cargando historia {{idp}}</p>
	</div>
</template>

<script>

export default {
	name: 'Partida',
	props: ['idp'],
	data() {
		return {
			id: "",
		};
	},
	methods:{
		getIdFromCookie(){
			//ya no se recupera la cookie
			/*const id = this.$cookies.get("id")
			console.log(id);*/
		}
	},
	mounted() {
		//este metodo ya no hace nada
		this.getIdFromCookie()
		console.log(this.idp)
	}
}

</script>