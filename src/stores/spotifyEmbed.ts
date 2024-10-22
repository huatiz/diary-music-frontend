import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpotifyEmbedStore = defineStore('spotifyEmbed', () => {
  const embedMusic = ref('')
  const embedMusicLyric = ref('')
  const embedController = ref()
  const embedElem = ref()

  const initPlayer = (elem: HTMLElement) => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = elem
      const options = {
        uri: embedMusic.value,
        height: 'auto',
        width: '100%'
      }
      const callback = (EmbedController: Object) => {
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

  const getEmbedElem = (elem: HTMLElement) => {
    embedElem.value = elem
    initPlayer(embedElem.value)
  }

  const resetEmbedMusic = async () => {
    if (embedController.value) {
      await embedController.value.pause()
    }
    embedMusic.value = ''
    embedMusicLyric.value = ''
  }

  const updateEmbedMusic = (uri: string, lyric: string) => {
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

  return {
    embedController,
    embedElem,
    embedMusic,
    embedMusicLyric,
    getEmbedElem,
    resetEmbedMusic,
    updateEmbedMusic
  }
})
