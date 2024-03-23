<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid';

defineProps<{ questions: string[] }>();
</script>

<template>
    <div class="mt-14">
        <div class="text-2xl text-indigo-600 font-semibold mb-8">Questions</div>
        <ul role="list" class="space-y-3 text-gray-600 mb-0">
          <li class="flex flex-col gap-y-1 bg-white rounded border border-indigo-600 py-3 px-6" v-for="question in questions">
            <div>
              <span class="text-gray-600 font-semibold text-sm sm:text-base">{{ question }}</span>
            </div>
          </li>
        </ul>
    </div>
</template>