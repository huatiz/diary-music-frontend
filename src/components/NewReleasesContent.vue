<template>
  <HomeItem title="New Releases">
    <HomeListGrid :list="newRelease.items" type="new-release" id="result-content">
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
      :offset="newRelease.offset.value"
      :total="newRelease.total.value"
      :search="newRelease.search"
    />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'NewReleasesContent'
}
</script>

<script setup lang="ts">
import HomeItem from '@/components/HomeItem.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

import spotify from '@/utils/spotify'

const newRelease = new spotify.NewRelease()

newRelease.setLimitByWidth(document.getElementsByTagName('body')[0])
await newRelease.search()
</script>
