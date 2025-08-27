<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/header/Header.vue'
import Footer from './views/footer/Footer.vue'
</script>

<template>
	<div id="container" class="container">
		<el-container direction="vertical" class="wrapper background">
			<Header/>	
			<RouterView />
			<Footer/>
		</el-container>
	</div>
</template>

<style scoped>
.background {
	//background:  url("./assets/Recurso 33.png") ;
	background: rgb(217,237,230);
}

.wrapper {
 	//width: 80vw;
	align-content: center;
}



</style>
