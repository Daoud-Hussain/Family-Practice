<template>
  <section class="py-16 bg-sky-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        Treatment for anxiety in 3 easy steps
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
            @click="handleGetStarted"
            class="mt-8 bg-green-950 text-white py-2 px-12 font-semibold rounded-full shadow-lg transition-all"
      > Get Started </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery.png'

const router = useRouter()

const steps = ref([
  { iconUrl: feelingsIcon, title: 'Let us know how you\'ve been feeling', description: 'We want to understand your experience so we can provide the best treatment.' },
  { iconUrl: DoctorIcon, title: 'Talk with an experienced doctor or nurse practitioner', description: 'Learn about anxiety treatment options from our supportive medical team.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds for anxiety delivered to your door', description: 'The medicine arrives in 2-3 days after your visit is completed.' }
])

const handleImageError = (index: number) => console.error(`Failed to load image for step ${index + 1}`)
const handleGetStarted = () => router.push('/assessment')
</script>
