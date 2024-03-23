<script setup lang="ts">
import Post from '~/types/Post';

defineProps<{ posts: Post[] | null }>();
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discipleship Notes</h2>
        <div class="space-y-10 pt-10">
          <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <NuxtLink :to="post._path">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>