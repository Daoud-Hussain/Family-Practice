<template>
 <AnxietyTreament />
 <MedicineSection />
 <HowitWorks />
 <WhatToExpect />
</template>

<script setup lang="ts">
import AnxietyTreament from '~/components/anxiety-treatment.vue';
import MedicineSection from '~/components/medicine-section.vue';
import HowitWorks from '~/components/how-services-work.vue';
import WhatToExpect from '~/components/what-to-expect.vue';

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