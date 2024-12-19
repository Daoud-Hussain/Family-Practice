<template>
  <div class="bg-gray-50 py-20">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto font-sans">
      <!-- Image Section -->
      <div class="relative w-full md:w-1/2 flex justify-center items-center">
        <div class="relative">
          <img
            src="~/assets/pills.png"
            alt="pill pack"
            class="w-64 h-auto"
          />
          <div
            class="absolute top-0 left-8 bg-red-500 text-white rounded-full w-32 h-32 flex items-center justify-center -mt-8 -ml-8"
          >
            <span class="text-2xl font-bold">&hearts;</span>
          </div>
        </div>
      </div>

      <!-- Text Section -->
      <div class="max-w-md space-y-4 px-4 md:px-0 w-full md:w-1/2">
        <ul class="space-y-6">
          <li class="flex items-start">
            <span class="text-yellow-500 mr-3">&rarr;</span>
            <div>
              <p class="text-lg font-semibold text-gray-900">Fast and convenient prescribed to the pharmacy of your choice.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-500 mr-3">&rarr;</span>
            <div>
              <p class="text-lg font-semibold text-gray-900">We prescribe a wide range of birth control pills. All of which are very affordable.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-500 mr-3">&rarr;</span>
            <div>
              <p class="text-lg font-semibold text-gray-900">$65 consulation each year</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FastShippingComponent",
};
</script>

<style scoped>
/* Scoped styles for customization */
</style>
