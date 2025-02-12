<template>
  <ContentSection title="Categories">
    <GridList :list="genre.items || []" type="category" id="result-content">
      <template #title="{ name, id }">
        <a :href="genre.getUrl(id)" target="_blank" class="text-overflow">
          {{ name }}
        </a>
      </template>
    </GridList>
    <LoadMoreButton :offset="genre.offset" :total="genre.total" :search="genre.search" />
  </ContentSection>
</template>

<script lang="ts">
export default {
  name: 'GenresContent'
}
</script>

<script setup lang="ts">
import ContentSection from '@/components/common/ContentSection.vue'
import GridList from '@/components/common/GridList.vue'
import LoadMoreButton from '@/components/common/LoadMoreButton.vue'
import spotify from '@/services/spotify'
import { ref } from 'vue'

const genre = ref(new spotify.Genre())

genre.value.setLimitByWidth(document.getElementsByTagName('body')[0])
try {
  await genre.value.search()
} catch (error) {
  console.error('Error fetching genres:', error)
}
</script>
