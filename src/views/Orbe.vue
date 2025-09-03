<script setup lang="ts">
import Carrusel3d from './main/carrusel/carrusel_3d.vue';

function x(){
	alert("xyz")
}


import { container as ModalContainer } from "jenesius-vue-modal"

import {openModal} from "jenesius-vue-modal"
import Modal from "../components/modals/modal-intro.vue";
import {ref, onMounted, reactive} from "vue";

let isActive = true;

const classObject = reactive({
  'modal-container': isActive
})

onMounted(() => {
	openModalVideo()
})

	
async function openModalVideo() {
	const modal = await openModal(Modal, { msg: "Close here only" });
	modal.onclose = (event) => {
		classObject['modal-container']=false		
		
	}
}
	
</script>

<template>
	
	<el-main class="main">
		<Carrusel3d/>
	</el-main>

	  
	<el-main>
		<Carrusel3d/>
	</el-main>
	
	<div class="seccion">
		
	</div>
	
	<el-backtop :right="100" :bottom="100" @click="x()">
		<img src="../assets/6 Contacto Fijo/Recurso 24.png"/>
	</el-backtop>	

	<modal-container :class="classObject"/>

</template>

<style scoped>

/*


.modal-container {
    align-items: flex-end;
    background-color: rgba(999, 999, 999, 0.90);
}	


.modal-container-inactive {
    background-color: transparent;
}	


.side-link {
  color: purple;
  font-weight: bold;
}


.body{
	padding-top:20px ;
	padding-left: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
}

.seccion{
	background:  url("../assets/recorte.png");
	background-size: contain;
	background-repeat: no-repeat;
	height: 500px;
}
*/

</style>