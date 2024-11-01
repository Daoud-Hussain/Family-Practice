<template>
 <Paxil 
    title="Paxil for anxiety and depression"
    para="Treat anxiety and depression with Prozac, delivered to your door after an online consultation. $95/month."
    :imgurl="PaxilIcon"
/>
 <TreatmentSteps 
    title="Let’s get you feeling better fast"
    :steps="steps"
  />
  <FaqSection 
      title="About Paxil" 
      :faqs="faqs"
    />
    <Footer />
</template>

<script setup lang="ts">
import Paxil from '~/components/medications-home.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import Footer from '~/components/footer.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery2.png'
import PaxilIcon from '../assets/paxil.png'; 


import FaqSection from '~/components/faq-section.vue'

const faqs = ref([
  {
    question: "What is Paxil used for?",
    answer: `
      <Strong class="font-semibold">Paxil</strong> (generic name: <Strong class="font-semibold">citalopram</strong>) is a prescription medication classified as a <Strong class="font-semibold">selective serotonin reuptake inhibitor</strong> (SSRI). It is mainly used to treat:
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Depression</strong> (major depressive disorder)</li>
        <li><Strong class="font-semibold">Anxiety disorders</strong> (in certain cases, though it’s not FDA-approved specifically for anxiety)</li>
      </ul>
    `,
  },
  {
    question: "How does Paxil work?",
    answer: `
      Paxil increases <Strong class="font-semibold">serotonin levels</strong> in the brain, a neurotransmitter that regulates mood and emotional well-being. By blocking the reabsorption of serotonin, Paxil helps <Strong class="font-semibold">improve mood</strong> and <Strong class="font-semibold">relieve symptoms of depression</strong>.
    `,
  },
  {
    question: "How long does it take for Paxil to start working?",
    answer: `
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Initial Effects</strong>: Some patients may see improvements in <Strong class="font-semibold">sleep</strong>, <Strong class="font-semibold">energy</strong>, or <Strong class="font-semibold">appetite</strong> within the first 1 to 2 weeks.</li>
        <li><Strong class="font-semibold">Full Effects</strong>: For mood and anxiety symptoms, full therapeutic benefits generally develop over <Strong class="font-semibold">4 to 6 weeks</strong>. For some, it may take longer to feel the complete effects, especially for chronic conditions.</li>
      </ul>
    `,
  },
  {
    question: "What are the common side effects of Paxil?",
    answer: `
      Common side effects may include:
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Nausea</strong></li>
        <li><Strong class="font-semibold">Dry mouth</strong></li>
        <li><Strong class="font-semibold">Drowsiness</strong> or <Strong class="font-semibold">insomnia</strong></li>
        <li><Strong class="font-semibold">Dizziness</strong></li>
        <li><Strong class="font-semibold">Increased sweating</strong></li>
        <li><Strong class="font-semibold">Sexual dysfunction</strong> (e.g., decreased libido or difficulty achieving orgasm)</li>
      </ul>
    `,
  },
  {
    question: "Can Paxil cause weight gain?",
    answer: `
      <Strong class="font-semibold">Potential for Weight Gain</strong>: Weight gain can occur in some individuals on Paxil, though not everyone experiences this side effect.
      <br>
      <Strong class="font-semibold">Reasons for Weight Gain</strong>:
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Increased appetite</strong></li>
        <li><Strong class="font-semibold">Changes in metabolism</strong></li>
        <li><Strong class="font-semibold">Improved mood</strong>, leading to more regular eating habits</li>
        <li><Strong class="font-semibold">Lifestyle changes</strong> resulting from improved mental health</li>
      </ul>
    `,
  },
  {
    question: "How can I manage my weight while taking Paxil?",
    answer: `
      Strategies for weight management include:
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Healthy Eating</strong>: Focus on a diet rich in <Strong class="font-semibold">fruits</strong>, <Strong class="font-semibold">vegetables</strong>, <Strong class="font-semibold">whole grains</strong>, and <Strong class="font-semibold">lean proteins</strong>.</li>
        <li><Strong class="font-semibold">Regular Exercise</strong>: Physical activity helps maintain a healthy weight and improves overall well-being.</li>
        <li><Strong class="font-semibold">Hydration</strong>: Staying hydrated can control appetite and support metabolic functions.</li>
      </ul>
    `,
  },
  {
    question: "What should I keep in mind while taking Paxil?",
    answer: `
      <ul class="list-disc ml-6">
        <li><Strong class="font-semibold">Withdrawal Symptoms</strong>: Stopping Paxil suddenly may lead to withdrawal symptoms; it’s essential to <Strong class="font-semibold">taper off</strong> under medical supervision.</li>
        <li><Strong class="font-semibold">Drug Interactions</strong>: Inform your healthcare provider about any <Strong class="font-semibold">medications</strong> or <Strong class="font-semibold">supplements</strong> to prevent potential interactions.</li>
        <li><Strong class="font-semibold">Risk of Suicidal Thoughts</strong>: Like other SSRIs, Paxil may increase the risk of <Strong class="font-semibold">suicidal thoughts</strong>, especially in younger individuals, during the early treatment phase.</li>
      </ul>
    `,
  },
  {
    question: "How should Paxil be taken?",
    answer: `
      <Strong class="font-semibold">Typical Dosage</strong>: Paxil is usually taken <Strong class="font-semibold">once daily</strong>, with or without food.
      <br>
      <Strong class="font-semibold">Starting Dose</strong>: The standard starting dose for adults is <Strong class="font-semibold">20 mg per day</strong>, and it may be adjusted based on the individual’s response and tolerance.
    `,
  },
]);

const steps = [
  { iconUrl: feelingsIcon, title: 'Help us understand your unique situation', description: 'We care about how you feel and want to get you the anxiety and depression help you need.' },
  { iconUrl: DoctorIcon, title: 'Connect with our caring doctors and nurse practitioners to discuss treatment options', description: 'Our medical team works with you to design a treatment plan that’s right for you.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds delivered directly to you in 2-3 days', description: 'Integrity Family practice’s online pharmacy ships Paxil or another antidepressant right to your door.' }
]

</script>