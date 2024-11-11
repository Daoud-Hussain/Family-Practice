<template>
  <section class="py-16 bg-sky-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Use the title prop here -->
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        {{ title }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="bg-white rounded-2xl p-8 flex flex-col items-center shadow-sm"
        >
          <div class="w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center mb-6">
            <img 
              :src="step.iconUrl" 
              :alt="step.title"
              class="w-16 h-16 object-contain"
              @error="handleImageError(index)"
            />
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ step.title }}</h3>
          <p class="text-gray-600">{{ step.description }}</p>
        </div>
      </div>

      <button
        class="mt-8 bg-green-950 text-white py-2 px-12 font-semibold rounded-full shadow-lg transition-all"
        @click="handleGetStarted"
      >
        Get Started
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from '@vue/runtime-core'

// Define the props
const props = defineProps<{
  title: string,
  steps: Array<{ iconUrl: string, title: string, description: string }>
}>()

const handleImageError = (index: number) => console.error(`Failed to load image for step ${index + 1}`)

// Redirects to the JotForm URL when the "Get Started" button is clicked
const handleGetStarted = () => {
  window.location.href = 'https://form.jotform.com/243045844620150'
}
</script>
