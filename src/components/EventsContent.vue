<template>
  <HomeItem title="Recent Concerts">
    <HomeListEvent :list="event.items" />
    <SearchLoadBtn :offset="0" :total="0" :search="event.getActivities" />
  </HomeItem>
</template>

<script lang="ts">
export default {
  name: 'EventsContent'
}
</script>

<script setup lang="ts">
import event from '@/utils/activity'

import HomeItem from '@/components/HomeItem.vue'
import HomeListEvent from '@/components/HomeListEvent.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

await event.getActivities()
</script>
