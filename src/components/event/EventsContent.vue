<template>
  <ContentSection title="Recent Concerts">
    <EventList :list="event.items" />
    <LoadMoreButton :offset="0" :total="0" :search="event.getActivities" />
  </ContentSection>
</template>

<script lang="ts">
export default {
  name: 'EventsContent'
}
</script>

<script setup lang="ts">
import event from '@/services/activity'

import ContentSection from '@/components/common/ContentSection.vue'
import EventList from '@/components/event/EventList.vue'
import LoadMoreButton from '@/components/common/LoadMoreButton.vue'

await event.getActivities()
</script>
