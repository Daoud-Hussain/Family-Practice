<template>
  <section
    ref="container"
    class="hero-section flex flex-col lg:flex-row justify-around items-center py-16 lg:py-12"
  >
    <div
      class="left-content flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full lg:w-1/2 px-6"
    >
      <!-- <span
                class="bg-yellow-300 text-yellow-900 font-bold text-xs uppercase py-1 px-3 rounded-full mb-4">New</span> -->
      <h1
        class="text-3xl lg:text-4xl font-bold leading-tight text-heroo-color mb-4"
      >
        Accessible Healthcare From the
        <span class="text-green-600">Comfort</span> of Your Home
      </h1>
      <p class="text-heroo-color mb-6 text-1.5xl.5">
        Expert care, Get medical advice, Prescriptions and Treatments online.
      </p>
      <button
        class="bg-gradient-to-r from-[#47b04b] to-[#126b62] text-white py-2 px-12 font-semibold rounded-full shadow-lg hover:from-[#126b62] hover:to-[#47b04b] transition-all"
      >
        Book an Appointment
      </button>
    </div>
    <div
      class="right-content w-5/6 md:w-3/5 lg:w-2/5 mt-10 lg:mt-0 lg:px-6 relative"
    >
      <!-- 
            <video class="object-cover w-full h-full rounded-3xl shadow-md" autoplay muted loop>
                <source src="https://assets.lemonaidhealth.com/web/brochure/videos/glp1-desktop.mp4"
                    media="(min-width: 769px)" type="video/mp4">
                <source src="https://assets.lemonaidhealth.com/web/brochure/videos/glp1-mobile.mp4"
                    media="(max-width: 768px)" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            
           -->
      <img
        class="object-cover w-full h-full rounded-3xl"
        src="~/assets/home-cover.jpg"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

const container = ref(null);

onMounted(() => {
  gsap.from(".left-content", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".right-content", {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
  });

  const btn = document.querySelector(".btn");
  btn?.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    });
  });
  btn?.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  });
});
</script>

<style scoped>
.hero-section {
  background-color: #f5f5f5;
}

.left-content {
  max-width: 500px;
}

.right-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
