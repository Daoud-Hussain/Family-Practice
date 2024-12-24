<template>
  <div
    ref="animatedComponent"
    class="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6 md:px-12"
    :class="{'animate-in': isVisible}"
  >
    <!-- Illustration -->
    <div
      class="w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0 md:mr-24"
      :class="{'scale-up': isVisible}"
    >
      <img
        src="~/assets/support.png"
        alt="Customer Support Illustration"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Text Section -->
    <div class="text-center md:text-left md:ml-8">
      <h3
        class="text-xl font-semibold text-gray-900 mb-2"
        :class="{'fade-in': isVisible}"
      >
        If you have any questions please Call-Email-Text we are here to help you.
      </h3>
      <p
        class="text-lg font-medium text-green-700 mb-4"
        :class="{'fade-in-delay': isVisible}"
      >
      702-986-1275
      </p>
      <a href="mailto:Integrity@integritymedicalweightloss.com" class="text-sm text-gray-600" :class="{'fade-in-delay': isVisible}">
        Integrity@integritymedicalweightloss.com
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerSupportComponent",
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

@keyframes scaleUp {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDelay {
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

.scale-up {
  animation: scaleUp 1s ease-out forwards;
}

.fade-in-delay {
  animation: fadeInDelay 1s ease-out forwards;
  animation-delay: 0.5s; /* Delayed fade-in for the text */
}

.animate-in {
  opacity: 1;
  transition: opacity 1s ease-in;
}
</style>
