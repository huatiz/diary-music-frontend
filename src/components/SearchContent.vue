<template>
  <AppSpinner v-if="!spotifySearch.items.length" />
  <div v-else class="mt-4">
    <HomeListGrid :search="search" :list="spotifySearch.items" :type="category" id="result-content">
      <template #artists="{ artists }">
        <p>
          <template v-for="(a, index) in artists" :key="a.id">
            <template v-if="index">, </template>
            <a :href="a.external_urls.spotify" target="_blank">{{ a.name }}</a>
          </template>
        </p>
      </template>
    </HomeListGrid>
    <SearchLoadBtn
      :offset="spotifySearch.offset.value"
      :total="spotifySearch.total.value"
      :search="search"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchContent'
}
</script>

<script setup lang="ts">
import AppSpinner from '@/components/AppSpinner.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

import { watch, toRefs } from 'vue'

import spotify from '@/utils/spotify'

const spotifySearch = new spotify.Search()
const props = defineProps(['category', 'query'])
const { category, query } = toRefs(props)

const search = async () => {
  await spotifySearch.search(props.category, props.query)
}

spotifySearch.setLimitByWidth(document.getElementsByTagName('body')[0])
await search()

watch([category, query], () => {
  spotifySearch.resetSearch(props.category, props.query)
})
</script>
