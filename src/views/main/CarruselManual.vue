<script setup>
import { defineComponent, ref, computed } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CarruselAutomaticoInterno from './CarruselAutomaticoInterno.vue'



import 'vue3-carousel/dist/carousel.css'
import button1 from '../../assets/4 Servicios/Recurso 10.png'
import button2 from '../../assets/4 Servicios/Recurso 11.png'
import button3 from '../../assets/4 Servicios/Recurso 12.png'
import button4 from '../../assets/4 Servicios/Recurso 13.png'
import button5 from '../../assets/4 Servicios/Recurso 14.png'
import button6 from '../../assets/4 Servicios/Recurso 15.png'

const buttons = [
{id:1,image:button1, link:'https://www.youtube.com/embed/Xal3RTspi9Y'}, 
{id:2,image:button2, link:'https://www.youtube.com/embed/JbBKMsftAYc'}, 
{id:3,image:button3, link:'https://www.youtube.com/embed/sPpMkr8-Ako'}, 
{id:4,image:button4, link:'https://www.youtube.com/embed/vtKu6_-0qjs'},
{id:5,image:button5, link:'https://www.youtube.com/embed/vtKu6_-0qjs'},
];

const currentSlide = ref(0);
   
function slideTo(val) {
	currentSlide = val
}
  
let breakpointsManual= {
	  300: {
	        itemsToShow: 2,
	        snapAlign: 'center',
	      },
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
	
	  

</script>

<template>
		<Carousel 
		  id="thumbnails"
		  :breakpoints="breakpointsManual"
		  :itemsToScroll="1"
		  :modelValue="0"
		  v-model="currentSlide"
		  ref="carousel"
		>
		  <Slide v-for="slide in buttons" :key="slide.id">
		    <div class="carousel__item1" @click="slideTo(slide.id - 1)">
				<img :src="slide.image" class="image"/>
			</div>
		  </Slide>
		</Carousel>
		
		
	  <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" >
	    <Slide v-for="slide in buttons" :key="slide.id">
	      <div class="carousel__item1">
			<div style="width:60%; align-items: center;">
					<CarruselAutomaticoInterno/>
			</div>
			<el-row :gutter="20">
				<el-col :span="12">
					<div>
						<iframe width="300px" height="300px" :src="slide.link" 
						title="Las Ondas Alfa Activan El 100% De Su Cerebro Después De 10 Minutos, Mejoran La Memoria Y La Intel..." 
						frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
				</el-col>
				<el-col :span="12">
					<div> 
						<iframe width="200px" height="80px" scrolling="no" frameborder="no" allow="autoplay" 
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/156171843&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
						</iframe>
						<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
							<a href="https://soundcloud.com/es" title="Call me eS" target="_blank" style="color: #cccccc; text-decoration: none;">
								Call me eS
							</a> · 
							<a href="https://soundcloud.com/es/mapportraits" title="Map Portraits" target="_blank" style="color: #cccccc; text-decoration: none;">Map Portraits</a>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	    </Slide>
	  </Carousel>
	
	  <Carousel
	    id="thumbnails"
	    :breakpoints="breakpointsManual"
		:itemsToScroll="1"
		:modelValue="0"
	    v-model="currentSlide"
	    ref="carousel"
	  >
	    <Slide v-for="slide in buttons" :key="slide.id">
	      <div class="carousel__item1" @click="slideTo(slide.id - 1)">
			<img :src="slide.image" class="image"/>
		</div>
	    </Slide>
	  </Carousel>

</template>



<style scoped>
.el-row {
  margin-bottom: 2px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


.carousel__item1 {
  //min-height: 100px;
  //max-height: 800px;
  width: 100%;
	//background-color: var(--vc-clr-primary);
	color: var(--vc-clr-white);
	font-size: 20px;
	//border-radius: 8px;
	/*display: flex;*/
	//justify-content: center;
	//align-items: center;
}

.carousel__item_borrar {
  min-height: 100px;
  max-height: 200px;
  //width: 20px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  vertical-align: top;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.image{
	cursor: pointer;
}
</style>