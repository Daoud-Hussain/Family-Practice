<template>
  <section class="bg-gray-950 text-center py-12">
    <h1 class="text-4xl text-white font-semibold px-7 md:px-0 mb-8">What can we help you with today?</h1>
    <div class="container mx-auto px-4">
      <div 
        class="flex flex-wrap justify-center gap-4"
        v-intersection-observer="onIntersectGrid"
      >
        <ServiceCard
          v-for="(service, index) in filteredServices"
          :key="service.id"
          :title="service.title"
          :category="service.category"
          :status="service.status"
          :description="service.description"
          @click="navigateToService(service)"
          :class="[
            isGridVisible ? 'animate-card' : 'opacity-0 translate-y-16',
          ]"
          :style="{
            animationDelay: `${index * 200}ms`,
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { ServicesCategory } from "~/composables/useState";

const router = useRouter();
const serviceCategory = useServiceCategory();
const isGridVisible = ref(false);

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
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    observer.observe(el);
  }
};

const onIntersectGrid = () => {
  isGridVisible.value = true;
};

const services = [
  {
    id: 1,
    title: "GLP-1s",
    category: ServicesCategory.weightLoss,
    status: "New",
    description: "Effective weight loss solution.",
    route: "/weight-loss",
  },
  {
    id: 2,
    title: "Erectile Dysfunction",
    category: "Men's Health",
    status: "Popular",
    description: "Solutions for erectile dysfunction.",
    route: "/weight-loss",
  },
  {
    id: 3,
    title: "Anxiety",
    category: "Mental Health",
    status: "Popular",
    description: "Help managing anxiety.",
    route: "/anxiety",
  },
  {
    id: 4,
    title: "Depression",
    category: "Mental Health",
    status: "Popular",
    description: "Support for dealing with depression.",
    route: "/weight-loss",
  },
  {
    id: 5,
    title: "Birth Control",
    category: "Women’s Health",
    status: "Popular",
    description: "Options for birth control.",
    route: "/birth-control-delivery",
  },
  {
    id: 6,
    title: "Hair Loss",
    category: "Men’s Health",
    status: "Popular",
    description: "Treatments for hair loss.",
    route: "/weight-loss",
  },
  {
    id: 7,
    title: "Insomnia",
    category: "Mental Health",
    status: "Popular",
    description: "Help with insomnia.",
    route: "/weight-loss",
  },
  {
    id: 8,
    title: "Ella® Morning-After Pill",
    category: "Women’s Health",
    status: "Popular",
    description: "Emergency contraception.",
    route: "/weight-loss",
  },
  {
    id: 9,
    title: "Seasonal Affective Disorder",
    category: "Mental Health",
    description: "Managing seasonal affective disorder.",
    route: "/weight-loss",
  },
  {
    id: 10,
    title: "Primary Care Complete",
    category: "General Health",
    description: "Comprehensive primary care services.",
    route: "/weight-loss",
  },
  {
    id: 11,
    title: "Acne",
    category: "Skin",
    description: "Treatment for acne.",
    route: "/weight-loss",
  },
  {
    id: 12,
    title: "Premature Ejaculation",
    category: "Men’s Health",
    description: "Solutions for premature ejaculation.",
    route: "/weight-loss",
  },
  {
    id: 13,
    title: "Urinary Tract Infection",
    category: "Women’s Health",
    status: "Popular",
    description: "UTI treatment options.",
    route: "/weight-loss",
  },
  {
    id: 14,
    title: "Cold Sore",
    category: "General Health",
    description: "Cold sore remedies.",
    route: "/weight-loss",
  },
  {
    id: 15,
    title: "Genital Herpes",
    category: "General Health",
    status: "Popular",
    description: "Managing genital herpes.",
    route: "/weight-loss",
  },
  {
    id: 16,
    title: "Asthma",
    category: "General Health",
    description: "Asthma treatment and care.",
    route: "/weight-loss",
  },
];

const filteredServices = computed(() => {
  if (serviceCategory.value === ServicesCategory.all) {
    return services;
  }
  return services.filter(
    (service) => service.category === serviceCategory.value
  );
});

const navigateToService = (service: any) => {
  if (service.route) {
    router.push(service.route);
  }
};
</script>

<style scoped>
.animate-card {
  animation: cardAppear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add transition classes */
.opacity-0 {
  opacity: 0;
}

.translate-y-16 {
  transform: translateY(4rem);
}
</style>

