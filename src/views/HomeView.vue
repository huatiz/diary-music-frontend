<template>
  <main>
    <Suspense>
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
import { Suspense } from 'vue'
import HomeContent from '@/components/HomeContent.vue'
</script>
