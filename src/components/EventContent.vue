<template>
  <AppBreadcrumbs :lists="breadcrumbList" />
  <div class="mt-4 md:mt-8">
    <h1 class="font-bold mb-4 text-2xl md:text-4xl">{{ info.title }}</h1>
    <p class="mb-4">
      {{ $t('Source') }} |
      <a
        :href="info.sourceWebPromote"
        target="_blank"
        class="font-bold hover:border-solid hover:border-b-2 hover:border-custom-yellow pb-1"
        >{{ info.sourceWebName }}</a
      >
    </p>
    <div class="flex flex-col gap-4 md:flex-row">
      <div class="md:w-1/2 flex-shrink-0">
        <img :src="getImageSrc()" alt="" />
      </div>
      <div class="md:w-1/2">
        <div>
          <div v-for="item in info.showInfo" :key="item.time" class="mb-4">
            <div class="flex gap-3 flex-wrap justify-between">
              <div class="flex gap-3 items-start">
                <div class="text-center bg-sky-600 text-white py-2 px-4 rounded-md">
                  <p>{{ $t(getMonth(item.time)) }}</p>
                  <p class="font-bold text-2xl">{{ getDay(item.time) }}</p>
                  <p>{{ getYear(item.time) }}</p>
                </div>
                <div>
                  <p class="text-zinc-500">
                    {{ $t(getWeekday(item.time)) }} ∙ {{ getStartTime(item.time) }}
                  </p>
                  <p class="font-bold flex gap-1">
                    {{ item.locationName }}
                    <a
                      :href="getLocationSearchUrl(item.locationName)"
                      target="_blank"
                      class="hover:scale-110 duration-0.3"
                    >
                      <IconMap class="hover:fill-sky-600" />
                    </a>
                  </p>
                  <pre class="whitespace-pre-line">{{ $t('Ticket Price') }} | {{ item.price }}</pre>
                </div>
              </div>
              <div
                v-if="item.latitude && item.longitude"
                class="mt-4 w-full h-[200px] md:max-w-[480px] md:mt-0 2xl:w-[200px]"
              >
                <AppMap :lat="item.latitude" :lng="item.longitude" :zoom="14" />
              </div>
            </div>
          </div>
          <div v-if="info.descriptionFilterHtml" class="mt-4">
            <p
              class="relative text-xl pl-4 mb-2 before:bg-sky-500 before:content-[''] before:w-2 before:absolute before:left-0 before:top-0 before:bottom-0"
            >
              {{ $t('Description') }}
            </p>
            <pre class="whitespace-pre-line">{{ info.descriptionFilterHtml }}</pre>
          </div>
          <template v-if="info.comment">
            <pre class="whitespace-pre-line mt-4">{{ info.comment }}</pre>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventContent'
}
</script>

<script setup lang="ts">
import AppMap from '@/components/AppMap.vue'
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'

import IconMap from '@/assets/icons/map.svg?component'

import { getDay, getMonth, getWeekday, getYear, getStartTime } from '@/utils/date'

import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import event from '@/utils/activity'

const route = useRoute()

const uid = route.params.id

let info = reactive({
  title: '',
  webSales: '',
  sourceWebPromote: '',
  sourceWebName: '',
  descriptionFilterHtml: '',
  comment: '',
  imageUrl: '',
  showInfo: [
    {
      time: '',
      locationName: '',
      price: '',
      latitude: '',
      longitude: ''
    }
  ]
})

info = await event.getActivityInfo(uid)
const eventId = info.webSales && info.webSales.split('PRODUCT_ID=')[1]
const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Recent Concerts',
    url: '/events'
  },
  {
    name: info.title,
    url: ''
  }
]

const getImageSrc = () => event.getActivityImageSrc(eventId, info.imageUrl)

const getLocationSearchUrl = (location: string) => `https://www.google.com/maps/search/${location}`
</script>
