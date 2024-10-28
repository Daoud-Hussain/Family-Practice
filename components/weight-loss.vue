<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="text-left">
          <h1 class="text-4xl text-slate-950/100 font-semibold mb-4">
            It's more than weight loss, <br>
            <span
              class="text-emerald-600 bg-gradient-to-r from-[#126b62] to-[#47b04b] bg-clip-text text-transparent"
              :class="{ 'animated-text': isAnimating }"
              @animationend="isAnimating = false"
            >
              {{ currentText }}
            </span>
          </h1>
          
          <p class="text-gray-700 mb-6">
            The impact of weight loss goes beyond the scale.
            Get started with an online assessment today and find 
            out if you qualify.
          </p>

          <button class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white px-8 py-3 rounded-full 
            hover:bg-emerald-700 transition-colors mb-6">
            Get started
          </button>

          <p class="text-sm text-gray-600">
            Side effects of GLP-1 medications may be serious, including increased risk of 
            thyroid tumors and cancer; <span class="font-semibold">do not use if you or your family have a history 
            of MTC or MEN 2</span>. Individual weight loss results may vary.
          </p>
        </div>

        <!-- Right Content -->
        <div class="relative">
          <div class="absolute top-0 right-0 bg-yellow-300 text-black px-4 py-2 rounded-lg">
            <div class="font-bold">$49/mo</div>
            <div class="text-sm">weight loss membership</div>
          </div>
          
          <img 
            src="https://assets.lemonaidhealth.com/web/brochure/images/glp1/glp1s.jpg" 
            alt="Weight loss transformation" 
            class="rounded-2xl w-full"
          >
          
          <p class="text-center pt-2 text-sm text-gray-500 mt-2">
            Medication charged separately
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const texts = [
  "it's chasing your kid around",
  "it's rewriting your story",
  "it's investing in your health",
  "it's investing in your family",
  "it's finally running that 5K"
];

const currentText = ref(texts[0]);
let index = 0;
const isAnimating = ref(true); // Trigger animation on load

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % texts.length;
    currentText.value = texts[index];
    isAnimating.value = true; // Re-trigger animation on text change
  }, 2500);
});
</script>

<style scoped>
.animated-text {
  display: inline-block;
  animation: fallDown 0.5s ease forwards;
}

@keyframes fallDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
