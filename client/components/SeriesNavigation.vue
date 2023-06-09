<template>
    <nav aria-label="Progress" class="mt-7">
      <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        <li v-for="(step, index) in steps" :key="step.name" class="relative md:flex md:flex-1">
          <nuxt-link v-if="statuses[index] === 'completed'" :href="step.path" class="group flex w-full items-center">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
            </span>
          </nuxt-link>
          <nuxt-link v-else-if="statuses[index] === 'current'" :to="step.path" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
              <span class="text-indigo-600">{{ index + 1 }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
          </nuxt-link>
          <nuxt-link v-else :to="step.path" class="group flex items-center">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                <span class="text-gray-500 group-hover:text-gray-900">{{ index + 1 }}</span>
              </span>
              <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
            </span>
          </nuxt-link>
          <template v-if="index !== steps.length - 1">
            <!-- Arrow separator for lg screens and up -->
            <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
              <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </template>
        </li>
      </ol>
    </nav>
  </template>
  
<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid';
type Step = { name: string, path: string };
type Status = 'current' | 'upcoming' | 'completed';

const { steps, currentPath } = defineProps<{ steps: Step[], currentPath: string }>();
let statuses = reactive<Status[]>([]);

function getStatuses() {
  const statusArray: Status[] = [];

  for (let index = 0; index < steps.length; index++) {
    const status = localStorage.getItem(`status:${steps[index].path}`);

    if (status === 'completed')
      statusArray.push('completed');

    else if (currentPath === steps[index].path)
      statusArray.push('current');

    else if (status === null)
      statusArray.push('upcoming');
  }

  return statusArray;
}

onMounted(() => {
  statuses = getStatuses();
});
</script>