<template>
  <AppSpinner v-if="!spotifySearch.items.length" />
  <div v-else class="mt-4">
    <GridList :search="search" :list="filteredList" :type="category" id="result-content">
      <template #artists="{ artists }">
        <p>
          <template v-for="(a, index) in artists" :key="a.id">
            <template v-if="index">, </template>
            <a :href="a.external_urls.spotify" target="_blank">{{ a.name }}</a>
          </template>
        </p>
      </template>
    </GridList>
    <LoadMoreButton :offset="spotifySearch.offset" :total="spotifySearch.total" :search="search" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchContent'
}
</script>

<script setup lang="ts">
import AppSpinner from '@/components/common/AppSpinner.vue'
import GridList from '@/components/common/GridList.vue'
import LoadMoreButton from '@/components/common/LoadMoreButton.vue'
import spotify from '@/services/spotify'
import { ref, watch, toRefs, computed } from 'vue'

const props = defineProps<{ category: string; query: string }>()
const { category, query } = toRefs(props)

const spotifySearch = ref(new spotify.Search())

const search = async () => {
  if (category.value && query.value) {
    try {
      await spotifySearch.value.search(category.value, query.value)
    } catch (error) {
      console.error('Error searching Spotify:', error)
    }
  } else {
    console.error('Category or query is undefined')
  }
}

const initializeSearch = async () => {
  spotifySearch.value.setLimitByWidth(document.getElementsByTagName('body')[0])
  await search()
}

initializeSearch()

watch([category, query], () => {
  spotifySearch.value.resetSearch(category.value, query.value)
})

const filteredList = computed(() => {
  return spotifySearch.value.items.filter((item) => item !== null)
})
</script>
