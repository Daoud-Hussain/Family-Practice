<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
      <!-- Left Section: Logo -->
      <div class="md:w-1/2 w-full bg-gradient-to-r from-[#47b04b] to-[#126b62] flex items-center justify-center p-4">
        <img src="~/assets/logo.png" alt="Logo" class="w-8/12 md:w-9/12 h-auto" />
      </div>

      <!-- Right Section: Login Form -->
      <div class="md:w-1/2 w-full p-6 md:p-8 bg-white">
        <h2 class="text-xl md:text-2xl font-bold mb-6 text-gray-800">Admin Login</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-semibold mb-2" for="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              class="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-semibold mb-2" for="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-white appearance-none border mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
           <!--
          <div class="mb-4 flex justify-end items-center">
            <a href="#" class="text-sm text-green-500 hover:underline">Forgot password?</a>
          </div>
          -->
          <button
            type="submit"
            class="w-full bg-[#47b04b] hover:bg-[#126b62] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
