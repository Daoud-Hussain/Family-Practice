<template>
    <section ref="container" class="hero-section flex flex-col lg:flex-row justify-around items-center py-16 lg:py-32 " >
        <div class="right-content w-5/6 md:w-3/5 lg:w-2/5 mt-10 lg:mt-0 lg:px-6 relative">
            <img
            src="~/assets/anxiety.png"
            alt="Anxiety Image"
            class="w-auto"
          />
            <!-- Add optional overlay or pause button if required -->
        </div>
        <div
            class="left-content flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full lg:w-1/2 px-6">
            <!-- <span
                class="bg-yellow-300 text-yellow-900 font-bold text-xs uppercase py-1 px-3 rounded-full mb-4">New</span> -->
            <h1 class="text-3xl lg:text-4xl font-bold leading-tight text-heroo-color mb-4">Online anxiety treatment
            </h1>
            <p class="text-heroo-color mb-6 text-1.5xl.5">Find anxiety relief with expert one-on-one medical care and anxiety medication delivered each month
            </p>
            <p>$95 $25 for your first month</p>
            <button
                class="btn bg-custom-teal text-white font-semibold py-3 px-6 btn-lg rounded-full shadow-md hover:bg-green-600">Take the first Step</button>
        </div>
        
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const container = ref(null)

onMounted(() => {

  gsap.from(".left-content", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power2.out"
  })

  gsap.from(".right-content", {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3
  })

  const btn = document.querySelector('.btn')
  btn?.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out"
    })
  })
  btn?.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out"
    })
  })
})
</script>

<style scoped>
.hero-section {
     background-color: #F5F5F5; 
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
