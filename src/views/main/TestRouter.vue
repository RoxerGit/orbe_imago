<script setup>
import { ref } from 'vue'
import Modal from '../../components/modals/modal-personalizado-imagen.vue'
import CarruselGallery from '../../components/carrusel/carrusel_galery.vue';
import Carrusel3dOrbe from '../../components/carrusel/carrusel_3d_orbe.vue';
import BuscarImagenes from '../../components/busqueda/buscar_imagenes.vue';
import BuscarComponentes from '../../components/busqueda/buscar_componentes.vue';


const showModal = ref(false)
</script>

<template>
	<el-main>
		<CarruselGallery/>
	</el-main>
	
	<el-divider />
	
	<el-main>
			<Carrusel3dOrbe/>
	</el-main>
  
	<div>
	
	<BuscarImagenes/>
		
<!--	<BuscarComponentes/>-->
		
	<el-divider />
    <header style="padding:20px; background:#f3f4f6">
      <button @click="showModal = true">Abrir modal</button>
    </header>

    <main style="padding:20px">		
      <p>Este es el contenido de la página. Cuando abras el modal, se bloqueará el scroll y el fondo.</p>
      <p>Prueba también con mucho contenido para ver el scroll interno del modal.</p>
    </main>

    <Modal :show="showModal" @close="showModal = false">
		<button @click="showModal = false" style="padding:.5rem 1rem">Cancelar</button>

      <h2 style="margin:0 0 .5rem">Título del modal</h2>
      <p style="margin:0 0 1rem">Contenido dentro del slot. El modal está teleporteado al <code>body</code> y queda por encima.</p>
	  <div class="img-wrapper-img">
	  		<img src="../../assets/image1.jpeg" alt="Imagen original"/>
	       </div>
      <div style="display:flex; gap:.5rem; justify-content:flex-end; margin-top:1rem">
        <button @click="showModal = false" style="padding:.5rem 1rem">Cancelar</button>
        <button @click="showModal = false" style="padding:.5rem 1rem; background:#0ea5a4; color:white; border-radius:6px">Aceptar</button>
      </div>
    </Modal>
  </div>

  
  </template>

  <style scoped>
  .img-wrapper-img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  </style>