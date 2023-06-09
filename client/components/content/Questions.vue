<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid';

defineProps<{ questions: string[] }>();
</script>

<template>
    <div class="mt-9 px-7 py-10 border border-indigo-600 rounded-lg">
        <h2 class="mt-0">Questions</h2>
        <ul role="list" class="max-w-xl space-y-5 text-gray-600 mb-0">
          <li class="flex gap-x-3" v-for="question in questions">
            <QuestionMarkCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>{{ question }}</span>
          </li>
        </ul>
    </div>
</template>