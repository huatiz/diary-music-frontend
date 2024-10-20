<template>
  <AppHeader />
  <div class="md:flex">
    <div class="md:grow" :class="{ 'h-screen overflow-y-scroll': embedMusic }">
      <div class="mx-[15px] pb-[60px] md:mx-[45px] md:pb-[120px]">
        <Suspense>
          <template #default>
            <RouterView />
          </template>
        </Suspense>
      </div>
    </div>
    <div
      :class="{ hidden: !embedMusic }"
      class="fixed z-[1450] bottom-[-64px] left-0 w-full lg:static lg:shrink-0 lg:w-auto"
    >
      <AppSidebar
        @initialized="getEmbedElem"
        :music-lyric="embedMusicLyric"
        :close-music-player="resetEmbedMusic"
      />
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'

import { ref, provide, Suspense } from 'vue'
import { RouterView } from 'vue-router'

const embedMusic = ref('')
const embedMusicLyric = ref('')
const embedController = ref()
const embedElem = ref()

function updateEmbedMusic(uri: string, lyric: string) {
  embedMusicLyric.value = lyric
  embedMusic.value = uri

  if (embedController.value) {
    embedController.value.loadUri(embedMusic.value)
    embedController.value.play()
  } else {
    console.log('fail to init player')
    initPlayer(embedElem.value)
  }
}

function getEmbedElem(elem: any) {
  embedElem.value = elem
  initPlayer(embedElem.value)
}

async function resetEmbedMusic() {
  if (embedController.value) {
    await embedController.value.pause()
  }
  embedMusic.value = ''
  embedMusicLyric.value = ''
}
function initPlayer(elem: HTMLElement) {
  window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
    let element = elem
    let options = {
      uri: embedMusic.value,
      height: 'auto',
      width: '100%'
    }
    let callback = (EmbedController: Object) => {
      embedController.value = EmbedController

      const iframeElem = embedController.value.iframeElement
      if (iframeElem) {
        iframeElem.className = 'lg:min-h-[352px] lg:max-h-[600px]'
      }

      embedController.value.play() // autoplay
    }

    IFrameAPI.createController(element, options, callback)
  }
}

provide('embedMusic', {
  embedMusic,
  updateEmbedMusic
})
</script>
