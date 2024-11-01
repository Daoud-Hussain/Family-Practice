<template>
 <Cymbalta 
    title="Cymbalta for anxiety and depression"
    para="We’re here to help. Connect with our doctors or nurse practitioners today and the Lemonaid online pharmacy will deliver Zoloft to your door in 2-3 days."
    :imgurl="CymbaltaIcon"
/>
 <TreatmentSteps 
    title="Let’s get you feeling better fast"
    :steps="steps"
  />
  <FaqSection 
      title="About Cymbalta" 
      :faqs="faqs"
    />
    <Footer />
</template>

<script setup lang="ts">
import Cymbalta from '~/components/medications-home.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import Footer from '~/components/footer.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery2.png'
import CymbaltaIcon from '../assets/cymbalta-.png'; 


import FaqSection from '~/components/faq-section.vue'

const faqs = ref([
  {
    question: "What is Cymbalta and why is it used?",
    answer: `
      <strong class="font-semibold">Cymbalta</strong> (generic name: <strong class="font-semibold">duloxetine</strong>) is a prescription medication classified as a <strong class="font-semibold">serotonin-norepinephrine reuptake inhibitor</strong> (SNRI). It is primarily used to treat:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Major depressive disorder</strong></li>
        <li><strong class="font-semibold">Generalized anxiety disorder (GAD)</strong></li>
        <li><strong class="font-semibold">Diabetic peripheral neuropathic pain</strong></li>
        <li><strong class="font-semibold">Fibromyalgia</strong></li>
        <li><strong class="font-semibold">Chronic musculoskeletal pain</strong></li>
      </ul>
    `,
  },
  {
    question: "How does Cymbalta work?",
    answer: `
      Cymbalta works by increasing the levels of two neurotransmitters in the brain, <strong class="font-semibold">serotonin</strong> and <strong class="font-semibold">norepinephrine</strong>. This helps regulate mood, alleviate anxiety, and relieve pain associated with certain conditions.
    `,
  },
  {
    question: "How long does it take for Cymbalta to start working?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Initial Effects</strong>: Some individuals may begin to notice improvements in mood or anxiety symptoms within 1 to 2 weeks of starting treatment.</li>
        <li><strong class="font-semibold">Full Effects</strong>: The full therapeutic benefits of Cymbalta typically take 4 to 6 weeks to develop. For conditions like chronic pain, it may take longer to see significant improvements.</li>
      </ul>
    `,
  },
  {
    question: "What are the common side effects of Cymbalta?",
    answer: `
      Common side effects may include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Nausea</strong></li>
        <li><strong class="font-semibold">Dry mouth</strong></li>
        <li><strong class="font-semibold">Drowsiness or insomnia</strong></li>
        <li><strong class="font-semibold">Dizziness</strong></li>
        <li><strong class="font-semibold">Constipation</strong></li>
        <li><strong class="font-semibold">Increased sweating</strong></li>
        <li><strong class="font-semibold">Sexual dysfunction</strong> (e.g., decreased libido)</li>
      </ul>
    `,
  },
  {
    question: "Can Cymbalta cause weight gain?",
    answer: `
      <strong class="font-semibold">Potential for Weight Gain</strong>: While weight gain is not as commonly associated with Cymbalta compared to some other antidepressants, it can still occur in some individuals.
      <br>
      <strong class="font-semibold">Reasons for Weight Gain</strong>:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Changes in appetite</strong></li>
        <li><strong class="font-semibold">Improved mood leading to more regular eating patterns</strong></li>
        <li><strong class="font-semibold">Lifestyle changes due to reduced pain or anxiety</strong></li>
        <li><strong class="font-semibold">Individual differences in metabolism</strong></li>
      </ul>
    `,
  },
  {
    question: "How can I manage my weight while taking Cymbalta?",
    answer: `
      Strategies for weight management include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Healthy Eating</strong>: Focus on a balanced diet rich in <strong class="font-semibold">fruits</strong>, <strong class="font-semibold">vegetables</strong>, <strong class="font-semibold">lean proteins</strong>, and <strong class="font-semibold">whole grains</strong> to help manage weight.</li>
        <li><strong class="font-semibold">Regular Exercise</strong>: Incorporate physical activity into your routine to maintain a healthy weight and improve overall well-being.</li>
        <li><strong class="font-semibold">Hydration</strong>: Drink plenty of water to help control appetite and support metabolic processes.</li>
      </ul>
    `,
  },
  {
    question: "What should I keep in mind while taking Cymbalta?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Withdrawal Symptoms</strong>: Stopping Cymbalta suddenly can lead to withdrawal symptoms, so it’s essential to taper off the medication under the guidance of a healthcare provider.</li>
        <li><strong class="font-semibold">Interactions</strong>: Inform your doctor about all medications and supplements you are taking to avoid potential interactions.</li>
        <li><strong class="font-semibold">Suicidal Thoughts</strong>: As with other antidepressants, Cymbalta may increase the risk of suicidal thoughts, particularly in younger individuals during the initial treatment period.</li>
      </ul>
    `,
  },
  {
    question: "How should Cymbalta be taken?",
    answer: `
      <strong class="font-semibold">Dosage and Administration</strong>: Cymbalta is typically taken <strong class="font-semibold">once daily</strong>, with or without food. The usual starting dose for major depressive disorder or GAD is <strong class="font-semibold">30 mg to 60 mg per day</strong>, which may be adjusted based on individual response and tolerance.
    `,
  },
]);


const steps = [
  { iconUrl: feelingsIcon, title: 'Help us understand your unique situation', description: 'We care about how you feel and want to get you the anxiety and depression help you need.' },
  { iconUrl: DoctorIcon, title: 'Connect with our caring doctors and nurse practitioners to discuss treatment options', description: 'Our medical team works with you to design a treatment plan that’s right for you.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds delivered directly to you in 2-3 days', description: 'Integrity Family practice’s online pharmacy ships Cymbalta or another antidepressant right to your door.' }
]

</script>