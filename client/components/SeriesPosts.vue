<template>
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden">
      <li v-for="(post, postIndex) in posts" :key="post.title" :class="[postIndex !== posts.length - 1 ? 'pb-10' : '', 'relative']">
        <template v-if="statuses[postIndex] === 'completed'">
          <div v-if="postIndex !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
          <nuxt-link :to="getPath(post)" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium">{{ post.title }}</span>
              <span class="text-sm text-gray-500">{{ post.description }}</span>
            </span>
          </nuxt-link>
        </template>
        <template v-else-if="statuses[postIndex] === 'current'" condition="step.status === 'current'">
          <div v-if="postIndex !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <nuxt-link :to="getPath(post)" class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-indigo-600">{{ post.title }}</span>
              <span class="text-sm text-gray-500">{{ post.description }}</span>
            </span>
          </nuxt-link>
        </template>
        <template v-else>
          <div v-if="postIndex !== posts.length - 1" class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <nuxt-link :to="getPath(post)" class="group relative flex items-start">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">{{ post.title }}</span>
              <span class="text-sm text-gray-500">{{ post.description }}</span>
            </span>
          </nuxt-link>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
import Post from '~/types/Post';

const { posts } = defineProps<{ posts: Post[] }>();
const statuses: string[] = reactive([]);

onMounted(() => {
  statuses.push(...getStatuses(posts));
});

function getPath(post: Post) {
  return post._path;
}

function getStatuses(posts: Post[]) {
  const statusArray = [];

  for (let index = 0; index < posts.length; index++) {
    const path = getPath(posts[index]);
    const status = localStorage.getItem(`status:${path}`);

    if (status === 'completed')
      statusArray.push('completed');

    if (status === null)
      statusArray.push('upcoming');
  }

  const currentIndex = statusArray.findIndex(status => status === 'upcoming');

  if (currentIndex !== -1)
    statusArray[currentIndex] = 'current';

  return statusArray;
}
</script>