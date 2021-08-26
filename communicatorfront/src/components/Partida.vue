<template>
	<Header/>
	<div>
		<p class="desk">Cargando historia</p>
		<p class="mobile">Cargando historia</p>
	</div>
</template>

<script>
import Header from './Header.vue'

export default {
	name: 'Partida',
	data() {
		return {
			id: "",
		};
	},
	components: {
		Header,
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