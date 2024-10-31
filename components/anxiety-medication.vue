<template>
  <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl px-4 md:px-16 text-white md:text-4xl font-semibold text-forest-900 mb-6">
      Our anti-anxiety medications
    </h1>

    <p class="text-gray-300 px-4 md:px-16 text-lg mb-8">
      We also offer Celexa (citalopram), Cymbalta (Duloxetine), Effexor (venlafaxine), 
      and Paxil (paroxetine). We don't prescribe benzodiazepines like Xanax, Ativan, 
      Valium, and Klonopin.
    </p>

    <!-- Medications Grid -->
    <div class="mx-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <MedicationCard 
        v-for="medication in medications" 
        :key="medication.name"
        :medication="medication"
        @click="navigateToMedication(medication.slug)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Medication {
  name: string;
  genericName: string;
  type: string;
  typeAbbreviation: string;
  slug: string;
}

const medications: Medication[] = [
  {
    name: 'Celexa',
    genericName: 'Citalopram',
    type: 'Selective Serotonin Reuptake Inhibitor',
    typeAbbreviation: 'SSRI',
    slug: 'lexapro'
  },
  {
    name: 'Cymbalta ',
    genericName: 'Duloxetine',
    type: 'Selective Serotonin Reuptake Inhibitor',
    typeAbbreviation: 'SSRI',
    slug: 'zoloft'
  },
  {
    name: 'Wellbutrin',
    genericName: 'Bupropion',
    type: 'Serotonin Norepinephrine Reuptake Inhibitor',
    typeAbbreviation: 'SNRI',
    slug: 'wellbutrin'
  },
  {
    name: 'Effexor ',
    genericName: 'Venlafaxine',
    type: 'Serotonin Norepinephrine Reuptake Inhibitor',
    typeAbbreviation: 'SNRI',
    slug: 'prozac'
  },
  {
    name: 'Paxil ',
    genericName: 'Paroxetine',
    type: 'Serotonin Reuptake Inhibitors',
    typeAbbreviation: 'SSRI',
    slug: 'prozac'
  }
];

const router = useRouter();

const navigateToMedication = (slug: string) => {
  router.push(`/medications/${slug}`);
};
</script>