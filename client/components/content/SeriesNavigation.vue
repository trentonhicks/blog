<template>
    <nav class="flex items-center justify-center mt-10" aria-label="Progress">
      <p class="text-sm font-medium my-0">
        <span>{{ steps[statuses.findIndex(status => status === 'current')].name }}</span>
      </p>
      <ol role="list" class="ml-8 flex items-center space-x-5">
        <li v-for="(step, index) in steps" :key="step.name">
          <nuxt-link
            v-if="statuses[index] == 'completed'"
            :to="step.path"
            class="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900"
          >
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
          <nuxt-link
            v-else-if="statuses[index] == 'current'"
            :to="step.path"
            class="relative flex items-center justify-center" aria-current="step"
          >
            <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
              <span class="h-full w-full rounded-full bg-indigo-200" />
            </span>
            <span class="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
          <nuxt-link
            v-else
            :to="step.path"
            class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400"
          >
            <span class="sr-only">{{ step.name }}</span>
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </template>
  
<script setup lang="ts">
type Step = { name: string, path: string };
type Status = 'current' | 'upcoming' | 'completed';

const { steps, currentPath } = defineProps<{ steps: Step[], currentPath: string }>();

const statuses = computed(() => {
  const statusArray: Status[] = [];

  for (let index = 0; index < steps.length; index++) {
    const status = localStorage.getItem(`status:${steps[index].path}`) as Status | null;

    if (currentPath === steps[index].path)
      statusArray.push('current');

    else if (status === null)
      statusArray.push('upcoming');

    else if (status === 'completed')
      statusArray.push('completed');
  }

  return statusArray;
})
</script>