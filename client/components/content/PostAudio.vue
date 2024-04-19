<script setup lang="ts">
import { PlayIcon, PauseIcon } from '@heroicons/vue/20/solid';

const props = defineProps<{ audioUrl: string }>();

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
        <button
            type="button"
            @click="togglePlay"
            class="mt-6 inline-flex items-center justify-center gap-x-3 rounded text-indigo-600 bg-gray-50 border transition-colors border-indigo-200 px-3 py-1 font-medium hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            v-if="audioUrl"
        >
            <PlayIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" v-if="!playingAudio" />
            <PauseIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" v-else />
            <div>Listen to post</div>
        </button>
</template>