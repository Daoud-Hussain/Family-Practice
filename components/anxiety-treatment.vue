<template>
  <section
    ref="container"
    class="hero-section flex flex-col lg:flex-col justify-around items-center pb-10"
  >
    <div
      class="main-container flex flex-col lg:flex-row justify-around items-center py-16 lg:pt-16"
    >
      <div class="right-content-wrapper px-4 md:px-0">
        <div class="background-overlay"></div>
        <img
          src="~/assets/anxiety.png"
          alt="Anxiety Image"
          class="anxiety-image"
        />
      </div>

      <div
        class="left-content flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full lg:w-1/2 px-6"
      >
        <h1
          class="text-3xl pt-8 md:pt-0 lg:text-4xl font-bold leading-tight text-heroo-color mb-4"
        >
          Online anxiety treatment
        </h1>
        <p class="text-heroo-color mb-6 text-1.5xl.5">
          Find anxiety relief with expert one-on-one medical care and anxiety
          medication delivered each month
        </p>
        <p class="custom-para px-3 py-2 mb-8">$95 $25 for your first month</p>
        <button
          class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white py-2 px-12 font-semibold rounded-full shadow-lg hover:from-[#47b04b] hover:to-[#126b62] transition-all"
          @click="handleGetStarted"
        >
          Take the first Step
        </button>
      </div>
    </div>

    <p class="para">
      If you're having a psychiatric emergency, call 911 or go to the nearest
      emergency room. You can also call the National Suicide Prevention Hotline
      1-800-273-8255 or text “home” to 741-741.
    </p>
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


const handleGetStarted = () => {
  window.location.href = 'https://form.jotform.com/243045844620150'
}
</script>

<style scoped>
.hero-section {
  background-color: #f5f5f5;
  padding-top: 40px;
}

.left-content {
  max-width: 500px;
}

.right-content-wrapper {
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-overlay {
  position: absolute;
  top: -40px;
  left: -40px;
  width: 100%;
  height: 100%;
  background-color: rgb(254 202 202);
  padding: 20px;
  z-index: 0;
}

.anxiety-image {
  position: relative;
  z-index: 1;
  max-width: 100%;
}

.custom-para {
  background-color: rgb(254 202 202);
  color: #000;
}

.para {
  width: 60%;
  color: #000;
  text-align: center;
  font-size: large;
}
</style>
