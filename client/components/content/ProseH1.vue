<template>
    <h1 :id="id" class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <slot />
    </h1>
</template>
  
  <script setup lang="ts">  
  const props = defineProps<{ id?: string }>();
  </script>