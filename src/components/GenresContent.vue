<template>
  <HomeItem title="Categories">
    <HomeListGrid :list="genre.items || []" type="category" id="result-content">
      <template #title="{ name, id }">
        <a :href="genre.getUrl(id)" target="_blank" class="text-overflow">
          {{ name }}
        </a>
      </template>
    </HomeListGrid>
    <SearchLoadBtn :offset="genre.offset.value" :total="genre.total.value" :search="genre.search" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'GenresContent'
}
</script>

<script setup lang="ts">
import HomeItem from '@/components/HomeItem.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

import spotify from '@/utils/spotify'

const genre = new spotify.Genre()

genre.setLimitByWidth(document.getElementsByTagName('body')[0])
await genre.search()
</script>
