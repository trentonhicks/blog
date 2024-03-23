<template>
  <div>
    <main>
        <div class="bg-white px-6 py-14 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <slot />
          </div>
      </div>
      </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Posts', href: '/', icon: HomeIcon, current: false },
]

const sidebarOpen = ref(false)
</script>