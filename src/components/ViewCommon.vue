<template>
  <main class="container mx-auto">
    <AppBreadcrumbs v-if="breadcrumbList" :lists="breadcrumbList" />
    <slot name="header"></slot>
    <Suspense>
      <template #fallback>
        <AppSpinner :hasBreadcrumbs="hasBreadcrumbs" />
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
import AppBreadcrumbs from '@/components/common/AppBreadcrumbs.vue'
import AppSpinner from '@/components/common/AppSpinner.vue'

const { breadcrumbList } = defineProps(['breadcrumbList'])
const hasBreadcrumbs = Boolean(breadcrumbList)
</script>
