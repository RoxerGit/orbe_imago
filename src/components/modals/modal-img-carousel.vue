<template>
<!--	<div class = "modal-container">-->
  <div class = "modal-window modal-alert" >
<!--	<div class="video-mask centrar" >-->
	{{ props.msg }}
		<img :src="imageUrl"/>
<!--	 </div>-->
  </div>
<!--  </div>-->
</template>

<script setup>
//import msg from '../../assets/image2.jpeg'
//const img1 = msg1

const props = defineProps(['msg'])

const imageUrl = new URL(`../../assets/${props.msg}`, import.meta.url).href
/*
export default {

  props: {
    msg: String
  },
  name: "modal-alert"
  
  
}*/
</script>

<style scoped>

  
</style>