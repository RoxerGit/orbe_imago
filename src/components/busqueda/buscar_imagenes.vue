<script setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'

const search = ref('')
const imgVisible=ref(false)
const pngImages = import.meta.glob('../../assets/*.*g')

const imageNames = Object.keys(pngImages).map(path => path.replace('../../assets/', ''))

// Filtrar según lo que teclee el usuario
const filteredImages = computed(() =>{
  if (!search.value) return []
  return imageNames.filter(name =>
    name.toLowerCase().includes(search.value.toLowerCase())
	
  )
})

const selectedImage = ref(null)

async function selectPage(name) {
  const importer = pngImages[`../../assets/${name}`]

  if (importer) {
    const mod = await importer()   // Importa en ese momento
    selectedImage.value = mod.default // URL real que Vue entiende
	imgVisible.value = true
  } else {
    console.warn('Imagen no encontrada:', name)
	imgVisible.value = false
  }
}

</script>


<template>
	<el-input v-model="search" type="text" class="responsive-input p-2" 
	placeholder="Busca tu imagen" 
	:prefix-icon="Search"
/>	
	<ul>
	     <li v-for="image in filteredImages" 
		 :key="image" style="color:black"
		 @click="selectPage(image)"
		 class="cursor-pointer text-blue-600">
	       {{ image }}
	     </li>
	   </ul>

	   <img v-if=imgVisible :src="selectedImage" alt="Imagen dinámica" />

</template>

<style scoped>
.responsive-input {
  width: 440px;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
    gap: 1rem;
  }

  .responsive-input {
    width: 100%;
  }
}
</style>