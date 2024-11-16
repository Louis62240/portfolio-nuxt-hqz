<template>
  <Teleport to="body">
    <!-- Overlay with blur effect -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-[#004D3D]/40 backdrop-blur-md z-50"
        @click="$emit('update:modelValue', false)"
      />
    </transition>

    <!-- Modal with animations -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-4 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 scale-100 opacity-100"
      leave-to-class="translate-y-4 scale-95 opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-x-0 top-[10vh] mx-auto max-w-xl p-6 z-50"
      >
        <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
          <!-- Styled header -->
          <div class="px-8 py-6 border-b border-gray-100/50">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-[#004D3D]">Let's Connect</h3>
                <p class="text-sm text-gray-500">I'll get back to you as soon as possible</p>
              </div>
              <button
                @click="$emit('update:modelValue', false)"
                class="group p-2 hover:bg-[#004D3D]/5 rounded-full transition-colors"
              >
                <svg
                  class="w-6 h-6 text-gray-400 group-hover:text-[#004D3D] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Enhanced content -->
          <div class="px-8 py-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-5">
                <div class="relative">
                  <label class="block text-sm font-medium text-[#004D3D] mb-2">
                    Full Name
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    class="w-full px-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 
                           focus:border-[#006A4E] focus:ring-2 focus:ring-[#006A4E]/20 
                           outline-none transition-all placeholder:text-gray-400"
                    required
                  />
                </div>

                <div class="relative">
                  <label class="block text-sm font-medium text-[#004D3D] mb-2">
                    Business Email
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    class="w-full px-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 
                           focus:border-[#006A4E] focus:ring-2 focus:ring-[#006A4E]/20 
                           outline-none transition-all placeholder:text-gray-400"
                    required
                  />
                </div>

                <div class="relative">
                  <label class="block text-sm font-medium text-[#004D3D] mb-2">
                    Your Message
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="4"
                    placeholder="Describe your project..."
                    class="w-full px-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 
                           focus:border-[#006A4E] focus:ring-2 focus:ring-[#006A4E]/20 
                           outline-none transition-all placeholder:text-gray-400 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-4 bg-gradient-to-r from-[#006A4E] to-[#004D3D] 
                       text-white font-medium rounded-xl hover:shadow-lg 
                       hover:shadow-[#006A4E]/20 transform hover:-translate-y-0.5 
                       transition-all duration-200 focus:ring-2 focus:ring-[#006A4E]/20"
              >
                <span class="flex items-center justify-center">
                  Send Message
                  <svg 
                    class="w-5 h-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <!-- Footer with additional information -->
          <div class="px-8 py-4 bg-gray-50/50 rounded-b-2xl border-t border-gray-100/50">
            <p class="text-sm text-gray-500 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  emit('update:modelValue', false)
}
</script>