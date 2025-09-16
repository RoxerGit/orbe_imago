<script setup>
import { ref } from "vue"

const showModal = ref(false)
</script>

<template>
  <div class="p-6 text-center">
    <!-- Botón para abrir -->
    <button 
      @click="showModal = true" 
      class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Abrir modal
    </button>

    <!-- Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div class="bg-white rounded-2xl shadow-xl p-6 w-96 relative animate-fadeIn">
        <h2 class="text-xl font-bold mb-4">Soy un modal ✨</h2>
        <p class="mb-6">Este es un ejemplo de modal en Vue 3 sin librerías.</p>

        <div class="flex justify-end gap-2">
          <button 
            @click="showModal = false"
            class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button 
            @click="showModal = false"
            class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>
