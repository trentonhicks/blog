<template>
    <h2 :id="id" class="mt-16 text-2xl font-bold tracking-tight text-gray-900 max-w-2xl">
        <slot />
    </h2>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{ id?: string }>()
  </script>