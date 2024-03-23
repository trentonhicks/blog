<script setup lang="ts">
import { BookOpenIcon } from '@heroicons/vue/20/solid';
</script>

<template>
  <figure class="mt-10 border-l border-indigo-600 pl-9 max-w-2xl">
    <blockquote class="font-semibold text-gray-900">
        <p>
          <ContentSlot :use="$slots.default" unwrap="p" />
        </p>
    </blockquote>
    <figcaption class="mt-6 flex gap-x-4">
        <div class="text-sm leading-6">
          <ContentSlot :use="$slots.reference" unwrap="p" />
        </div>
    </figcaption>
  </figure>
</template>