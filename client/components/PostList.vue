<script setup lang="ts">
import Post from '~/types/Post';

defineProps<{ posts: Post[] }>();
</script>

<template>
  <div class="space-y-20 lg:space-y-20">
    <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
      <nuxt-link :href="post._path" class="post-image">
        <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <img :src="post.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
          <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </nuxt-link>
      <div class="post-content">
        <div class="flex items-center gap-x-4 text-xs">
          <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
        </div>
        <div class="group relative max-w-xl">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <nuxt-link :href="post._path">
              <span class="absolute inset-0" />
              {{ post.title }}
            </nuxt-link>
          </h3>
          <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.description }}</p>
        </div>
        <div class="mt-6 flex border-t border-gray-900/5 pt-6">
          <div class="relative flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 mb-0">
                <div>
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </div>
              </p>
              <p class="text-gray-600 mb-0 leading-tight">{{ post.author.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>