<template>
	<p>Cargando historia</p>
</template>

<script>
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get('id');
	console.log(id);
</script>