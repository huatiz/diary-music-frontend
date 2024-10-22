<template>
  <HomeItem title="Recent Concerts" link="/events">
    <HomeListEvent :list="event.items" />
  </HomeItem>
  <HomeItem title="Categories" link="/genres">
    <HomeListGrid :list="spotifyGenre.items" type="category">
      <template #title="{ name, id }">
        <a :href="spotifyGenre.getUrl(id)" target="_blank" class="text-overflow">
          {{ name }}
        </a>
      </template>
    </HomeListGrid>
  </HomeItem>
  <HomeItem title="New Releases" link="/new-releases">
    <HomeListGrid :list="spotifyNewRelease.items" type="new-release" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'HomeContent'
}
</script>

<script setup lang="ts">
import HomeItem from '@/components/HomeItem.vue'
import HomeListEvent from '@/components/HomeListEvent.vue'
import HomeListGrid from '@/components/HomeListGrid.vue'

import event from '@/utils/activity'
import spotify from '@/utils/spotify'

const spotifyGenre = new spotify.Genre()
const spotifyNewRelease = new spotify.NewRelease()

const limitNumber = 12
const eventLimitNumber = 4

spotifyGenre.setLimit(limitNumber)
spotifyNewRelease.setLimit(limitNumber)

await spotifyGenre.search()
await spotifyNewRelease.search()
await event.getActivities(eventLimitNumber)
</script>
