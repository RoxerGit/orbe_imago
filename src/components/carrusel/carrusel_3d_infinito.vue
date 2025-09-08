<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
import carrusel1 from '../../assets/1.png'
import carrusel2 from '../../assets/2.png'
import carrusel3 from '../../assets/carrusel1_prueba.png'
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
  autoplay: 8000
}

const thumbnailsConfig = {
  height: 40,
  itemsToShow: 4,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}

const images = [
{id:1, url:carrusel1, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{id:2, url:carrusel2, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{id:3, url:carrusel3, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{id:4, url:carrusel4, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}];

</script>

<template>
	<div class="carousel-wrapper w-full max-w-4xl mx-auto">	
	  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide" class="rounded-2xl shadow-lg overflow-hidden" 
	  >
	    <Slide v-for="(image, i) in images" :key="image.id">
<!--			:class="{ 'animate-spin-in': currentSlide === i }"-->
			<div class="cube-scene">
	          <div class="cube spin-x">

		         <div class="face front"> <img :src="carrusel4" alt="" /> </div> 
	            <div class="face back"> <img :src="carrusel2" alt="Gallery Image" /> </div>
				<div class="face top"> <img :src="carrusel3" alt="" /> </div>
				<div class="face bottom"> <img :src="carrusel4" alt=""class="w-full h-[400px] object-cover"/> </div>  
		
	          </div>
			</div>
	    </Slide>
	  </Carousel>
	
	  <div class="thumbnails_wrapper">
<!--		<div class="caja">-->
		  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
		    <Slide v-for="(image, i) in images" :key="image.id">
		      <template #default="{ currentIndex, isActive }">
		        <div
		          :class="['thumbnail', { 'is-active': isActive }]"
		          @click="currentSlide=i"
		        >
		          <img src="../../assets/8 Pie de página/Recurso 29.png" alt="Thumbnail Image" class="thumbnail-image" />
		        </div>
		      </template>
		    </Slide>
		    <template #addons>
		      <Navigation />
		    </template>
		  </Carousel>
<!--		</div>-->
	  </div>
  </div>
  
</template>

<style scoped>
 
/* Ajusta ancho/alto aquí */
.carousel-wrapper {
  width: 100%;  /* ancho fijo */
  height: 370px;  /* alto fijo */
  //overflow: hidden;
  margin: auto;
}

/* Sobrescribir la altura forzada de los slides */
.carousel-wrapper ::v-deep .carousel__slide {
  //height: 250px !important;   /* mismo valor que el wrapper */
  //min-height: 250px !important;
  max-height: 250px !important;
}

.thumbnails_wrapper{
	padding-left: 20%;
	padding-right: 20%;
}

/* Animación personalizada */
@keyframes spinIn {
  0% { transform: rotateY(90deg) ; opacity: 0; }
  100% { transform: rotateY(0deg); opacity: 1; }
}

@keyframes spinX {
  from { transform: rotateX(180deg); opacity: 0; }
  to   { transform: rotateX(0deg); opacity: 1; }
}

@keyframes spinZoom {
  from { transform: rotateY(180deg) scale(0.8); opacity: 0; }
  to   { transform: rotateY(0) scale(1); opacity: 1; }
}

.animate-spin-in {
  animation: spinX 0.8s ease-out both;
}






/* Cubo infinito*/

:deep(.carousel__viewport) {
  perspective: 1200px;
}

.cube-scene {
  width: 600px;
  height: 400px;
  margin: auto;
  position: relative;
}

.cube {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  position: relative;
}

/* caras */
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

/* frente y reverso */
.front  { transform: rotateX(0deg)   translateZ(200px); }
.back   { transform: rotateX(180deg) translateZ(200px); }
.top    { transform: rotateX(90deg)  translateZ(200px); }
.bottom { transform: rotateX(-90deg) translateZ(200px); }


/* animación permanente */
.spin-x {
  animation: spinX 6s infinite linear;
}

@keyframes spinX {
  from { transform: rotateX(0deg); }
  to   { transform: rotateX(360deg); }
}
/*termina cubo infinito*/
   
   
   
   
   
   
   
   
   
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 50%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
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
	
	//border-radius: 50%;
	//border-bottom-right-radius: 20px;
	//border-top-left-radius: 50%;
	//border-top-right-radius: 50%;
  }
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity:1;
  width:70%
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
</style>
