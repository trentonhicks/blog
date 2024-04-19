<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid';

defineProps<{ questions: string[] }>();
</script>

<template>
    <div class="mt-10">
        <div class="text-2xl text-gray-900 font-semibold mb-6">Questions</div>
        <ul role="list" class="space-y-3 mb-0">
          <li class="flex flex-col gap-y-1 bg-gray-50 rounded border border-indigo-200 py-3 px-6" v-for="question in questions">
            <div>
              <span class="text-indigo-700 font-medium text-sm sm:text-base">{{ question }}</span>
            </div>
          </li>
        </ul>
    </div>
</template>