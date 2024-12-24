<template>
  <div ref="contactRestrictions" class="bg-blue-50 py-20 px-4 md:px-8 opacity-0 transform transition-all duration-1000">
    <div class="max-w-5xl mx-auto text-center font-sans">
      <h2 class="text-3xl font-semibold mb-16 text-gray-900">
        Not Appropriate for Telemedicine
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Age Restrictions -->
        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Age Restrictions</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Individuals under 18</li>
            <li>Adults aged 64 or older</li>
          </ul>
        </div>
        <!-- Pregnancy and Nursing -->
        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Pregnancy and Nursing</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Expectant mothers</li>
            <li>Breastfeeding individuals</li>
          </ul>
        </div>
        <!-- Prescriptions and Refills -->

        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Prescriptions and Refills</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Refills of ADHD medications: Adderall, Ritalin, Vyvanse, and Concerta</li>
            <li>
              Refills or prescriptions for sleep aids: zolpidem (Ambien), lorazepam
              (Ativan), zaleplon (Sonata), and eszopiclone (Lunesta)
            </li>
            <li>
              Refills or prescriptions for benzodiazepines: Xanax, Ativan, Valium, and
              Klonopin
            </li>
            <li>
              Refills of Modafinil or Armodafinil for narcolepsy or shift work
            </li>
            <li>
              Refills of suvorexant (Belsomra), ramelteon (Rozerem), and doxepin
              (Silenor)
            </li>
          </ul>
        </div>

        <!-- Medical Conditions -->
        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Medical Conditions</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Individuals with kidney disease or a history of kidney transplant</li>
            <li>Those with a history of seizures</li>
            <li>Liver disease patients</li>
            <li>Individuals with glaucoma or a family history of glaucoma</li>
            <li>Those with a personal or family history of QT prolongation or arrhythmia</li>
            <li>Individuals with a history of serotonin syndrome</li>
            <li>Those diagnosed with HIV</li>
          </ul>
        </div>
        <!-- Mental Health Conditions -->

        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Mental Health Conditions</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Those with bipolar disorder</li>
            <li>Suicidal individuals or those with a history of suicide attempts</li>
            <li>Individuals with schizophrenia</li>
            <li>Those experiencing psychosis</li>
          </ul>
        </div>
        <!-- Current Medications -->
        <div class="text-left">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Current Medications</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>Those taking MAOIs or who have taken MAOIs within the past two weeks</li>
            <li>Individuals taking tricyclic antidepressants</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactRestrictionsComponent",
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;

            // Trigger fade-in animation
            section.classList.remove("opacity-0", "translate-y-4");
            section.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.$refs.contactRestrictions);
  },
};
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
  transform: translateY(16px);
  /* Slight slide from below */
}

.opacity-100 {
  opacity: 1;
  transform: translateY(0);
  /* Reset position */
}
</style>
