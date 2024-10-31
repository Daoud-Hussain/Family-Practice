<template>
  <section class="bg-white py-36">
    <div
      class="container mx-auto px-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8"
    >
      <!-- Image Section -->
      <div class="flex-1 max-w-sm md:max-w-md lg:max-w-xl">
        <img
          src="~/assets/whattoexpect.jpg"
          alt="How it Works Image"
          class="rounded-lg shadow-md w-full md:w-3/4 object-cover"
        />
      </div>

      <!-- Content Section -->
      <div class="flex-1">
        <h2
          class="text-4xl text-center lg:text-start font-semibold mb-4 text-gray-900 pb-6"
        >
          What to expect with Integrity Family Practice
        </h2>

        <ul class="space-y-6">
          <li class="flex items-start space-x-4">
            <div>
              <h3 class="font-semibold text-gray-900">Transparent pricing</h3>
              <p class="text-gray-600">
                Expect no hidden fees, no long-term commitment, and no
                additional fees for dosage changes while on the same medication.
              </p>
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <div>
              <h3 class="font-semibold text-gray-900">Convenient support</h3>
              <p class="text-gray-600">
                Get professional and thoughtful care from licensed medical
                providers, all from the comfort of your home.
              </p>
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <div>
              <h3 class="font-semibold text-gray-900">
                Straightforward healthcare
              </h3>
              <p class="text-gray-600">
                Leave the complications of insurance behind with our exclusive
                cash-pay model.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Custom styling for responsiveness */
@media (min-width: 768px) {
  section div img {
    height: 100%;
    object-fit: cover;
  }
}

ul li {
  line-height: 1.6;
}

ul li h3 {
  font-size: 1.125rem;
}

ul li p {
  font-size: 0.975rem;
}
</style>
