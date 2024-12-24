<template>
    <div
      ref="prescriptionSection"
      class="flex bg-gray-950 flex-col md:flex-row items-center justify-between py-16 px-8 md:py-24 md:px-16 opacity-0 transition-opacity duration-1000"
    >
      <!-- Image Section -->
      <div
        class="relative w-full md:w-1/2 flex justify-center items-center transform opacity-0 transition-transform duration-1000 image-section"
      >
        <div class="relative">
          <img
            src="~/assets/yawning_woman.png"
            alt="More than just a prescription"
            class="w-64 h-auto rounded-lg shadow-lg"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-purple-300 rounded-full -z-10"
            style="clip-path: circle(70% at 50% 50%)"
          ></div>
        </div>
      </div>
  
      <!-- Text Section -->
      <div
        class="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left transform opacity-0 transition-transform duration-1000 text-section"
      >
        <h2 class="text-3xl font-semibold text-white mb-6">
          We care about your health, we provide
        </h2>
        <ul class="space-y-4 text-lg pl-1 text-gray-400 mb-6">
          <li>
            <span class="pr-1">&rarr;</span> Easy access via email if you have any
            questions
          </li>
          <li>
            <span class="pr-1">&rarr;</span> We help you with strategies and ideas
            to obtain better sleep
          </li>
          <li>
            <span class="pr-1">&rarr;</span> Prescription placed after your visit
          </li>
          <li>
            <span class="pr-1">&rarr;</span> If no insurance, no problem. The
            medications are very affordable using platforms such as
            <a
              class="text-green-700"
              href="https://www.goodrx.com/desyrel?optly_audience=%7Bnextbestaction%7D&kw=price&utm_campaign=140564372&utm_content=1521923620&utm_source=bing&utm_medium=cpc&utm_term=kwd-29266226660%3Aloc-71258&gclid=b2596ec296f31f64371109a53f1b44aa&gclsrc=3p.ds&msclkid=b2596ec296f31f64371109a53f1b44aa&label_override=trazodone&form=tablet&dosage=50mg&quantity=30&drugId=262"
            >
              GoodRx</a
            >
          </li>
        </ul>
        <div>
          <button
            class="bg-green-700 text-white py-3 px-12 rounded-full font-semibold shadow-md hover:bg-green-800 transition-all duration-300"
          >
            Get started
          </button>
        </div>
        <p class="mt-4 text-red-700 text-lg font-semibold">
          <span class="line-through text-gray-400">$60/month</span> $30 for the 1st
          month
        </p>
        <p class="text-gray-200">Cancel anytime</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MoreThanPrescriptionComponent",
    mounted() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target;
  
              // Fade in the entire section
              section.classList.add("opacity-100");
  
              // Animate image section
              const imageSection = section.querySelector(".image-section");
              imageSection.classList.add("opacity-100", "translate-y-0");
  
              // Animate text section
              const textSection = section.querySelector(".text-section");
              textSection.classList.add("opacity-100", "translate-y-0");
  
              observer.unobserve(section);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(this.$refs.prescriptionSection);
    },
  };
  </script>
  
  <style scoped>
  /* Initial hidden state for animations */
  .image-section,
  .text-section {
    transform: translateY(30px);
    opacity: 0;
  }
  
  /* Transition to visible state */
  .opacity-100 {
    opacity: 1;
  }
  
  .translate-y-0 {
    transform: translateY(0);
  }
  </style>
  