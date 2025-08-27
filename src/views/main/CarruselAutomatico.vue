<template>
	
	  <Carousel :ref="carouselAutomatico" :breakpoints="breakpoints" :autoplay="4000" :wrap-around="true" 
	  :transition="2000" :itemsToScroll="1" v-model="currentSlide">
	    <Slide v-for="slide in images" :key="slide">
	      <div class="carousel_item">
			 <el-link :href="slide.link" target="_blank" >
				<img :src="slide.image" class="image"/>			
			</el-link>
		  </div>
	    </Slide>
	  </Carousel>
<!--	  <div>-->
<!--	     <button @click="next">Next</button>-->
<!--	     <input type="number" min="0" max="9" v-model="currentSlide" />-->
<!--	     <button @click="prev">Prev</button>-->
<!--	   </div>-->
<!--	  <el-button type="success" @click="check">Success</el-button>-->

	  
</template>

<script setup>
import { Carousel,  Pagination, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import carrusel1 from '../../assets/1.png'
import carrusel2 from '../../assets/carrusel2_empresarial_04.png'
import carrusel3 from '../../assets/carrusel1_prueba.png'
import carrusel4 from '../../assets/carrusel2_empresarial_04.png'
/*
const carouselAutomatico = ref('carouselAutomatico')

//const currentSlide = myCarousel.data.currentSlide
//alert(carouselAutomatico.data)

function check() {
	console.log(carouselAutomatico.value.next())
	//${1:.value})
	carouselAutomatico.restartCarousel
}

//const access = useTemplateRef('carouselAutomatico')

function next() {
      console.log(carouselAutomatico)
	  console.log(carouselAutomatico.currentSlide)
  		console.log(carouselAutomatico.data)
    }
	
function prev() {
  this.$refs.carousel.prev()
}
	
*/
const images = [
{image:carrusel1, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{image:carrusel2, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{image:carrusel3, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}, 
{image:carrusel4, link:'https://www.youtube.com/watch?v=Xal3RTspi9Y'}];


let breakpoints= {
	  300: {
	        itemsToShow: 1,
	        snapAlign: 'center',
	      },
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    }
	
</script>

<style scoped>
.image{
	//width: 120%;
	//height: 400px;
}
.carousel_item {
  //min-height: 100px;
  //max-height: 100px;
  width: 200%;
  //background-color: var(--vc-clr-primary);
  //color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0px;

}

.el-main.--el-main-padding{
	overflow: visible!important;
	padding:0px
}

.carousel__slide {
  padding: 0px;
  
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


.el-link {
  margin-right: 8px;
}

.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}








/*.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}
.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
*/

.carousel__pagination-item{
	color:red;
}
</style>