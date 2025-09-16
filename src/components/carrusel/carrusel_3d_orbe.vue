<script setup>
import { ref } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import ModalPersonalizada from '../modals/modal-personalizado-imagen.vue'

import carrusel1 from '../../assets/1.png'
import carrusel2 from '../../assets/2.png'
import carrusel3 from '../../assets/image1.jpeg'
import carrusel4 from '../../assets/carrusel2_empresarial_04.png'

const currentSlide = ref(0)

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)


const galleryConfig = {
	itemsToShow: 1,
	wrapAround: true,
	slideEffect: 'fade',
	mouseDrag: false,
	touchDrag: false,
	height: 200,
	autoplay: 4000
}

const thumbnailsConfig = {
	height: 40,
	itemsToShow: 4,
	wrapAround: true,
	touchDrag: false,
	gap: 10,
}

const images = [
	{ id: 1, url: carrusel1, textoImagen: "Texto carrusel 1" },
	{ id: 2, url: carrusel2, textoImagen: "Texto carrusel 2" },
	{ id: 3, url: carrusel3, textoImagen: "Texto carrusel 3" },
	{ id: 4, url: carrusel4, textoImagen: "Texto carrusel 4" }
	];

const showModal = ref(false)

const zoomImage=ref('');
const textoImagen=ref('');
function abrirModal(image, texto) {
	showModal.value = true
	zoomImage.value = image
	textoImagen.value = texto
	console.log(textoImagen)
}

function cerrarModal() {
	showModal.value = false
}

</script>

<template>
	<div class="carousel-wrapper w-full max-w-4xl mx-auto">
		<Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
			<Slide v-for="(image, i) in images" :key="image.id">
				<div class="cube-scene">
					<div class="cube spin-x">
						<div class="face top">
							<img :src="image.url" alt="Gallery Image" />
<!--						<p>texto</p>-->
						</div>
						<div class="face back">
							<img :src="image.url" alt="" 
							@click="abrirModal(image.url, image.textoImagen)" 
							style="cursor: pointer;"
						/>
						</div>
					</div>
				</div>
			</Slide>
		</Carousel>

		<div class="thumbnails_wrapper">
			<Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
				<Slide v-for="(image, i) in images" :key="image.id">
					<template #default="{ currentIndex, isActive }">
						<div :class="['thumbnail', { 'is-active': isActive }]" @click="currentSlide = i">
							<img src="../../assets/8 Pie de página/Recurso 29.png" alt="Thumbnail Image"
								class="thumbnail-image" />
						</div>
					</template>
				</Slide>
				<template #addons>
					<Navigation />
				</template>
			</Carousel>
		</div>
	</div>

	<div>
		<ModalPersonalizada :show="showModal" @close="showModal = false">
			<div>
				<el-row :gutter="0">
					
					<el-col :span="1">
						<el-button size="small" @click="showModal = false">x</el-button>
					</el-col>
					<el-col :span="22" class="text-center">
						<h2>  {{ textoImagen }} </h2>
					</el-col>
					<el-col :span="1">
						<el-button size="small" class="flex justify-end close-btn-right" @click="showModal = false">x</el-button>
					</el-col>
				</el-row>
			</div>
			<div>
				<p style="margin:.5rem">
					
<!--	<div class="modal-body-content">-->
<!--	     <div class="img-wrapper-img">-->
			<img :src="zoomImage" alt="Imagen original"/>
<!--	     </div>-->
<!--	   </div>-->
				</p>
			</div>
			
			
		</ModalPersonalizada>
	</div>
</template>

<style scoped>
/* Ajusta ancho/alto aquí */
.carousel-wrapper {
	width: 80%;
	/* ancho fijo */
	height: 370px;
	/* alto fijo */
	//overflow: hidden;
	margin: auto;
}

/* Sobrescribir la altura forzada de los slides */
.carousel-wrapper ::v-deep .carousel__slide {
	//height: 250px !important;   /* mismo valor que el wrapper */
	//min-height: 250px !important;
	max-height: 250px !important;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* recorta para llenar */
}

.thumbnails_wrapper {
	padding-left: 20%;
	padding-right: 20%;
}






:deep(.carousel__viewport) {
	perspective: 1000px;
}

/* Escena del cubo */
.cube-scene {
	width: 100%;
	height: 370px;
	/* de esta medida se esta trasladando el 50% sobre el eje X */
	margin: auto;
	position: relative;
}

.cube {
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 4s ease;
	position: relative;
}

.face {
	position: absolute;
	inset: 0;
	backface-visibility: hidden;
}

.face img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

/* --- Giro sobre X --- */
.cube .front {
	transform: rotateX(0deg) translateZ(185px);
}

.cube .back {
	transform: rotateX(180deg) translateZ(185px);
}

.cube .top {
	transform: rotateX(90deg) translateZ(185px);
}

.cube .bottom {
	transform: rotateX(-90deg) translateZ(185px);
}

:deep(.carousel__slide--active .cube) {
	transform: rotateX(-180deg);
}









.carousel {
	--vc-nav-background: rgba(255, 255, 255, 0.7);
	--vc-nav-border-radius: 50%;
}



.gallery-image {
	border-radius: 6px;
	object-fit: cover;

}

#thumbnails {
	margin-top: 10px;
}

.thumbnail {
	width: 50%;
	height: 80%;
	cursor: pointer;
	opacity: 0.6;
	transition: opacity 0.3s ease-in-out;

	img {
		width: 30%;
		height: 100%;
		object-fit: cover;
	}
}

.thumbnail.is-active,
.thumbnail:hover {
	opacity: 1;
	width: 70%
}

/* 📱 Celulares */
@media (max-width: 600px) {
	.my-carousel img {
		height: 180px;
	}
}

/* 📲 Tablets */
@media (min-width: 601px) and (max-width: 1024px) {
	.my-carousel img {
		height: 220px;
	}
}

/* 🖥️ Escritorios grandes */
@media (min-width: 1025px) {
	.my-carousel img {
		height: 350px;
	}
}



.close-btn-right{
	  position: absolute;
	  top: 1px;
	  right: 0px;
	}
.text-center{
	text-align: center;
}



.img-wrapper {
  max-width: 90vw;   /* máximo 90% del ancho de la ventana */
  max-height: 80vh;  /* máximo 80% del alto de la ventana */
  overflow: auto;    /* aparece scroll si la imagen es más grande */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Imagen dentro del contenedor */
.img-wrapper-img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>
