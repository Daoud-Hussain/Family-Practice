<template>
 <Effexor 
    title="Effexor for anxiety and depression"
    para="Meet with a member of our medical team online to get Effexor delivered in 2-3 days. Get meds, monthly visits and unlimited messaging for just $95/month."
    :imgurl="EffexorIcon"
/>
 <TreatmentSteps 
    title="Let’s get you feeling better fast"
    :steps="steps"
  />
  <FaqSection 
      title="About Effexor" 
      :faqs="faqs"
    />
    <Footer />
</template>

<script setup lang="ts">
import Effexor from '~/components/medications-home.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import Footer from '~/components/footer.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery2.png'
import EffexorIcon from '../assets/effexor.png'; // Add this line for lexapro.png


import FaqSection from '~/components/faq-section.vue'

const faqs = ref([
  {
    question: "What is Effexor and why is it used?",
    answer: `
      <strong class="font-semibold">Effexor</strong> (generic name: <strong class="font-semibold">venlafaxine</strong>) is a prescription medication classified as a <strong class="font-semibold">serotonin-norepinephrine reuptake inhibitor</strong> (SNRI). It is commonly used to treat:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Major depressive disorder</strong></li>
        <li><strong class="font-semibold">Generalized anxiety disorder (GAD)</strong></li>
        <li><strong class="font-semibold">Social anxiety disorder</strong></li>
        <li><strong class="font-semibold">Panic disorder</strong></li>
      </ul>
    `,
  },
  {
    question: "How does Effexor work?",
    answer: `
      Effexor works by increasing the levels of <strong class="font-semibold">serotonin</strong> and <strong class="font-semibold">norepinephrine</strong> in the brain, neurotransmitters that play key roles in mood regulation and anxiety control. By blocking the reuptake of these neurotransmitters, Effexor helps <strong class="font-semibold">improve mood</strong> and alleviate <strong class="font-semibold">anxiety symptoms</strong>.
    `,
  },
  {
    question: "How long does it take for Effexor to start working?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Initial Effects</strong>: Some individuals may begin to notice improvements in <strong class="font-semibold">mood</strong>, <strong class="font-semibold">anxiety</strong>, or <strong class="font-semibold">energy levels</strong> within 1 to 2 weeks of starting treatment.</li>
        <li><strong class="font-semibold">Full Effects</strong>: The full therapeutic benefits of Effexor typically develop over <strong class="font-semibold">4 to 6 weeks</strong>. Some patients, particularly those with anxiety disorders, may take longer to experience significant improvements.</li>
      </ul>
    `,
  },
  {
    question: "What are the common side effects of Effexor?",
    answer: `
      Common side effects may include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Nausea</strong></li>
        <li><strong class="font-semibold">Dizziness</strong></li>
        <li><strong class="font-semibold">Drowsiness</strong> or <strong class="font-semibold">insomnia</strong></li>
        <li><strong class="font-semibold">Dry mouth</strong></li>
        <li><strong class="font-semibold">Increased sweating</strong></li>
        <li><strong class="font-semibold">Constipation</strong></li>
        <li><strong class="font-semibold">Sexual dysfunction</strong> (e.g., decreased libido)</li>
      </ul>
    `,
  },
  {
    question: "Can Effexor cause weight gain?",
    answer: `
      <strong class="font-semibold">Potential for Weight Gain</strong>: Weight gain can occur in some individuals taking Effexor, though it is more commonly associated with long-term use rather than immediate side effects.
      <br>
      <strong class="font-semibold">Reasons for Weight Gain</strong>:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Changes in appetite</strong> or cravings</li>
        <li><strong class="font-semibold">Lifestyle factors</strong> due to improved mood leading to more regular eating patterns</li>
        <li><strong class="font-semibold">Individual variations</strong> in metabolism and weight management</li>
      </ul>
    `,
  },
  {
    question: "How can I manage my weight while taking Effexor?",
    answer: `
      Strategies for weight management include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Healthy Eating</strong>: Focus on a balanced diet that includes <strong class="font-semibold">fruits</strong>, <strong class="font-semibold">vegetables</strong>, <strong class="font-semibold">lean proteins</strong>, and <strong class="font-semibold">whole grains</strong> to help manage weight.</li>
        <li><strong class="font-semibold">Regular Exercise</strong>: Engage in physical activity to maintain a healthy weight and improve overall well-being.</li>
        <li><strong class="font-semibold">Hydration</strong>: Staying well-hydrated can help control appetite and support metabolic health.</li>
      </ul>
    `,
  },
  {
    question: "What should I keep in mind while taking Effexor?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Withdrawal Symptoms</strong>: Abruptly stopping Effexor can lead to withdrawal symptoms, so it’s essential to taper off the medication under a healthcare provider's supervision.</li>
        <li><strong class="font-semibold">Interactions</strong>: Inform your healthcare provider about all <strong class="font-semibold">medications</strong> and <strong class="font-semibold">supplements</strong> you are taking to avoid potential interactions.</li>
        <li><strong class="font-semibold">Suicidal Thoughts</strong>: As with other antidepressants, Effexor may increase the risk of <strong class="font-semibold">suicidal thoughts</strong>, particularly in younger individuals during the initial treatment phase.</li>
      </ul>
    `,
  },
  {
    question: "How should Effexor be taken?",
    answer: `
      Effexor is typically taken <strong class="font-semibold">once or twice daily</strong>, with food. The starting dose for major depressive disorder or GAD is usually <strong class="font-semibold">75 mg per day</strong>, which may be adjusted based on individual response and tolerance.
    `,
  },
]);


const steps = [
  { iconUrl: feelingsIcon, title: 'Help us understand your unique situation', description: 'We care about how you feel and want to get you the anxiety and depression help you need.' },
  { iconUrl: DoctorIcon, title: 'Connect with our caring doctors and nurse practitioners to discuss treatment options', description: 'Our medical team works with you to design a treatment plan that’s right for you.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds delivered directly to you in 2-3 days', description: 'Integrity Family practice’s online pharmacy ships Effexor or another antidepressant right to your door.' }
]

</script>