<template>
  <main>
    <HomeSearch />
    <Suspense>
      <template #fallback>
        <AppSpinner />
      </template>
      <template #default>
        <HomeContent />
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<script setup lang="ts">
import AppSpinner from '@/components/AppSpinner.vue'
import HomeSearch from '@/components/HomeSearch.vue'
import HomeContent from '@/components/HomeContent.vue'
</script>
