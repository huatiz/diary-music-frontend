<template>
  <main class="container mx-auto">
    <AppBreadcrumbs :lists="breadcrumbList" />
    <Suspense>
      <template #fallback>
        <AppSpinner />
      </template>
      <template #default>
        <NewReleasesContent />
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
export default {
  name: 'NewReleasesView'
}
</script>

<script setup lang="ts">
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import NewReleasesContent from '@/components/NewReleasesContent.vue'

const breadcrumbList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'New Releases',
    url: ''
  }
]
</script>
