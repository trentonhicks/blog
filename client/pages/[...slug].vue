<script setup lang="ts">
import { gsap } from 'gsap';

const rootElement = ref<Element | null>(null);

function animatePostIn(element: Element) {
  const postHeader = element.querySelector('.post-header')!;
  const postHeaderText = postHeader.querySelector('.post-header-text');

  gsap
    .timeline()
    .addLabel('animationStart')
    .fromTo(element,
    {
      opacity: 0,
      scale: 0.97,
      yPercent: 2,
    },
    {
      opacity: 1,
      scale: 1,
      yPercent: 0,
      duration: 1,
      ease: 'power3.out',
    },
    'animationStart')
    .fromTo(postHeaderText,
    {
      opacity: 0,
      yPercent: 30,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, 'animationStart+=0.5');
}

onMounted(() => {
  animatePostIn(rootElement.value!);
});

onBeforeRouteLeave((to, from, next) => {
    gsap
    .to(rootElement.value!,
        {
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => next(),
        }
    );
});
</script>

<template>
    <main ref="rootElement">
      <ContentDoc />
    </main>
</template>
