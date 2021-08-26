<template>
	<Header/>
		<br> 
		<p class="cita desk">Si la felicidad prevista no llega a materializarse, siempre está la posibilidad de echarle la culpa a una elección equivocada antes que a nuestra incapacidad para vivir a la altura de las oportunidades que se nos ofrecen.”</p>
		<p class="autor desk">Zygmunt Bauman</p>
		<p class="cita desk">“Uno de los más grandes errores es juzgar a los políticos y sus programas por sus intenciones, en vez que por sus resultados.”</p>
		<p class="autor desk">Milton Friedman (aka Morgan Freeman)</p>
		<p class="cita desk">“Me comí una hamburguesa y el juego me llamó alienado. ¡Fue genial!”</p>
		<p class="autor desk">Pupi24</p>
		<p class="cita mobile">Si la felicidad prevista no llega a materializarse, siempre está la posibilidad de echarle la culpa a una elección equivocada antes que a nuestra incapacidad para vivir a la altura de las oportunidades que se nos ofrecen.”</p>
		<p class="autor mobile">Zygmunt Bauman</p>
		<p class="cita mobile">“Uno de los más grandes errores es juzgar a los políticos y sus programas por sus intenciones, en vez que por sus resultados.”</p>
		<p class="autor mobile">Milton Friedman (aka Morgan Freeman)</p>
		<p class="cita mobile">“Me comí una hamburguesa y el juego me llamó alienado. ¡Fue genial!”</p>
		<p class="autor mobile">Pupi24</p>
		<br>
		<br>
		<br>
		<br>
		<p class="desk">Bienvenido a COMMUNICATOR, un juego inspirado en la vida cotidiana y basado en algunas de las doctrinas filosóficas que defienden la capacidad de libre elección del ser humano y el valor teleológico de sus decisiones.</p>
		<p class="desk">El equipo humano detrás de la ideación y programación de esta tosca simulación vital está en profundo desacuerdo con dichas doctrinas en general y sus axiomas en particular. De hecho, las considera perniciosas para la vida, o cuanto menos, meros instrumentos adaptativos al servicio del poder para el control de las masas a lo largo de la historia.</p>
		<p class="desk">En los últimos siglos de este mundo, cada vez más globalizado y coMMunicado, estas teorías aparentemente “buenas” para el ser humano han sido utilizadas, con total desvergüenza, para sustentar ideologías de lo más diversas, desde aquellas que se aferran agresivamente a la idea del individuo, hasta aquellas que intentan regular los sistemas colectivos más utópicos.</p>
		<p class="desk">Pero quizá es pronto todavía para comprender las profundas relaciones entre COMMUNICATOR y el día a día de todos nosotros, o con “la sociedad del cansancio”, según la describe Byung-Chul Han, incluso con el Tao, o con el legado de la Unión Soviética durante el periodo estalinista, por ejemplo.</p>
		<p class="desk">Tras una experiencia superficial, para muchos, este juego será una tontería. Perfecto, no fue pensado para ellos. Sin embargo, tras unas cuantas partidas, la experiencia adquirida permitirá a los jugadores más reflexivos profundizar sobre algunos conceptos, y pronto estas relaciones serán evidentes para los jugadores más intuitivos, y a la larga, una cuestión obvia para todos.</p>
		<p class="desk">El jugador no debe olvidar en ningún momento que objetivo principal es entretener a los usuarios, el equipo humano no se hace responsable de los posibles cambios en la cosmovisión tras las primeras partidas, ni de los posibles paralelismos que puedan establecer con sus propias vidas, ni muchísimo menos de las metalecturas e ironías implícitas en el propio juego.</p>
		<p class="desk">Un consejo al jugador primerizo:
		No se confíe, ya que aquí, como en la vida, nada es lo que parece…</p>
		<p class="mobile">Bienvenido a COMMUNICATOR, un juego inspirado en la vida cotidiana y basado en algunas de las doctrinas filosóficas que defienden la capacidad de libre elección del ser humano y el valor teleológico de sus decisiones.</p>
		<p class="mobile">El equipo humano detrás de la ideación y programación de esta tosca simulación vital está en profundo desacuerdo con dichas doctrinas en general y sus axiomas en particular. De hecho, las considera perniciosas para la vida, o cuanto menos, meros instrumentos adaptativos al servicio del poder para el control de las masas a lo largo de la historia.</p>
		<p class="mobile">En los últimos siglos de este mundo, cada vez más globalizado y coMMunicado, estas teorías aparentemente “buenas” para el ser humano han sido utilizadas, con total desvergüenza, para sustentar ideologías de lo más diversas, desde aquellas que se aferran agresivamente a la idea del individuo, hasta aquellas que intentan regular los sistemas colectivos más utópicos.</p>
		<p class="mobile">Pero quizá es pronto todavía para comprender las profundas relaciones entre COMMUNICATOR y el día a día de todos nosotros, o con “la sociedad del cansancio”, según la describe Byung-Chul Han, incluso con el Tao, o con el legado de la Unión Soviética durante el periodo estalinista, por ejemplo.</p>
		<p class="mobile">Tras una experiencia superficial, para muchos, este juego será una tontería. Perfecto, no fue pensado para ellos. Sin embargo, tras unas cuantas partidas, la experiencia adquirida permitirá a los jugadores más reflexivos profundizar sobre algunos conceptos, y pronto estas relaciones serán evidentes para los jugadores más intuitivos, y a la larga, una cuestión obvia para todos.</p>
		<p class="mobile">El jugador no debe olvidar en ningún momento que objetivo principal es entretener a los usuarios, el equipo humano no se hace responsable de los posibles cambios en la cosmovisión tras las primeras partidas, ni de los posibles paralelismos que puedan establecer con sus propias vidas, ni muchísimo menos de las metalecturas e ironías implícitas en el propio juego.</p>
		<p class="mobile">Un consejo al jugador primerizo:
		No se confíe, ya que aquí, como en la vida, nada es lo que parece…</p>
		<button class="button1" @click="goToNewGame()">Nuevo juego </button>

</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Inicial',
  components: {
    Header,
  },
  methods:{
    goToNewGame(){
   this.$router.push('/newgame'); 
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
.text{
	margin-right: 150px;
	margin-left: 150px;
	margin-top: 0px;
	margin-bottom: 0px;
}
</style>