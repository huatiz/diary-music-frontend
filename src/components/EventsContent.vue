<template>
  <AppBreadcrumbs :lists="breadcrumbList" />
  <HomeItem title="Recent Concerts">
    <HomeListEvent :list="eventList" />
    <SearchLoadBtn offset="0" total="0" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'EventsContent'
}
</script>

<script setup lang="ts">
import { reactive } from 'vue'
import { useOpenDataStore } from '@/stores/opendata'

import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import HomeItem from '@/components/HomeItem.vue'
import HomeListEvent from '@/components/HomeListEvent.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

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

const openData = useOpenDataStore()

const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Recent Concerts',
    url: ''
  }
]

search()

async function search() {
  let data = await openData.getActivities(17)

  try {
    data.forEach((item: any, index: number) => {
      let locations = <any>[]

      item.showInfo.forEach((item: any) => {
        locations.push(item.location)
      })

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
    data = []
  }
}
</script>
