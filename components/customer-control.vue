<template>
    <div class="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6 md:px-12">
      <!-- Illustration -->
      <div class="w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0 md:mr-24">
        <img 
          src="~/assets/support.png" 
          alt="Customer Support Illustration" 
          class="w-full h-full object-contain"
        />
      </div>
  
      <!-- Text Section -->
      <div class="text-center md:text-left md:ml-8">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">If you have any questions please Call-Email-Text we are here to help you.</h3>
        <p class="text-lg font-medium text-green-700 mb-4">888-536-2267</p>
        <p class="text-sm text-gray-600">Integrity Family Practice is a national telehealth company based in San Francisco, CA.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomerSupportComponent",
  };
  </script>
  
  <style scoped>
  /* Scoped styles for any additional customization */
  </style>
  