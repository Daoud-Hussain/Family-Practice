<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-semibold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <p class="text-black pb-4 text-lg">
      Occasional anxiety is a normal part of life. Stress, panic attacks and anxiety disorder are very common. But excessive anxiety means you have intense, excessive and persistent worry and fear about everyday situations. These feelings are often difficult to control and can be stressful. They can make it hard to function day to day, so it’s important to seek help.
    </p>
      <div v-for="(item, index) in faqs" :key="index" class="border-t border-gray-300">
        <button
          @click="toggleFaq(index)"
          class="w-full flex justify-between items-center text-left py-4 text-black font-semibold focus:outline-none"
        >
          <span>{{ item.question }}</span>
          <span :class="{'rotate-180': item.open}" class="transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <div v-if="item.open" class="px-4 pb-4 text-gray-700">
          <p>{{ item.answer }}</p>
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
import { reactive } from 'vue'

const faqs = reactive([
  { 
    question: 'Can you diagnose anxiety online?', 
    answer: 'Yes. Our doctors and nurse practitioners use the same guidelines to diagnose anxiety online as doctors or nurse practitioners in traditional practice.',
    open: false
  },
  { 
    question: 'Can you treat anxiety online?', 
    answer: 'You can. Lemonaid can help you understand your anxiety and, if appropriate, prescribe anxiety medicines after an online video consultation. We’ll work with you over several months to figure out the best medicine and dosage for you.',
    open: false
  },
  { 
    question: 'Are anxiety medicines effective?', 
    answer: 'They are. How a particular anxiety medicine works for you is difficult to tell in advance. That’s why it’s so important that we work with you to adjust your anxiety medicine if needed.',
    open: false
  },
  { 
    question: 'How quickly do anxiety meds work?', 
    answer: 'Anxiety medicines don’t work overnight. You may need to take an anxiety medicine for 4-8 weeks before you get a sense of how it’s working for you. You’ll probably see the full benefits of the medicines after 3 months.',
    open: false
  },
  { 
    question: 'How long will I need to take anxiety medicines?', 
    answer: 'Most people stay on anxiety medicines for 12 months the first time they take them. If your anxiety returns, then one option is to stay on anxiety medicines lifelong.',
    open: false
  },
  { 
    question: 'What anxiety medicines can I get online?', 
    answer: 'They are. How a particular anxiety medicine works for you is difficult to tell in advance. That’s why it’s so important that we work with you to adjust your anxiety medicine if needed.',
    open: false
  }
])

const toggleFaq = (index: number) => {
  faqs[index].open = !faqs[index].open
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
