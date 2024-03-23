<script setup lang="ts">
defineProps<{
    spacing?: 'none' | 'tight' | 'normal' | 'loose'
}>();
</script>

<template>
    <p :class="[
        (spacing === undefined || spacing === 'normal') && 'mt-8',
        (spacing === 'none') && 'mt-0',
        (spacing === 'tight') && 'mt-6',
        (spacing === 'loose') && 'mt-10',
        'max-w-2xl'
    ]">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </p>
</template>