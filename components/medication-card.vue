<template>
  <div 
    class="group relative bg-white rounded-xl p-6 hover:shadow-md transition-shadow 
           duration-200 cursor-pointer border border-gray-100"
    @click="$emit('click')"
  >
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-semibold text-gray-900 group-hover:text-forest-700 
                   transition-colors duration-200">
          {{ medication.name }} ({{ medication.genericName }})
        </h3>
        <p class="text-gray-600 mt-2">
          {{ medication.type }} ({{ medication.typeAbbreviation }})
        </p>
      </div>
      
      <ArrowRight 
        class="w-5 h-5 text-forest-600 transform group-hover:translate-x-1 
               transition-transform duration-200" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

interface MedicationProps {
  medication: {
    name: string;
    genericName: string;
    type: string;
    typeAbbreviation: string;
    slug: string;
  }
}

defineProps<MedicationProps>();
defineEmits<{
  (e: 'click'): void
}>();
</script>

// Add to tailwind.config.js if not already present
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          600: '#0D541E',
          700: '#0B4619',
          800: '#083612',
          900: '#052C0E',
        },
      }
    }
  }
}