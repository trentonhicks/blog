<script setup lang="ts">
import Post from '~/types/Post';

defineProps<{ posts: Post[] }>();
</script>

<template>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            </div>
            <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <nuxt-link :href="post._path">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                </nuxt-link>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
            </div>
        </article>
    </div>
</template>