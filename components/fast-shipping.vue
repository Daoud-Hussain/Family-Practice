<template>
  <div
    ref="fastShippingSection"
    class="bg-gray-50 py-20 opacity-0 transition-opacity duration-1000"
  >
    <div class="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto font-sans">
      <!-- Image Section -->
      <div
        class="relative w-full md:w-1/2 flex justify-center items-center transition-transform duration-1000 transform opacity-0 image-section"
      >
        <div class="relative">
          <img
            src="~/assets/pills.png"
            alt="pill pack"
            class="w-64 h-auto"
          />
        </div>
      </div>

      <!-- Text Section -->
      <div
        class="max-w-md space-y-4 px-4 md:px-0 w-full md:w-1/2 transition-transform duration-1000 transform opacity-0 text-section"
      >
        <ul class="space-y-6">
          <li
            v-for="(item, index) in textItems"
            :key="index"
            class="flex items-start transition-transform duration-1000 transform opacity-0 list-item"
          >
            <span class="text-yellow-500 mr-3">&rarr;</span>
            <div>
              <p class="text-lg font-semibold text-gray-900">{{ item }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FastShippingComponent",
  data() {
    return {
      textItems: [
        "Fast and convenient prescribed to the pharmacy of your choice.",
        "We prescribe a wide range of birth control pills. All of which are very affordable.",
        "$65 consultation each year",
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;

            // Fade in the entire section
            section.classList.remove("opacity-0");

            // Animate image section
            const imageSection = section.querySelector(".image-section");
            imageSection.classList.remove("opacity-0", "transform");
            imageSection.classList.add("translate-x-0");

            // Animate text section
            const textSection = section.querySelector(".text-section");
            textSection.classList.remove("opacity-0", "transform");
            textSection.classList.add("translate-x-0");

            // Staggered animation for list items
            textSection.querySelectorAll(".list-item").forEach((item, index) => {
              item.style.transitionDelay = `${index * 0.2}s`;
              item.classList.remove("opacity-0", "transform");
              item.classList.add("translate-x-0");
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.$refs.fastShippingSection);
  },
};
</script>

<style scoped>
/* Initial hidden state for animations */
.image-section,
.text-section,
.list-item {
  transform: translateX(-30px);
}
.opacity-0 {
  opacity: 0;
}

/* Transition state for animations */
.translate-x-0 {
  transform: translateX(0);
}
</style>
