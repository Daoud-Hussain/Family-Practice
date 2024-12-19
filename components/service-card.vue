<template>
  <div class="card-container p-4 w-full sm:w-1/2 lg:w-1/3" @click="$emit('click')">
    <div class="card bg-gray-800 hover:shadow-md hover:shadow-gray-600 rounded-lg p-6 space-y-4 cursor-pointer">
      <!-- Tag section -->
      <div class="tags flex items-center space-x-2">
        <span class="tag bg-green-400 text-black rounded-full px-2 py-1 text-xs">
          {{ category }}
        </span>
        <span
          v-if="status"
          class="tag bg-green-400 text-black rounded-full px-2 py-1 text-xs"
        >
          {{ status }}
        </span>
      </div>
      <!-- Title -->
      <h2 class="text-xl font-bold text-white">{{ title }}</h2>
      <!-- Description -->
      <p class="text-gray-300">{{ description }}</p>
      <!-- Arrow link -->
      <div class="text-right">
        <span class="text-green-400 hover:underline">→</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
});

defineEmits(['click']);
</script>

<style scoped>
.card-container {
  max-width: 100%;
  will-change: transform, opacity;
<<<<<<< HEAD
}

.card {
  transition: all 4s ease;
=======
>>>>>>> 88a387f08ed5c8c0a1e8469af5b5d575ac5eeafb
}

.card {
  transition: all 4s ease;
}
</style>
