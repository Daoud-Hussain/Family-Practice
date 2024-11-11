<template>
    <section class="bg-white">
      <div 
        class="container mx-auto px-4 py-12"
        v-intersection-observer="onIntersect"
        :class="[
          'animate-container',
          isVisible ? 'slide-in-active' : 'slide-in'
        ]"
      >
        <h1 class="text-3xl font-semibold text-black mb-8 items-center text-center">Our Services</h1>
        <ServiceSelectionTabs @scrollLeft="scrollLeft" @scrollRight="scrollRight" />
        <ServiceCarousel ref="carouselRef" />
      </div>
    </section>
</template>

<script setup lang="ts">
import ServiceSelectionTabs from './categories-tabs.vue';
import ServiceCarousel from './categories-carousel.vue';
import { ref } from 'vue';

const isVisible = ref(false);
const carouselRef = ref(null);

// Intersection Observer directive
const vIntersectionObserver = {
  mounted: (el: HTMLElement, binding: any) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          binding.value();
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1
      }
    );
    observer.observe(el);
  }
};

const onIntersect = () => {
  isVisible.value = true;
};

const scrollLeft = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollLeft();
    }
};

const scrollRight = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollRight();
    }
};
</script>

<style scoped>
.animate-container {
  transition: all 1.2s ease-out;
}

.slide-in {
  opacity: 0;
  transform: translateX(100px);
}

.slide-in-active {
  opacity: 1;
  transform: translateX(0);
}
</style>
