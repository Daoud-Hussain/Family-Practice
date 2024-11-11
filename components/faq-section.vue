<template>
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Title Section -->
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        {{ title }}
      </h2>

      <!-- FAQ Questions and Answers -->
      <div v-for="(qa, index) in faqs" :key="index" class="text-left mb-8 ">
        <h3 class="text-xl font-semibold text-black mb-2 text-2xl">
          {{ qa.question }}
        </h3>
        <!-- Render answer as HTML for multiple paragraphs and bolding -->
        <div class="text-black text-lg" v-html="qa.answer"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from '@vue/runtime-core'

// Define props for title and a list of questions and answers
const props = defineProps<{
  title: string,
  faqs: Array<{ question: string, answer: string }>
}>()
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
