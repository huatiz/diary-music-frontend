<template>
  <main class="container mx-auto">
    <AppBreadcrumbs v-if="breadcrumbList" :lists="breadcrumbList" />
    <slot name="header"></slot>
    <Suspense>
      <template #fallback>
        <AppSpinner />
      </template>
      <template #default>
        <slot name="default"></slot>
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
export default {
  name: 'ViewCommon'
}
</script>

<script setup lang="ts">
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import AppSpinner from '@/components/AppSpinner.vue'

const { breadcrumbList } = defineProps(['breadcrumbList'])
</script>
