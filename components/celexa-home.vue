<template>
  <section
    ref="container"
    class="hero-section flex flex-col lg:flex-col justify-around items-center pb-4"
  > 
    <div class="main-container flex flex-col lg:flex-row justify-around items-center py-16 lg:pt-16">
    
    
    
    <div
      class="left-content flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full lg:w-1/2 px-6"
    >
      
      <h1
        class="text-3xl lg:text-4xl font-semibold leading-tight text-heroo-color mb-4"
      >
        Celexa for anxiety and depression
      </h1>
      <p class="text-heroo-color mb-6 text-1.5xl.5">
        Meet with a member of our medical team online to get Celexa delivered in 2-3 days. Get meds, monthly visits and unlimited messaging for just $95/month.
      </p>
      <p class="custom-para px-3 py-2 mb-8">$95 $25 for your first month 😊</p>
      <button
        class="bg-green-950 text-white py-2 px-12 font-semibold rounded-full shadow-lg hover:from-[#47b04b] hover:to-[#126b62] transition-all"
      >
        Get Started
      </button>
    </div>

    <div
      class="right-content w-5/6 md:w-3/5 lg:w-2/5 mt-10 lg:mt-0 lg:px-6 relative"
    >
      <img src="~/assets/lexapro.png" alt="Anxiety Image" class="w-auto" />
    </div>

  </div>
  
  <p class="para pb-4">
  If you're having a psychiatric emergency, call 911 or go to the nearest emergency room. 
  You can also call the National Suicide Prevention Hotline 1-800-273-8255 or text “home” to 741-741.</p>
  
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

.custom-para{
  background-color: rgb(254 202 202);
  color: #000;
}

.para{
  width: 60%;
  color: #000;
  text-align: center;
  font-size: large;

}
</style>
