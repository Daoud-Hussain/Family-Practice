<template>
    <div class="bg-green-50 flex flex-col items-center text-center py-16 px-32 md:px-24">
      <!-- Heading Section -->
      <h2 class="text-2xl md:text-3xl px-0 md:px-24 font-semibold text-gray-900 mb-4">
        You must know your blood pressure for us to prescribe.
        Please go to your local Walmart, Sams Club, or Rite Aid to check your
        blood pressure for free.
      </h2>
  
      <!-- Icon Section -->
      <div class="w-20 h-20 md:w-32 md:h-32 mb-6">
        <img 
          src="~/assets/blood-pressure.svg" 
          alt="Blood Pressure Icon" 
          class="w-full h-full object-contain"
        />
      </div>
  
      <!-- Text Section -->
      <p class="text-lg text-gray-700 mb-4">
        Many of your local pharmacies including Walmart, Sams Club, Safeway, and Rite Aid have machines
        that can measure your blood pressure for free.
      </p>
      <p class="text-gray-700 text-base">
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
  };
  </script>
  
  <style scoped>
  /* Scoped styles for additional customization */
  </style>
  