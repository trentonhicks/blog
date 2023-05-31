<template>
    <nav class="flex items-center justify-center mt-10" aria-label="Progress">
      <p class="text-sm font-medium my-0">Part {{ steps.findIndex((step) => step.status === 'current') + 1 }}</p>
      <ol role="list" class="ml-8 flex items-center space-x-5">
        <li v-for="step in steps" :key="step.name">
          <nuxt-link v-if="step.status === 'complete'" :to="step.path" class="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
          <nuxt-link v-else-if="step.status === 'current'" :to="step.path" class="relative flex items-center justify-center" aria-current="step">
            <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
              <span class="h-full w-full rounded-full bg-indigo-200" />
            </span>
            <span class="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
          <nuxt-link v-else :to="step.path" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </template>
  
<script setup lang="ts">
type Step = {
    name: string,
    path: string,
    status: 'complete' | 'current' | 'upcoming',
}

defineProps<{ steps: Step[] }>();
</script>