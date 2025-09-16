<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
import carrusel1 from '../../assets/1.png'
import carrusel2 from '../../assets/carrusel2_empresarial_04.png'
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
  autoplay: 4000
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}

/*const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))*/

const images = [
	{ id: 1, url: carrusel1, textoImagen: "Texto carrusel 1" },
	{ id: 2, url: carrusel2, textoImagen: "Texto carrusel 2" },
	{ id: 3, url: carrusel3, textoImagen: "Texto carrusel 3" },
	{ id: 4, url: carrusel4, textoImagen: "Texto carrusel 4" }
	];


</script>

<template>
	<div class="carousel-wrapper">	
	  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
	    <Slide v-for="(image, i) in images" :key="image.id">
	      		<img :src="image.url" alt="Gallery Image" class="gallery-image"/>
	    </Slide>
	  </Carousel>
	
	  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
	    <Slide v-for="(image, i) in images" :key="image.id">
	      <template #default="{ currentIndex, isActive }">
	        <div
	          :class="['thumbnail', { 'is-active': isActive }]"
	          @click="currentSlide=i"
	        >
	          <img :src="image.url" alt="Thumbnail Image" class="thumbnail-image" />
	        </div>
	      </template>
	    </Slide>
	
	    <template #addons>
	      <Navigation />
	    </template>
	  </Carousel>
  </div>
  
</template>

<style scoped> 
/* Ajusta ancho/alto aquí */
.carousel-wrapper {
  width: 90%;   /* ancho fijo */
  height: 370px;  /* alto fijo */
  overflow: hidden;
  margin: auto;
}

/* Sobrescribir la altura forzada de los slides */
.carousel-wrapper ::v-deep .carousel__slide {
  //height: 300px !important;   /* mismo valor que el wrapper */
  //min-height: 300px !important;
  max-height: 250px !important;
}




.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 50%;
  //height:20%
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.gallery-image {
  border-radius: 16px;
  object-fit: cover;
  
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 50%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
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
