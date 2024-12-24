<template>
    <InsomniaHome />
    <FastShippingComponent />
    <BirthControlSteps />
    <CustomerControl />
    <InsuranceInfo />
    <BloodPressureInfo />
    <Footer />
   </template>
   
   <script setup lang="ts">
   import InsomniaHome from '~/components/insomnia-home.vue';
   import BirthControlHome from '~/components/birth-control-home.vue';
   import BirthControlSteps from '~/components/birth-control-steps.vue';
   import CustomerControl from '~/components/customer-control.vue';
   import InsuranceInfo from '~/components/insurance-info.vue';
   import BloodPressureInfo from '~/components/blood-pressure-info.vue';
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