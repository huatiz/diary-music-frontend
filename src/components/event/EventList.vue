<template>
  <div
    class="flex flex-col gap-4 md:grid md:gap-y-3"
    :class="embedStore.embedMusic ? 'md:grid-cols-1' : 'md:grid-cols-2 md:gap-x-[30px] '"
  >
    <template v-for="item in list" :key="item.name">
      <router-link :to="getEventUrl(item)">
        <div
          class="flex rounded-xl hover:bg-gray-200 md:border-solid md:border md:border-gray-200 md:bg-gray-100"
        >
          <div
            class="flex-shrink-0 overflow-hidden flex items-center w-[90px] rounded-xl md:w-40 md:h-40 md:rounded-tr-none md:rounded-br-none md:bg-white"
          >
            <img
              :src="event.getActivityImageSrc(item.eventId, item.imageSrc)"
              :alt="item.name"
              class="zoom"
            />
          </div>
          <div class="w-full px-4 md:px-[30px] md:py-4">
            <p class="text-[12px] md:text-base md:mb-1 text-nowrap">
              {{ showEventDate(item.startDate, item.endDate) }}
            </p>
            <p class="font-bold text-zinc-800 text-[15px] md:text-[20px] md:h-[60px] md:mb-4">
              {{ item.name }}
            </p>
            <p class="flex items-center text-[11px] md:text-base">
              <IconLocationOn width="16" height="16" />
              <span>{{ showEventLocation(item.locations) }}</span>
            </p>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventList'
}
</script>

<script setup lang="ts">
import IconLocationOn from '@/assets/icons/location_on.svg?component'

import { useSpotifyEmbedStore } from '@/stores/spotifyEmbed'
import event from '@/services/activity'

const embedStore = useSpotifyEmbedStore()

let { list } = defineProps(['list'])

const getEventUrl = (item: any) => {
  return `/events/${item.uid}`
}

const showEventDate = (startDate: string, endDate: string) =>
  startDate === endDate ? startDate : `${startDate} - ${endDate}`

const showEventLocation = (locations: string[]) => {
  let locationArr = locations.map((item) => item.slice(0, 3))
  locationArr = [...new Set(locationArr)]

  return locationArr.join('、')
}
</script>
