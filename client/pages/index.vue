<script setup lang="ts">
import Post from '~/types/Post';

const { data: posts } = await useAsyncData(async () =>
    await queryContent<Post>('/posts')
        .where({ $not: { type: 'child' }})
        .sort({ datetime: -1 }).find());
</script>

<template>
    <Posts :posts="posts" />
</template>
