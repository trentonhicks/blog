<script setup lang="ts">
import { gsap } from 'gsap';
import Post from '~/types/Post';

const route = useRoute();

let parentRouteSegments = route.path.split('/');
parentRouteSegments.pop();
const parentRoute = parentRouteSegments.join('/');

const { data: childPosts } = await useAsyncData(async () => await queryContent<Post>(parentRoute)
  .where({ $not: { _path: parentRoute }, type: 'child' })
  .sort({ datetime: 1 })
  .find());

const hidden = ref(true);
const rootElement = ref<Element | null>(null);

onMounted(() => {
  hidden.value = false;
  localStorage.setItem(`status:${route.path}`, 'completed');
});

onBeforeRouteLeave((to, from, next) => {
    gsap.to(rootElement.value!, { opacity: 0, duration: 0.5, ease: 'power3.out', onComplete: () => next() });
});

function animatePostIn(element: Element, done: any) {
  const postHeader = element.querySelector('.post-header')!;
  const postHeaderText = postHeader.querySelector('.post-header-text');

  gsap.timeline({ onComplete: done })
      .addLabel('animationStart')
      .fromTo(element,
        { opacity: 0, scale: 0.97, yPercent: 2 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 1, ease: 'power3.out' }, 'animationStart')
      .fromTo(postHeaderText,
        { opacity: 0, yPercent: 30 },
        { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out' }, 'animationStart+=0.5');
}

</script>

<template>
    <Transition appear @enter="animatePostIn">
      <main ref="rootElement" v-show="!hidden">
        <ContentDoc />
        <div v-if="childPosts">
            <ClientOnly>
              <SeriesNavigation
                :current-path="route.path"
                :steps="childPosts.map((post, index) => ({
                  name: post.title,
                  path: post._path.replace('_', '')
                }))"
              />
            </ClientOnly>
        </div>
      </main>
    </Transition>
</template>
