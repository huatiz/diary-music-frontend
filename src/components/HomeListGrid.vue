<template>
  <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
    <div v-for="item in list" :key="item.id">
      <div class="overflow-hidden mb-[10px] rounded-xl relative">
        <div class="relative w-full pb-[100%] group">
          <img
            class="absolute top-0 left-0 w-full h-full hover:scale-110 duration-300"
            :src="getAlbumImage(item)"
            :alt="item.name"
            loading="lazy"
          />
          <template v-if="item.type">
            <button
              class="absolute bottom-2 left-2 duration-300 rounded-full bg-gray-400 opacity-0 group-hover:opacity-100"
              @click="setEmbedMusic(item)"
            >
              <IconPlayCircle width="32" height="32" class="fill-white w-8 h-8 lg:w-10 lg:h-10" />
            </button>
          </template>
        </div>
      </div>
      <h3 class="mb-1 font-bold text-zinc-800 md:text-lg">
        <slot name="title" v-bind="item">
          <a
            v-if="item.external_urls"
            :href="item.external_urls.spotify"
            target="_blank"
            class="text-overflow"
          >
            {{ item.name }}
          </a>
          <span v-else class="text-overflow">{{ item.name }}</span>
        </slot>
      </h3>
      <slot name="artists" v-bind="item"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeListGrid'
}
</script>

<script setup lang="ts">
import IconPlayCircle from '@/assets/icons/play_circle.svg?component'

import { inject } from 'vue'
import { useSpotifyStore } from '@/stores/spotify'

let { list, type } = defineProps(['list', 'type'])
const { updateEmbedMusic } = inject('embedMusic')
const spotify = useSpotifyStore()

const getAlbumImage = (item: any) => {
  const defaultImage = 'https://via.placeholder.com/300x300'

  switch (type) {
    case 'category':
      return item.icons[0].url || defaultImage

    case 'track':
      return item.album.images[0]?.url || defaultImage

    default:
      return item.images[0]?.url || defaultImage
  }
}

const setEmbedMusic = async (item: any) => {
  const path = item.uri || `spotify:${item.type}:${item.id}`
  let lyrics = ''

  if (item.type === 'track') {
    const trackName = item.name.split('(')[0]
    lyrics = await spotify.getLyric(trackName, item.artists[0].name)
  }

  updateEmbedMusic(path, lyrics)
}
</script>
