<template>
    <InsomniaHome />
    <InsomniaPrescription />
    <InsomniaSteps />
    <CustomerControl />
    <InsomniaRestrictions />
    <Footer />
   </template>
   
   <script setup lang="ts">
   import InsomniaHome from '~/components/insomnia-home.vue';
   import InsomniaPrescription from '~/components/insomnia-prescription.vue';
   import InsomniaSteps from '~/components/insomnia-steps.vue';
   import CustomerControl from '~/components/customer-control.vue';
   import InsomniaRestrictions from '~/components/insomnia-restrictions.vue';
   import Footer from '~/components/footer.vue';
   
   </script>
   
   <style>
   /* Hide scrollbar for Chrome, Safari and Opera */
   *::-webkit-scrollbar {
     display: none;
   }
   
   /* Hide scrollbar for IE, Edge and Firefox */
   * {
     -ms-overflow-style: none;
     /* IE and Edge */
     scrollbar-width: none;
     /* Firefox */
   }
   </style>