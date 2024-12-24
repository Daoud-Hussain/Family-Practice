<template>
    <div
      ref="InsomniaSteps"
      class="bg-blue-50 py-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div class="max-w-5xl mx-auto text-center font-sans">
        <h2 class="text-3xl font-semibold mb-16 text-gray-900">
          How to obtain birth control online
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Step 1 -->
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-start transition-transform duration-1000 transform opacity-0 step"
          >
            <div class="text-4xl font-bold text-gray-900 mr-4">
              {{ index + 1 }}
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-900">{{ step.title }}</p>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BirthControlStepsComponent",
    data() {
      return {
        steps: [
          {
            title: "Answer the Questionnaire",
            description:
              "This is necessary to make sure you get the birth control that is right for you.",
          },
          {
            title:
              "Your Health Care Provider will get back to you within 1 day",
            description:
              "We always enjoy meeting you and learning more about your health.",
          },
          {
            title:
              "Your prescription is placed as soon as your visit is over",
            description:
              "Your prescription will be placed at a pharmacy of your choosing.",
          },
          {
            title: "Go to your chosen pharmacy and pick it up",
            description:
              "Birth Control pills are very affordable using platforms like GoodRx.",
          },
        ],
      };
    },
    mounted() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target;
              // Trigger animations
              section.classList.remove("opacity-0");
              section.querySelectorAll(".step").forEach((step, index) => {
                step.style.transitionDelay = `${index * 0.2}s`;
                step.classList.remove("opacity-0", "transform");
                step.classList.add("translate-y-0");
              });
              observer.unobserve(section);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(this.$refs.birthControlSteps);
    },
  };
  </script>
  
  <style scoped>
  /* Base styles */
  .step {
    transform: translateY(20px); /* Initial translation */
  }
  
  /* Transition classes */
  .opacity-0 {
    opacity: 0;
  }
  .translate-y-0 {
    transform: translateY(0);
  }
  </style>
  