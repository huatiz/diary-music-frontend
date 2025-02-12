<template>
  <MainHeader />
  <div class="md:flex">
    <div
      ref="content"
      class="md:grow"
      :class="{ 'h-screen overflow-y-scroll': embedStore.embedMusic }"
    >
      <div class="mx-[15px] pb-[60px] md:mx-[45px] md:pb-[120px]">
        <RouterView />
      </div>
    </div>
    <div
      :class="{ hidden: !embedStore.embedMusic }"
      class="fixed z-[1450] bottom-[-64px] left-0 w-full lg:static lg:shrink-0 lg:w-auto"
    >
      <MainSidebar />
    </div>
  </div>
  <MainFooter />
</template>

<script setup lang="ts">
import MainHeader from '@/layouts/MainHeader.vue'
import MainSidebar from '@/layouts/MainSidebar.vue'
import MainFooter from '@/layouts/MainFooter.vue'

import { useSpotifyEmbedStore } from '@/stores/spotifyEmbed'

import { ref, watch, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const content = ref<HTMLDivElement | null>(null)
const route = useRoute()
const embedStore = useSpotifyEmbedStore()

const initialized = (elem: HTMLElement) => {
  embedStore.setContentElem(elem)
}

onMounted(() => {
  if (content.value) {
    initialized(content.value)
  }
})

// reset scroll position when route change
watch(
  () => route.fullPath,
  () => {
    window.scrollTo(0, 0)
    if (content.value) {
      content.value.scrollTo(0, 0)
    }
  }
)
</script>
