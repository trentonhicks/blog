<script setup lang="ts">
import Post from '~/types/Post';

definePageMeta({
  layout: "home",
});

const { data } = await useAsyncData('posts', () =>
    queryContent('/posts')
    .only([
        '_path',
        'id',
        'title',
        'description',
        'date',
        'datetime',
        'author'
    ])
    .find());

const posts = data.value as unknown as Post[];
</script>

<template>
    <PostList :posts="posts" />
</template>
