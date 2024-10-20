<template>
  <AppBreadcrumbs :lists="breadcrumbList" />
  <HomeItem title="New Releases">
    <HomeListGrid :list="items" type="new-release" id="result-content">
      <template #artists="{ artists }">
        <p>
          <template v-for="(a, index) in artists" :key="a.id">
            <template v-if="index">, </template>
            <a :href="a.external_urls.spotify" target="_blank">{{ a.name }}</a>
          </template>
        </p>
      </template>
    </HomeListGrid>
    <SearchLoadBtn :offset="offset" :total="total" :search="search" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'NewReleasesContent'
}
</script>

<script setup lang="ts">
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import HomeItem from '@/components/HomeItem.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

import { ref, reactive } from 'vue'
import { useSpotifyStore } from '@/stores/spotify'

const spotify = useSpotifyStore()

const offset = ref(0)
const total = ref(0)
const items = reactive([])
const limit = ref(20)

const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'New Releases',
    url: ''
  }
]

const setLimit = (dom: any) => {
  if (!dom) {
    return
  }

  const width = dom.clientWidth

  if (width >= 1024) {
    limit.value = 18
  } else if (width >= 768) {
    limit.value = 15
  } else {
    limit.value = 9
  }
}

setLimit(document.getElementsByTagName('body')[0])
search()

async function search() {
  let data = await spotify.getNewReleaseAlbums(limit.value, offset.value)
  items.push(...(data.items as []))

  total.value = data.total
  offset.value = data.offset + limit.value
}
</script>
