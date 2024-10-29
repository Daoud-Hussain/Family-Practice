<template>
  <div class="bg-gray-50 py-20">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto font-sans">
      <!-- Main Content -->
      <div class="max-w-md space-y-4 px-4 md:px-0 max-w-md space-y-4 ">
        <div
          class="w-1/5 bg-yellow-400 text-black font-bold py-1 px-3 rounded text-sm"
        >
            GLP-1
        </div>

        <h2 class="text-4xl font-semibold text-black">
            Ozempic® weight loss prescriptions with
            ongoing care
        </h2>
        <ul class="space-y-1 text-gray-700 mb-3">
          <li>
            <span class="pr-2">•</span> A once weekly injectable GLP-1 that is indicated for the treatment of Type 2 Diabetes*
          </li>
          <li>
            <span class="pr-2">•</span> Slows down digestion to stay fuller, longer1*
          </li>
        </ul>
        <button
          class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white py-2 px-12 font-semibold rounded-full shadow-lg hover:from-[#47b04b] hover:to-[#126b62] transition-all"
        >
          Get started
        </button>
      </div>

      <!-- Image with Overlay -->
      <div class="flex flex-col items-center justify-between">
        <div class="relative">
          <img
            src="~/assets/ozempic.png"
            alt="ozempic bottle"
            class="w-auto mt-12 pl-10"
          />
          <div
            class="absolute top-0 right-10 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full text-center shadow-lg w-24 h-24 flex flex-col items-center justify-center -mr-8 -mt-8"
          >
            <span class="text-lg">$49/mo</span>
            <p class="text-xs">weight loss membership</p>
          </div>
        </div>

        <div class="mt-4 text-center md:text-left">
          <p class="text-gray-600 text-sm">Medication charged separately</p>
          <a href="#" class="text-green-600 text-sm underline"
            >Important safety information</a
          >
        </div>
      </div>

      <!-- Additional Information -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HowServicesWork",
};
</script>

<style scoped>
/* Scoped styles for additional customizations if needed */
</style>
