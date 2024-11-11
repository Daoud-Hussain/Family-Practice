<template class="bg-white">
 <AnxietyTreament />
 <AnxietyMedication />
 <TreatmentSteps 
    title="Treatment for anxiety in 3 easy steps"
    :steps="steps"
  />
 <WhatToExpect />
 <FAQS />
 <Footer />
</template>

<script setup lang="ts">
import AnxietyTreament from '~/components/anxiety-treatment.vue';
import AnxietyMedication from '~/components/anxiety-medication.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import FAQS from '~/components/faqs.vue';
import Footer from '~/components/footer.vue';
import WhatToExpect from '~/components/what-to-expect.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery.png'



const steps = [
  { iconUrl: feelingsIcon, title: 'Let us know how you\'ve been feeling', description: 'We want to understand your experience so we can provide the best treatment.' },
  { iconUrl: DoctorIcon, title: 'Talk with an experienced doctor or nurse practitioner', description: 'Learn about anxiety treatment options from our supportive medical team.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds for anxiety delivered to your door', description: 'The medicine arrives in 2-3 days after your visit is completed.' }
]

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