<script lang="ts" setup>
    defineProps({
        title: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <div class="info custom-block">
        <div class="custom-block-title">{{ title }}</div>
        <p>
            <slot />
        </p>
    </div>
</template>