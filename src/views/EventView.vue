<template>
  <ViewCommon>
    <EventContent />
  </ViewCommon>
</template>

<script lang="ts">
export default {
  name: 'EventView'
}
</script>

<script setup lang="ts">
import ViewCommon from '@/components/ViewCommon.vue'
import EventContent from '@/components/event/EventContent.vue'
</script>
