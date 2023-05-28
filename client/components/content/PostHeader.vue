<script setup lang="ts">
defineProps<{ title: string, overline?: string, description?: string }>();
</script>

<template>
    <div>
        <p class="text-base font-semibold leading-7 text-indigo-600" v-if="overline">{{ overline }}</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}</h1>
        <p class="mt-6 text-xl leading-8" v-if="description">{{ description }}</p>
    </div>
</template>  