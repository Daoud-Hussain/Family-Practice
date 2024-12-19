<template>
 <FastShippingComponent />
 <BirthControlSteps />
 <HowitWorks />
 <WhatToExpect />
 <Footer />
</template>

<script setup lang="ts">
import FastShippingComponent from '~/components/fast-shipping.vue';
import BirthControlSteps from '~/components/birth-control-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import WhatToExpect from '~/components/what-to-expect.vue';
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