<template>
	<!--<Header/>-->
	<div>
		<p>Cargando historia</p>
	</div>
</template>

<script>
//import Header from './Header.vue'

export default {
	name: 'Partida',
	data() {
		return {
			id: "",
		};
	},
	/*components: {
		Header,
	},*/
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

</script>