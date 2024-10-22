<template>
  <ViewCommon :breadcrumbList="breadcrumbList">
    <EventsContent />
  </ViewCommon>
</template>

<script lang="ts">
export default {
  name: 'EventsView'
}
</script>

<script setup lang="ts">
import ViewCommon from '@/components/ViewCommon.vue'
import EventsContent from '@/components/EventsContent.vue'

const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Recent Concerts',
    url: ''
  }
]
</script>
