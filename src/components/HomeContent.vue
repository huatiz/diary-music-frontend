<template>
  <HomeSearch />
  <HomeItem title="Recent Concerts" link="/events">
    <HomeListEvent :list="eventList" />
  </HomeItem>

  <HomeItem title="Categories" link="/genres">
    <HomeListGrid :list="musicCategories" type="category">
      <template #title="{ name, id }">
        <a :href="getCategoryUrl(id)" target="_blank" class="text-overflow">
          {{ name }}
        </a>
      </template>
    </HomeListGrid>
  </HomeItem>

  <HomeItem title="New Releases" link="/new-releases">
    <HomeListGrid :list="newReleaseAlbums" type="new-release" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'HomeContent'
}
</script>

<script setup lang="ts">
import { reactive } from 'vue'
import { useSpotifyStore } from '@/stores/spotify'
import { useOpenDataStore } from '@/stores/opendata'

import HomeSearch from '@/components/HomeSearch.vue'
import HomeItem from '@/components/HomeItem.vue'
import HomeListEvent from '@/components/HomeListEvent.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'

const limitNumber = 12
const eventLimitNumber = 4

interface IEventList {
  imageSrc: string
  uid: string
  eventId: string
  startDate: string
  endDate: string
  name: string
  locations: string[]
}

const eventList = reactive<IEventList[]>([])

const spotify = useSpotifyStore()
const openData = useOpenDataStore()

let { items: musicCategories } = await spotify.getMusicCategories('', limitNumber)

let { items: newReleaseAlbums } = await spotify.getNewReleaseAlbums(limitNumber)

let activities = await openData.getActivities(17)
try {
  activities.forEach((item: any, index: number) => {
    let locations = <any>[]

    item.showInfo.forEach((item: any) => {
      locations.push(item.location)
    })

    if (index >= eventLimitNumber) return

    eventList.push({
      imageSrc: item.imageUrl,
      uid: item.UID,
      eventId: item.webSales.split('PRODUCT_ID=')[1],
      startDate: item.startDate,
      endDate: item.endDate,
      name: item.title,
      locations: locations
    })
  })
} catch (err) {
  activities = []
}

const getCategoryUrl = (id: string) => {
  return `https://open.spotify.com/genre/${id}`
}
</script>
