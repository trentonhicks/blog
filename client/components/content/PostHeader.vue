<script setup lang="ts">
import { PlayIcon, PauseIcon, ArrowUturnLeftIcon } from '@heroicons/vue/20/solid';

const props = defineProps<{ title: string, overline?: string, description?: string, featuredImage: string, audioUrl?: string }>();

const audio = ref<HTMLAudioElement>();
const playingAudio = ref(false);

onMounted(() => {
    if (props.audioUrl) {
        audio.value = new Audio(props.audioUrl);
        audio.value.onended = () => {
            playingAudio.value = false;
        };
    }
});

function togglePlay() {
    if (playingAudio.value) {
        audio.value?.pause();
    }
    else {
        audio.value?.play();
    }

    playingAudio.value = !playingAudio.value;
}
</script>

<template>
    <div class="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-30 rounded-lg mb-10 shadow-lg post-header">
        <img :src="featuredImage" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-overlay" />
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 post-header-text">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <p class="text-base font-semibold leading-7 text-indigo-400 mb-0" v-if="overline">{{ overline }}</p>
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ title }}</h1>
                <p class="mt-6 text-lg leading-8 text-gray-300" v-if="description">{{ description }}</p>
                <div class="mt-7 flex items-start gap-x-2">
                    <nuxt-link
                        to="/"
                        class="inline-flex gap-x-2 rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                    >
                        <ArrowUturnLeftIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
                        <div>Back</div>
                    </nuxt-link>
                    <button
                        type="button"
                        @click="togglePlay"
                        class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        v-if="audioUrl"
                    >
                        <PlayIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" v-if="!playingAudio" />
                        <PauseIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" v-else />
                        <div>Listen to this post</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>