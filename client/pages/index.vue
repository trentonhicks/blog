<script setup lang="ts">
import { gsap } from 'gsap';
import Post from '~/types/Post';

const { data: posts } = await useAsyncData(async () =>
    await queryContent<Post>('/posts')
        .where({ $not: { type: 'child' }})
        .sort({ datetime: -1 }).find());

const postsHidden = ref(true);
const rootElement = ref<Element | null>(null);

onMounted(() => {
    postsHidden.value = false;
});

function animatePostsIn(element: Element, done: any) {
    const postElements = element.querySelectorAll('article');

    gsap.fromTo(postElements,
        {
            opacity: 0,
            yPercent: 50,
        },
        {
            opacity: 1,
            yPercent: 0,
            xPercent: 0,
            duration: 0.7,
            stagger: {
                from: 'start',
                amount: 0.2,
            },
            ease: 'power3.out',
            onComplete: done
        }
    );
}

onBeforeRouteLeave((to, from, next) => {
    const postElements = rootElement.value?.querySelectorAll('article');
    
    gsap
    .to(postElements!,
        {
            opacity: 0,
            scale: 0.99,
            transformOrigin: 'right',
            duration: 0.5,
            stagger: {
                from: 'start',
                amount: 0.1,
            },
            ease: 'power3.out',
            onComplete: () => next(),
        }
    );
});
</script>

<template>
    <div ref="rootElement">
        <Transition
            @enter="animatePostsIn"
            appear
        >
            <PostList
                v-show="!postsHidden"
                :posts="posts!"
            />
        </Transition>
    </div>
</template>
