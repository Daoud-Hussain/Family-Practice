<template>
  <div
    ref="animatedComponent"
    class="bg-green-50 flex flex-col items-center text-center py-16 px-32 md:px-24"
    :class="{'animate-in': isVisible}"
  >
    <!-- Heading Section -->
    <h2
      class="text-2xl md:text-3xl px-0 md:px-24 font-semibold text-gray-900 mb-4"
      :class="{'fade-in': isVisible}"
    >
      You must know your blood pressure for us to prescribe.
      Please go to your local Walmart, Sams Club, or Rite Aid to check your
      blood pressure for free.
    </h2>

    <!-- Icon Section -->
    <div
      class="w-20 h-20 md:w-32 md:h-32 mb-6"
      :class="{'slide-up': isVisible}"
    >
      <img
        src="~/assets/blood-pressure.svg"
        alt="Blood Pressure Icon"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Text Section -->
    <p
      class="text-lg text-gray-700 mb-4"
      :class="{'fade-in': isVisible}"
    >
      Many of your local pharmacies including Walmart, Sams Club, Safeway, and Rite Aid have machines
      that can measure your blood pressure for free.
    </p>
    <p class="text-gray-700 text-base" :class="{'fade-in': isVisible}">
      Find your nearest blood pressure machine
    </p>

    <!-- Links Section -->
    <ul class="text-blue-600 font-medium mt-2">
      <li><a href="https://secure.higi.com/locator" class="hover:underline">Higi machine</a></li>
      <li><a href="https://my.pursuanthealth.com/locations" class="hover:underline">Pursuant Health machine</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BloodPressureInfoComponent",
  data() {
    return {
      isVisible: false,
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

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animation Classes */
.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.slide-up {
  animation: slideUp 1s ease-out forwards;
}

/* When the component is visible, trigger animations */
.animate-in {
  opacity: 1;
  transition: opacity 1s ease-in;
}
</style>
