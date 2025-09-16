<script setup>
import { defineProps, defineEmits, watch, onUnmounted, ref, nextTick } from 'vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  closeOnOverlay: { type: Boolean, default: true } // opcional
})
const emit = defineEmits(['close'])

const modalRef = ref(null)
const previouslyFocused = ref(null)

// cierra al clicar el overlay (solo si el click fue en el overlay)
const onOverlayClick = (e) => {
  if (props.closeOnOverlay && e.target === e.currentTarget) emit('close')
}

// manejo de teclas (Esc + trap focus con Tab)
function onKeydown(e) {
  if (e.key === 'Escape') {
    emit('close')
    return
  }
  if (e.key === 'Tab') {
    trapFocus(e)
  }
}

// focus trap básico
function trapFocus(e) {
  const el = modalRef.value
  if (!el) return
  const focusable = Array.from(
    el.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(f => f.offsetParent !== null)

  if (focusable.length === 0) {
    e.preventDefault()
    return
  }
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

// enfocar el primer elemento del modal o el propio modal
function focusFirst() {
  const el = modalRef.value
  if (!el) return
  const focusable = el.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )
  if (focusable.length) focusable[0].focus()
  else el.focus()
}

// observar show: bloquear scroll, agregar/ quitar listeners, recordar focus
watch(() => props.show, async (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) {
    previouslyFocused.value = document.activeElement
    await nextTick()
    focusFirst()
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
    // restaurar focus
    if (previouslyFocused.value && previouslyFocused.value.focus) {
      previouslyFocused.value.focus()
    }
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <teleport to="body">
    <div
      v-if="props.show"
      @click="onOverlayClick"
      aria-modal="true"
      role="dialog"
	  class="modal-overlay"
    >
      <div ref="modalRef" 
	  tabindex="-1" 
	  role="document"
	  class="modal-wrapper"
	  >
        <!-- slot para contenido -->
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
/* OVERLAY: cubre toda la pantalla */
.modal-overlay {
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.58);
  z-index: 99999;
  padding: 1rem; /* espacio lateral en móviles */
  -webkit-overflow-scrolling: touch;
}

/* CONTENEDOR del modal */
.modal-wrapper1 {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: calc(100vh - 2rem); /* deja margen arriba/abajo */
  overflow: auto; /* permite scroll si el contenido es largo */
  background: #fff444;
  border-radius: 12px;
  box-shadow: 0 18px 50px rgba(0,0,0,0.45);
  padding: 1.25rem;
  position: relative;
  transform-origin: center;
  animation: modal-in .18s ease-out;
}

/* BOTÓN cerrar (esquina) */
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.05rem;
  cursor: pointer;
  line-height: 1;
  padding: 6px;
}

/* CUERPO del modal (slot) */
.modal-body {
  /* estilos por defecto del contenido, se pueden sobreescribir */
  color: #111827;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* ANIMACION de apertura */
@keyframes modal-in {
  from { opacity: 0; transform: translateY(-8px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Responsive: reducir padding en pantallas pequeñas */
@media (max-width: 480px) {
  .modal-wrapper { padding: 1rem; border-radius: 10px; }
  .modal-close { top: 8px; right: 8px; }
}
</style>
