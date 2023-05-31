<template>
        <div class="space-y-12">
          <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <nuxt-link :href="post._path.replace('_', '')">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </nuxt-link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-3 flex items-center gap-x-4">
              <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900 mb-0">
                  <div>
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </div>
                </p>
                <p class="text-gray-600 mb-0">{{ post.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
</template>
  
<script lang="ts" setup>
import Post from '~/types/Post';
defineProps<{ posts: Post[] }>();
</script>