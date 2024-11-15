// composables/useToast.ts
import { ref } from 'vue'

interface Toast {
  message: string
  type: 'success' | 'error' | 'info'
  id: number
}

export const useToast = () => {
  const toasts = ref<Toast[]>([])
  let nextId = 0

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = nextId++
    toasts.value.push({ message, type, id })
    
    setTimeout(() => {
      removeToast(id)
    }, 3000)
  }

  const removeToast = (id: number) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id)
  }

  return {
    toasts,
    showToast,
    removeToast
  }
}