<template>
  <div
    ref="animatedComponent"
    class="bg-white py-16 px-6 md:px-12"
    :class="{'animate-in': isVisible}"
  >
    <!-- Title Section -->
    <div class="text-center mb-12" :class="{'fade-in': isVisible}">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">No insurance? No problem</h2>
      <p class="text-lg text-gray-600">Get the best deal on popular brands</p>
    </div>

    <!-- Brands List -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
      <ul class="text-sm text-gray-700" v-for="(list, index) in brandLists" :key="index">
        <li v-for="(item, idx) in list" :key="idx" :class="{'stagger-fade-in': isVisible}">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Recommendation Section -->
    <div class="border-t mt-12 pt-8 text-center" :class="{'fade-in-up': isVisible}">
      <h3 class="text-lg md:text-xl font-medium text-gray-900 mb-4">Confused on which birth control to choose?</h3>
      <p class="text-sm text-gray-600 mb-6">
        We highly recommend either <a href="#" class="text-green-700 font-semibold">Sprintec </a> or <a href="#" class="text-green-700 font-semibold">Errin</a>.
      </p>
      <button
        class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white py-2 px-12 font-semibold rounded-full shadow-lg hover:from-[#47b04b] hover:to-[#126b62] transition-all"
      >
        Get started
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsuranceInfoComponent",
  data() {
    return {
      isVisible: false,
      brandLists: [
        ["Blisovi Fe 1/20", "Camila", "Delyla", "Errin", "Estarylla", "Gildess FE 1/20", "Gildess FE 1.5/30", "Heather", "Jolivette", "Junel FE 1/20", "Junel FE 1.5/30", "Larin Fe 1/20", "Larin Fe 1.5/30", "Larissa"],
        ["Levora", "Loestrin FE 1/20", "Loestrin FE 1.5/30", "Lutera", "Microgestin FE 1/20", "Microgestin FE 1.5/30", "MonoNessa", "Nor-QD", "Nora-BE", "Ocella", "Orsythia", "Ortho-Cyclen", "Ortho-Tri Cyclen", "Previfem"],
        ["Sprintec", "Sronyx", "Syeda", "Tri Estarylla", "Tri Lo Estarylla", "Tri Lo Marzla", "Tri Previfem", "Tri Sprintec", "Trinessa", "Trinessa Lo", "Yasmin", "Yaz", "Zarah"]
      ]
    };
  },
  mounted() {
    // Initialize the IntersectionObserver when the component is mounted
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.animatedComponent); // Stop observing once it's in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    observer.observe(this.$refs.animatedComponent); // Start observing the component
  },
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes staggerFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Animation Classes */
.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.stagger-fade-in {
  animation: staggerFadeIn 1s ease-out forwards;
  animation-delay: 0.1s;
}

.animate-in {
  opacity: 1;
  transition: opacity 1s ease-in;
}
</style>
