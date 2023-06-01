<template>
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden">
      <li v-for="(step, stepIdx) in posts" :key="step.title" :class="[stepIdx !== posts.length - 1 ? 'pb-10' : '', 'relative']">
        <template v-if="step.status === 'complete'">
          <div v-if="stepIdx !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
          <nuxt-link :href="step._path.replace('_', '')" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium">{{ step.title }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </nuxt-link>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div v-if="stepIdx !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <nuxt-link :href="step._path.replace('_', '')" class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-indigo-600">{{ step.title }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </nuxt-link>
        </template>
        <template v-else>
          <div v-if="stepIdx !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <nuxt-link :href="step._path.replace('_', '')" class="group relative flex items-start">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">{{ step.title }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </nuxt-link>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
import ChildPost from '~/types/ChildPost';

defineProps<{ posts: ChildPost[] }>();
</script>