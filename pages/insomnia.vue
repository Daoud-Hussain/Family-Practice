<template>
  <InsomniaHome />
  <InsomniaPrescription />
  <TreatmentSteps title="Treatment for Insomnia in 3 easy steps" :steps="steps" />
  <InsomniaSteps />
  <CustomerControl />
  <InsomniaRestrictions />
  <Footer />
</template>

<script setup lang="ts">
import InsomniaHome from '~/components/insomnia-home.vue';
import InsomniaPrescription from '~/components/insomnia-prescription.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import InsomniaSteps from '~/components/insomnia-steps.vue';
import CustomerControl from '~/components/customer-control.vue';
import InsomniaRestrictions from '~/components/insomnia-restrictions.vue';
import Footer from '~/components/footer.vue';
import feelingsIcon from '../assets/feelings.png'
import sleepStrategies from '../assets/sleep-strategies.png'
import DeliveryIcon from '../assets/delivery2.png'


const steps = [
  { iconUrl: feelingsIcon, title: 'Medical review', description: 'Meet with a U.S.‑licensed doctor or nurse practitioner for a video appointment.' },
  { iconUrl: sleepStrategies, title: 'Sleep strategies', description: 'Learn how to fall asleep with cognitive behavioral therapy for insomnia, sleep hygiene, and sleep therapy.' },
  { iconUrl: DeliveryIcon, title: 'Sleep medicines', description: 'When clinically appropriate, we prescribe and deliver non‑habit‑forming insomnia medication directly to your door.' }
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