<script setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import carrusel1 from '../../assets/header.png'
import carrusel2 from '../../assets/footer.png'
import carrusel3 from '../../assets/eliptica.png'
import carrusel4 from '../../assets/redonda.png'

import Modal from "../../components/modals/modal-img-carousel.vue";
import {openModal} from "jenesius-vue-modal"

const images = [
{image:carrusel1, link:'image1.jpeg'}, 
{image:carrusel2, link:'image2.jpeg'}, 
{image:carrusel3, link:'image3.jpeg'}, 
{image:carrusel4, link:'image4.jpeg'}];

function openModalFunc(imageName){
	openModal(Modal, { msg: imageName });
}

</script>

<template>
	
	  <Carousel :autoplay="2000" :wrap-around="true" :transition="3000">
	    <Slide v-for="slide in images" :key="slide">
	      <div class="carousel_item">
<!--			 <el-link :href="slide.link" target="_blank" >-->
				<img :src="slide.image" class="image" @click="openModalFunc(`${slide.link}`)" style="cursor: pointer;"/>
<!--			</el-link>-->
		  </div>
	    </Slide>
	  </Carousel>
	  
	  <modal-container/>
	
</template>

<style scoped>
.image{
	width: 150%;
	height: 200px;
}
.carousel__item {
  min-height: 100px;
  max-height: 100px;
  width: 200%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  
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
</style>