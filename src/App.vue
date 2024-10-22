<template>
  <AppHeader />
  <div class="md:flex">
    <div class="md:grow" :class="{ 'h-screen overflow-y-scroll': embedStore.embedMusic }">
      <div class="mx-[15px] pb-[60px] md:mx-[45px] md:pb-[120px]">
        <RouterView />
      </div>
    </div>
    <div
      :class="{ hidden: !embedStore.embedMusic }"
      class="fixed z-[1450] bottom-[-64px] left-0 w-full lg:static lg:shrink-0 lg:w-auto"
    >
      <AppSidebar />
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'

import { useSpotifyEmbedStore } from '@/stores/spotifyEmbed'

import { RouterView } from 'vue-router'

const embedStore = useSpotifyEmbedStore()
</script>
