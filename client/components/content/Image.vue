<script setup lang="ts">
defineProps<{
    source: string
}>();
</script>

<template>
    <figure class="mt-16">
          <img class="aspect-video rounded-xl bg-gray-50 object-cover" :src="source" />
    </figure>
</template>