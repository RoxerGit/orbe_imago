<template>
  <div class = "modal-window modal-alert" >
	<div class="video-mask centrar">
	 	<video class="video" autoplay loop muted width = "500px">
	       <source src="../../assets/ORBE_IMG_INICIO.mp4" type="video/mp4">
	     </video>
	 </div>
  </div>
</template>

<script>
export default {

  props: {
    text: String
  },
  name: "modal-alert"
  
  
}
</script>

<style scoped>

  


</style>