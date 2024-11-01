<template>
 <Celexa />
 <TreatmentSteps 
    title="Let’s get you feeling better fast"
    :steps="steps"
  />
 <WhatToExpect />
</template>

<script setup lang="ts">
import Celexa from '~/components/celexa-home.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import WhatToExpect from '~/components/what-to-expect.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery2.png'



const steps = [
  { iconUrl: feelingsIcon, title: 'Help us understand your unique situation', description: 'We care about how you feel and want to get you the anxiety and depression help you need.' },
  { iconUrl: DoctorIcon, title: 'Connect with our caring doctors and nurse practitioners to discuss treatment options', description: 'Our medical team works with you to design a treatment plan that’s right for you.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds delivered directly to you in 2-3 days', description: 'Integrity Family practice’s online pharmacy ships Celexa or another antidepressant right to your door.' }
]

</script>