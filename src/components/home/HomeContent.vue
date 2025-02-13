<template>
  <ContentSection title="Recent Concerts" link="/events">
    <EventList :list="event.items" />
  </ContentSection>
  <ContentSection title="Categories" link="/genres">
    <GridList :list="spotifyGenre.items" type="category">
      <template #title="{ name, id }">
        <a :href="spotifyGenre.getUrl(id)" target="_blank" class="text-overflow">
          {{ name }}
        </a>
      </template>
    </GridList>
  </ContentSection>
  <ContentSection title="New Releases" link="/new-releases">
    <GridList :list="spotifyNewRelease.items" type="new-release" />
  </ContentSection>
</template>

<script lang="ts">
export default {
  name: 'HomeContent'
}
</script>

<script setup lang="ts">
import ContentSection from '@/components/common/ContentSection.vue'
import EventList from '@/components/event/EventList.vue'
import GridList from '@/components/common/GridList.vue'
import event from '@/services/activity'
import spotify from '@/services/spotify'
import { ref } from 'vue'

const spotifyGenre = ref(new spotify.Genre())
const spotifyNewRelease = ref(new spotify.NewRelease())

const limitNumber = 12
const eventLimitNumber = 4

spotifyGenre.value.setLimit(limitNumber)
spotifyNewRelease.value.setLimit(limitNumber)

const init = async () => {
  try {
    await spotifyGenre.value.search()
    await spotifyNewRelease.value.search()
    await event.getActivities(eventLimitNumber)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

await init()
</script>
