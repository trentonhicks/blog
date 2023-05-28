<script lang="ts" setup>
    defineProps({
        reference: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <figure class="mt-5 mb-10 border-l border-indigo-600 pl-9">
      <blockquote class="font-semibold text-gray-900">
        <p>
          <slot />
        </p>
      </blockquote>
      <figcaption class="mt-6 flex gap-x-4">
        <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">{{ reference }}</strong></div>
      </figcaption>
    </figure>
</template>