<template>
    <section class="text-center py-12">
        <h1 class="text-4xl font-bold mb-8">What can we help you with today?</h1>
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center gap-4">
                <ServiceCard 
                    v-for="service in filteredServices" 
                    :key="service.id" 
                    :title="service.title"
                    :category="service.category" 
                    :status="service.status" 
                    :description="service.description"
                    @click="navigateToService(service)"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ServicesCategory } from '~/composables/usestate';

const router = useRouter();
const serviceCategory = useServiceCategory();

const services = [
    { 
      id: 1, 
      title: 'GLP-1s', 
      category: ServicesCategory.weightLoss, 
      status: 'New', 
      description: 'Effective weight loss solution.',
      route: '/weight-loss'
    },
    { id: 2, title: 'Erectile Dysfunction', category: 'Men’s Health', status: 'Popular', description: 'Solutions for erectile dysfunction.' },
    { id: 3, title: 'Anxiety', category: 'Mental Health', status: 'Popular', description: 'Help managing anxiety.' },
    { id: 4, title: 'Depression', category: 'Mental Health', status: 'Popular', description: 'Support for dealing with depression.' },
    { id: 5, title: 'Birth Control', category: 'Women’s Health', status: 'Popular', description: 'Options for birth control.' },
    { id: 6, title: 'Hair Loss', category: 'Men’s Health', status: 'Popular', description: 'Treatments for hair loss.' },
    { id: 7, title: 'Insomnia', category: 'Mental Health', status: 'Popular', description: 'Help with insomnia.' },
    { id: 8, title: 'Ella® Morning-After Pill', category: 'Women’s Health', status: 'Popular', description: 'Emergency contraception.' },
    { id: 9, title: 'Seasonal Affective Disorder', category: 'Mental Health', description: 'Managing seasonal affective disorder.' },
    { id: 10, title: 'Primary Care Complete', category: 'General Health', description: 'Comprehensive primary care services.' },
    { id: 11, title: 'Acne', category: 'Skin', description: 'Treatment for acne.' },
    { id: 12, title: 'Premature Ejaculation', category: 'Men’s Health', description: 'Solutions for premature ejaculation.' },
    { id: 13, title: 'Urinary Tract Infection', category: 'Women’s Health', status: 'Popular', description: 'UTI treatment options.' },
    { id: 14, title: 'Cold Sore', category: 'General Health', description: 'Cold sore remedies.' },
    { id: 15, title: 'Genital Herpes', category: 'General Health', status: 'Popular', description: 'Managing genital herpes.' },
    { id: 16, title: 'Asthma', category: 'General Health', description: 'Asthma treatment and care.' }


];

const filteredServices = computed(() => {
  if (serviceCategory.value === ServicesCategory.all) {
    return services;
  }
  return services.filter(service => service.category === serviceCategory.value);
});

const navigateToService = (service: any) => {
  if (service.route) {
    router.push(service.route);
  }
};
</script>