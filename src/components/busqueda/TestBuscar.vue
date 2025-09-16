<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'

// 1️⃣ Simulación de import.meta.glob para ejemplo
const pages = import.meta.glob('../../assets/*.png')

// 2️⃣ Estado reactivo del buscador
const search = ref('')

// 3️⃣ Normalizamos los nombres (quitamos './pages/' y '.vue')
const pageNames = Object.keys(pages).map(path =>
  path.replace('../../assets/', '').replace('.vue', '')
)

// 4️⃣ Filtrar páginas según input
const filteredPages = computed(() =>
  pageNames.filter(name =>
    name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// 5️⃣ Componente seleccionado dinámicamente
const selectedComponent = ref(null)

async function selectPage(name) {
  const path = `./pages/${name}.vue`
  if (pages[path]) {
    const module = await pages[path]()
    selectedComponent.value = module.default
  } else {
    console.error('Página no encontrada:', name)
  }
}
</script>

<template>
  <div class="p-4">
    <input
      v-model="search"
      placeholder="Buscar página..."
      class="border rounded p-2 mb-4 w-full"
    />

    <!-- Lista filtrada -->
    <ul class="list-disc pl-6 mb-4" style="color:black">
      <li
        v-for="page in filteredPages"
        :key="page"
        @click="selectPage(page)"
        class="cursor-pointer hover:text-blue-600"
      >
        {{ page }}
      </li>
    </ul>

    <!-- Componente dinámico -->
    <component
      v-if="selectedComponent"
      :is="selectedComponent"
      class="border p-4"
    />
  </div>
</template>
