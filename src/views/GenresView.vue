<template>
  <ViewCommon :breadcrumbList="breadcrumbList">
    <GenresContent />
  </ViewCommon>
</template>

<script lang="ts">
export default {
  name: 'GenresContent'
}
</script>

<script setup lang="ts">
import ViewCommon from '@/components/ViewCommon.vue'
import GenresContent from '@/components/GenresContent.vue'

const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Categories',
    url: ''
  }
]
</script>
