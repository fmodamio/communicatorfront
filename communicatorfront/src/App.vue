<template>
	<router-view></router-view>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style>
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
	p{
		text-align: left;
		text-align: justify;
		text-justify: inter-word;
		color: aqua;
		font-family: 'Roboto', sans-serif;
		margin-right: 150px;
		margin-left: 150px;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	body{
		background-image: url('~@/assets/nasa2.jpg');
		background-color: #030119;
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 100px;
	}

	@media screen and (max-width: 768px) {
		.cita{
			text-align: right;
			color: aqua;
			font-family: 'Roboto', sans-serif;
			font-weight:100;
			margin-right: 30px;
			margin-left: 30px;
		}
		.autor{
			text-align: right;
			color: aqua;
			font-family: 'Roboto', sans-serif;
			margin-right: 30px;
			margin-left: 30px;
		}
		p{
			text-align: left;
			text-align: justify;
			text-justify: inter-word;
			color: aqua;
			font-family: 'Roboto', sans-serif;
			margin-right: 10px;
			margin-left: 10px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		body{
			background-image: url('~@/assets/space2.jpg');
			background-color: #030119;
			background-size: auto;
			background-repeat: no-repeat;
		}
	}
</style>