<script setup lang="ts">
import Post from '~/types/Post';

const route = useRoute();

const { data: seriesPosts } = await useAsyncData(async () => await queryContent<Post>(route.path)
  .where({ type: 'child' })
  .sort({ datetime: 1 })
  .find());
</script>

<template>
    <main ref="rootElement">
      <ContentDoc />
    </main>
</template>
