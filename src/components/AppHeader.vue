<template>
  <header class="sticky z-[1500] top-0 border-solid border-b border-gray-200 bg-white">
    <div class="flex justify-between items-center px-2 py-4 md:px-[45px] md:py-6">
      <div class="w-8 md:hidden"></div>
      <div class="md:min-w-32">
        <div class="md:w-fit">
          <router-link to="/">
            <img src="../assets/images/music.svg" alt="music" width="32" height="auto" />
          </router-link>
        </div>
      </div>
      <nav class="hidden md:block">
        <RouterLink
          v-for="l in links"
          :to="l.url"
          :key="l.name"
          class="mx-2 hover:border-solid pb-1 hover:border-b-2 hover:border-custom-green"
          >{{ $t(l.name) }}</RouterLink
        >
      </nav>
      <div class="hidden md:block md:min-w-32 md:text-end">
        <LanguageGroup />
      </div>
      <button class="md:hidden">
        <IconMenu v-if="!navActive" width="32" height="32" @click="navActive = !navActive" />
        <IconClose v-else width="32" height="32" @click="navActive = !navActive" />
      </button>
    </div>
    <div
      class="z-[1500] bg-white border-solid border-t border-gray-200 shadow-lg w-[300px] fixed top-16 bottom-0 duration-300 md:hidden"
      :class="navActive ? 'right-0' : 'right-[-300px]'"
    >
      <div class="px-6 py-4 h-full flex flex-col justify-between">
        <ul>
          <li v-for="l in links" :key="l.name" class="py-2">
            <RouterLink :to="l.url" class="py-3 text-lg hover:text-custom-green">{{
              $t(l.name)
            }}</RouterLink>
          </li>
        </ul>
        <div class="text-center">
          <LanguageGroup />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<script setup lang="ts">
import LanguageGroup from '@/components/LanguageGroup.vue'

import IconMenu from '@/assets/icons/menu.svg?component'
import IconClose from '@/assets/icons/close.svg?component'

import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

let navActive = ref(false)

let links = reactive([
  { name: 'Recent Concerts', url: '/events' },
  { name: 'Categories', url: '/genres' },
  { name: 'New Releases', url: '/new-releases' }
])
</script>
