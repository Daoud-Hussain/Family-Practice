<template>
  <div ref="insomniaSection"
    class="bg-blue-50 flex flex-col md:flex-row items-center justify-center py-16 px-8 md:py-24 md:px-16 opacity-0 transition-opacity duration-1000">

    <div
      class="w-full md:w-1/2 flex justify-center items-center transform opacity-0 transition-transform duration-1000 image-section">
      <img src="~/assets/insomnia-home.png" alt="Insomnia treatment" class="w-64 h-auto" />
    </div>

    <!-- Text Section -->
    <div
      class="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left transform opacity-0 transition-transform duration-1000 text-section">
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">
        Insomnia treatment
      </h2>
      <p class="text-lg text-gray-700 mb-6">
        Problems Sleeping? Relax we have strategies and medications to help with that. Lets
        get you rested and enjoying your day.
      </p>
      <p class="md:w-2/5 text-center offer text-lg text-gray-700 mb-6">
        50% off your first month!
      </p>

      <button
        class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white font-semibold px-12 py-3 rounded-full shadow-md hover:from-[#47b04b] hover:to-[#126b62] transition-all animate-bounce">
        Get started
      </button>
      <p class="mt-4 text-gray-600">Cancel anytime</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsomniaTreatmentComponent",
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

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.$refs.insomniaSection);
  },
};
</script>

<style scoped>
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.offer {
  background: #fff3e0;
  padding: 10px 20px;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.custom {
  width: '20%'
}

/* Initial hidden state for animations */
.image-section,
.text-section {
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