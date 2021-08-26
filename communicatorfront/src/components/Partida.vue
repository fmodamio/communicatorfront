<template>
	<p>Cargando historia</p>
</template>

<script>
export default {
	name: 'Partida',
	data() {
		return {
			id: "",
		};
	},
	methods:{
		getIdFromCookie(){
				const id = this.$cookies.get("id")
				console.log(id);
		}
	},
	mounted() {
		this.getIdFromCookie()
	}
}
	/*const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get('id');*/

</script>