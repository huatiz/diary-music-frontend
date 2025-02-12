<template>
  <aside>
    <div class="mx-2 lg:max-w-[300px]">
      <div class="flex flex-row-reverse justify-between lg:mb-1 lg:mt-4">
        <button @click="closeMusicPlayer()" class="btn">
          <IconCancel width="32" height="32" />
        </button>
        <button
          v-if="embedStore.embedMusicLyric !== ''"
          class="btn"
          @click="showLyric = !showLyric"
        >
          <IconLyrics width="32" height="32" :class="{ 'fill-sky-600 ': showLyric }" />
        </button>
      </div>
      <div class="lg:pb-4">
        <div ref="player"></div>
      </div>
      <div
        v-if="showLyric && embedStore.embedMusicLyric !== ''"
        class="fixed top-24 bottom-32 right-4 left-4 overflow-y-scroll rounded-xl lg:static lg:overflow-auto"
      >
        <button class="lg:hidden absolute top-0 right-0 p-3" @click="showLyric = false">
          <IconClose />
        </button>
        <pre
          class="mb-4 whitespace-pre-wrap rounded-xl p-4 lg:text-sm"
          :class="{ 'bg-neutral-100': embedStore.embedMusicLyric }"
          >{{ embedStore.embedMusicLyric }}</pre
        >
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'MainSidebar'
}
</script>

<script setup lang="ts">
import IconCancel from '@/assets/icons/cancel.svg?component'
import IconClose from '@/assets/icons/close.svg?component'
import IconLyrics from '@/assets/icons/lyrics.svg?component'

import { useSpotifyEmbedStore } from '@/stores/spotifyEmbed'

import { ref, onMounted } from 'vue'

const embedStore = useSpotifyEmbedStore()

const player = ref(null)
const showLyric = ref(true)

const initialized = (elem: HTMLElement) => {
  embedStore.getEmbedElem(elem)
}

const closeMusicPlayer = () => embedStore.resetEmbedMusic()

onMounted(() => {
  if (player.value) {
    initialized(player.value)
  }
})
</script>

<style lang="postcss" scoped>
.btn {
  @apply p-1 rounded bg-white;
}
</style>
