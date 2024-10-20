<template>
  <aside>
    <div class="mx-2 lg:max-w-[300px]">
      <div class="flex flex-row-reverse justify-between lg:mb-1 lg:mt-4">
        <button @click="closeMusicPlayer()" class="font-bold p-1 rounded bg-white">
          <IconCancel width="32" height="32" />
        </button>
        <button
          v-if="musicLyric !== ''"
          class="font-bold p-1 rounded bg-white"
          @click="showLyric = !showLyric"
        >
          <IconLyrics width="32" height="32" :class="{ 'fill-sky-600 ': showLyric }" />
        </button>
      </div>
      <div class="lg:pb-4">
        <div ref="player"></div>
      </div>
      <div
        v-if="showLyric && musicLyric !== ''"
        class="fixed top-24 bottom-32 right-4 left-4 overflow-y-scroll rounded-xl lg:static lg:overflow-auto"
      >
        <button class="lg:hidden absolute top-0 right-0 p-3" @click="showLyric = false">
          <IconClose />
        </button>
        <pre
          class="mb-4 whitespace-pre-wrap rounded-xl p-4 lg:text-sm"
          :class="{ 'bg-neutral-100': musicLyric }"
          >{{ musicLyric }}</pre
        >
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'AppSidebar'
}
</script>

<script setup lang="ts">
import IconCancel from '@/assets/icons/cancel.svg?component'
import IconClose from '@/assets/icons/close.svg?component'
import IconLyrics from '@/assets/icons/lyrics.svg?component'

import { ref, onMounted } from 'vue'

const { closeMusicPlayer, musicLyric } = defineProps(['closeMusicPlayer', 'musicLyric'])
const emit = defineEmits(['initialized'])

const player = ref(null)
const showLyric = ref(true)

onMounted(() => {
  emit('initialized', player.value)
})
</script>
