<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
      Our anti-anxiety medications
    </h1>

    <p class="text-gray-700 text-lg mb-8">
      We also offer Celexa (citalopram), Cymbalta (Duloxetine), Effexor (venlafaxine), 
      and Paxil (paroxetine). We don't prescribe benzodiazepines like Xanax, Ativan, 
      Valium, and Klonopin.
    </p>

    <!-- Medications Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    name: 'Lexapro',
    genericName: 'Escitalopram',
    type: 'Selective Serotonin Reuptake Inhibitor',
    typeAbbreviation: 'SSRI',
    slug: 'lexapro'
  },
  {
    name: 'Zoloft',
    genericName: 'Sertraline',
    type: 'Selective Serotonin Reuptake Inhibitor',
    typeAbbreviation: 'SSRI',
    slug: 'zoloft'
  },
  {
    name: 'Wellbutrin',
    genericName: 'Bupropion',
    type: 'Norepinephrine-Dopamine Reuptake Inhibitors',
    typeAbbreviation: 'NDRI',
    slug: 'wellbutrin'
  },
  {
    name: 'Prozac',
    genericName: 'Fluoxetine',
    type: 'Selective Serotonin Reuptake Inhibitor',
    typeAbbreviation: 'SSRI',
    slug: 'prozac'
  }
];

const router = useRouter();

const navigateToMedication = (slug: string) => {
  router.push(`/medications/${slug}`);
};
</script>