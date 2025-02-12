<template>
  <ContentSection title="New Releases">
    <GridList :list="newRelease.items" type="new-release" id="result-content">
      <template #artists="{ artists }">
        <p>
          <template v-for="(a, index) in artists" :key="a.id">
            <template v-if="index">, </template>
            <a :href="a.external_urls.spotify" target="_blank">{{ a.name }}</a>
          </template>
        </p>
      </template>
    </GridList>
    <LoadMoreButton
      :offset="newRelease.offset"
      :total="newRelease.total"
      :search="newRelease.search"
    />
  </ContentSection>
</template>

<script lang="ts">
export default {
  name: 'NewReleasesContent'
}
</script>

<script setup lang="ts">
import ContentSection from '@/components/common/ContentSection.vue'
import GridList from '@/components/common/GridList.vue'
import LoadMoreButton from '@/components/common/LoadMoreButton.vue'
import spotify from '@/services/spotify'
import { ref } from 'vue'

const newRelease = ref(new spotify.NewRelease())

newRelease.value.setLimitByWidth(document.getElementsByTagName('body')[0])
try {
  await newRelease.value.search()
} catch (error) {
  console.error('Error fetching new releases:', error)
}
</script>
