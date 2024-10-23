import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'

export const useSpotifyEmbedStore = defineStore('spotifyEmbed', () => {
  const contentElem = ref()
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

  const getScrollTop = () => {
    return contentElem.value.scrollTop || window.scrollY
  }

  const resetEmbedMusic = async () => {
    if (embedController.value) {
      await embedController.value.pause()
    }

    const scrollTop = getScrollTop()

    embedMusic.value = ''
    embedMusicLyric.value = ''

    await nextTick()
    window.scrollTo(0, scrollTop)
  }

  const setContentElem = (elem: HTMLElement) => {
    contentElem.value = elem
  }

  const updateEmbedMusic = async (uri: string, lyric: string) => {
    const scrollTop = await getScrollTop()

    embedMusicLyric.value = lyric
    embedMusic.value = uri

    if (embedController.value) {
      embedController.value.loadUri(embedMusic.value)
      embedController.value.play()
    } else {
      console.log('fail to init player')
      initPlayer(embedElem.value)
    }

    window.scrollTo(0, 0)
    await nextTick()
    contentElem.value.scrollTo(0, scrollTop)
  }

  return {
    embedController,
    embedElem,
    embedMusic,
    embedMusicLyric,
    getEmbedElem,
    resetEmbedMusic,
    setContentElem,
    updateEmbedMusic
  }
})
