<template>
  <div class="bg-gray-50 py-10 px-4">
    <!-- Title -->
    <h2 class="text-3xl font-semibold text-center mb-8 text-gray-900">
      When it comes to weight loss, <br /> you've got options
    </h2>

    <!-- Options Container -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Card 1: Compounded Semaglutide -->
  <div class="bg-white p-6 rounded-lg shadow-lg text-center ">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">Compounded semaglutide</h3>
    <span class="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-3 rounded-full inline-block mb-4">
      Supply available
    </span>

    <!-- Button and Image Side by Side -->
    <div class="flex items-center justify-center space-x-4 mb-4">
    <div class="flex items-center justify-center flex-col">
    <p class="text-gray-700 mb-6">
      A once-weekly injectable GLP-1 medication. Same active ingredient as Ozempic® and Wegovy®.
    </p>
      <button class="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-emerald-400 transition">
        Learn More
      </button>
    </div>
      <img src="~/assets/1_products-cs.png" alt="Compounded semaglutide" class="w-24 h-32 object-cover" />
    </div>
    <a href="#" class="text-emerald-600 text-sm block mt-4 underline">Important safety information</a>
  </div>

  <!-- Card 2: Ozempic -->
  <div class="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">Ozempic®</h3>
    <span class="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-3 rounded-full inline-block mb-4">
      Supply available
    </span>
    <!-- Button and Image Side by Side -->
    <div class="flex items-center justify-center space-x-4 mb-4">
      <div class="flex items-center justify-center flex-col">
    <p class="text-gray-700 mb-6">
      A once-weekly injectable GLP-1 that is indicated for the treatment of Type 2 Diabetes.*
    </p>
      <button class="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-emerald-400 transition">
        Learn More
      </button>
    </div>
      <img src="~/assets/2_products-o.png" alt="Ozempic" class="w-24 h-32 object-cover" />
    </div>
    <a href="#" class="text-emerald-600 text-sm block mt-4 underline">Important safety information</a>
  </div>

  <!-- Card 3: Wegovy -->
  <div class="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">Wegovy®</h3>
    <span class="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-3 rounded-full inline-block mb-4">
      Supply available
    </span>
    <!-- Button and Image Side by Side -->
    <div class="flex items-center justify-center space-x-4 mb-4">
      <div class="flex items-center justify-center flex-col">
    <p class="text-gray-700 mb-6">
      A once-weekly injectable GLP-1 indicated for the treatment of overweight and obesity.
    </p>
      <button class="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-emerald-400 transition">
        Learn More
      </button>
    </div>
      <img src="~/assets/3_products-w.png" alt="Wegovy" class="w-24 h-32 object-cover" />
    </div>
    <a href="#" class="text-emerald-600 text-sm block mt-4 underline">Important safety information</a>
  </div>
</div>


    <!-- Footer Text -->
    <p class="text-center text-gray-600 text-xs mt-10 mx-auto max-w-xl">
      A healthcare provider may prescribe a compounded drug if determined that it is medically appropriate. 
      Compounded semaglutide is not approved or evaluated for safety, efficacy, or quality by the FDA. 
      Wegovy® is FDA-approved for weight loss. Ozempic® is FDA-approved for type 2 diabetes treatment 
      but may be prescribed off-label for weight loss at a provider's discretion and professional judgment.
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
