<template>
<h3 :id="id" class="mt-10 text-lg font-bold tracking-tight text-gray-900 max-w-2xl">
    <slot />
</h3>
</template>
  
<script setup lang="ts">
const props = defineProps<{ id?: string }>()
</script>