<template>
 <Wellbutrin 
    title="Wellbutrin for anxiety and depression"
    para="Get Wellbutrin antidepressant prescribed and delivered to your door with FREE fast shipping after an online consult. $95/month."
    :imgurl="WellbutrinIcon"
/>
 <TreatmentSteps 
    title="Let’s get you feeling better fast"
    :steps="steps"
  />
  <FaqSection 
      title="About Wellbutrin" 
      :faqs="faqs"
    />
    <Footer />
</template>

<script setup lang="ts">
import Wellbutrin from '~/components/medications-home.vue';
import TreatmentSteps from '~/components/treatment-steps.vue';
import HowitWorks from '~/components/how-services-work.vue';
import Footer from '~/components/footer.vue';
import feelingsIcon from '../assets/feelings.png'
import DoctorIcon from '../assets/doctor.png'
import DeliveryIcon from '../assets/delivery2.png'
import WellbutrinIcon from '../assets/wellbutrin.png'; 


import FaqSection from '~/components/faq-section.vue'

const faqs = ref([
  {
    question: "What is Wellbutrin and why is it used?",
    answer: `
      <strong class="font-semibold">Wellbutrin</strong> (generic name: <strong class="font-semibold">bupropion</strong>) is a prescription medication primarily used as an antidepressant. It is classified as a <strong class="font-semibold">norepinephrine-dopamine reuptake inhibitor</strong> (NDRI) and is commonly prescribed for:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Major depressive disorder (MDD)</strong></li>
        <li><strong class="font-semibold">Seasonal affective disorder (SAD)</strong></li>
        <li><strong class="font-semibold">Smoking cessation</strong> (marketed under the brand name <strong class="font-semibold">Zyban</strong>)</li>
      </ul>
    `,
  },
  {
    question: "How does Wellbutrin work?",
    answer: `
      Wellbutrin works by increasing the levels of <strong class="font-semibold">norepinephrine</strong> and <strong class="font-semibold">dopamine</strong> in the brain. Unlike many other antidepressants, it does not primarily affect <strong class="font-semibold">serotonin</strong> levels. This unique mechanism can help improve mood and alleviate symptoms of depression.
    `,
  },
  {
    question: "How long does it take for Wellbutrin to start working?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Initial Effects</strong>: Some individuals may begin to notice improvements in <strong class="font-semibold">mood</strong>, <strong class="font-semibold">energy</strong>, and <strong class="font-semibold">motivation</strong> within 1 to 2 weeks of starting treatment.</li>
        <li><strong class="font-semibold">Full Effects</strong>: The full therapeutic effects of Wellbutrin usually develop over <strong class="font-semibold">4 to 6 weeks</strong>. For some individuals, especially those with chronic conditions, it may take longer to experience significant improvements.</li>
      </ul>
    `,
  },
  {
    question: "What are the common side effects of Wellbutrin?",
    answer: `
      Common side effects may include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Insomnia</strong></li>
        <li><strong class="font-semibold">Dry mouth</strong></li>
        <li><strong class="font-semibold">Dizziness</strong></li>
        <li><strong class="font-semibold">Nausea</strong></li>
        <li><strong class="font-semibold">Increased sweating</strong></li>
        <li><strong class="font-semibold">Anxiety or agitation</strong></li>
        <li><strong class="font-semibold">Tremors</strong></li>
        <li><strong class="font-semibold">Sexual dysfunction</strong> (e.g., increased libido, but in some cases, difficulties with arousal)</li>
      </ul>
    `,
  },
  {
    question: "Does Wellbutrin cause weight gain?",
    answer: `
      <strong class="font-semibold">Weight Impact</strong>: One of the notable aspects of Wellbutrin is that it is less likely to cause weight gain compared to many other antidepressants. In fact, it may lead to <strong class="font-semibold">weight loss</strong> in some individuals.
      <br>
      <strong class="font-semibold">Reasons for Weight Changes</strong>:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Increased energy</strong> and motivation may lead to more physical activity.</li>
        <li><strong class="font-semibold">Changes in appetite</strong>, which can vary between individuals.</li>
      </ul>
    `,
  },
  {
    question: "How can I manage my weight while taking Wellbutrin?",
    answer: `
      Strategies for weight management include:
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Healthy Eating</strong>: Maintain a balanced diet with plenty of <strong class="font-semibold">fruits</strong>, <strong class="font-semibold">vegetables</strong>, <strong class="font-semibold">lean proteins</strong>, and <strong class="font-semibold">whole grains</strong>.</li>
        <li><strong class="font-semibold">Regular Exercise</strong>: Engage in regular physical activity to promote overall health and help manage weight.</li>
        <li><strong class="font-semibold">Monitor Changes</strong>: Keep track of any changes in appetite or weight to discuss with your healthcare provider if needed.</li>
      </ul>
    `,
  },
  {
    question: "What should I keep in mind while taking Wellbutrin?",
    answer: `
      <ul class="list-disc ml-6">
        <li><strong class="font-semibold">Risk of Seizures</strong>: Wellbutrin is associated with a higher risk of seizures, especially at higher doses or in individuals with a history of seizures or eating disorders.</li>
        <li><strong class="font-semibold">Withdrawal Symptoms</strong>: Discontinuing Wellbutrin suddenly can lead to withdrawal symptoms, so it's important to taper off under medical supervision.</li>
        <li><strong class="font-semibold">Interactions</strong>: Inform your healthcare provider about all <strong class="font-semibold">medications</strong> and <strong class="font-semibold">supplements</strong> you are taking to avoid potential interactions.</li>
        <li><strong class="font-semibold">Suicidal Thoughts</strong>: As with other antidepressants, Wellbutrin may increase the risk of <strong class="font-semibold">suicidal thoughts</strong>, particularly in younger individuals during the initial treatment phase.</li>
      </ul>
    `,
  },
  {
    question: "How should Wellbutrin be taken?",
    answer: `
      Wellbutrin is typically taken in divided doses, either <strong class="font-semibold">once or twice daily</strong>, depending on the formulation (immediate-release, sustained-release, or extended-release). The starting dose is usually <strong class="font-semibold">150 mg per day</strong>, which may be adjusted based on individual response and tolerance.
    `,
  },
]);


const steps = [
  { iconUrl: feelingsIcon, title: 'Help us understand your unique situation', description: 'We care about how you feel and want to get you the anxiety and depression help you need.' },
  { iconUrl: DoctorIcon, title: 'Connect with our caring doctors and nurse practitioners to discuss treatment options', description: 'Our medical team works with you to design a treatment plan that’s right for you.' },
  { iconUrl: DeliveryIcon, title: 'FDA-approved meds delivered directly to you in 2-3 days', description: 'Integrity Family practice’s online pharmacy ships Wellbutrin or another antidepressant right to your door.' }
]

</script>