<template>
  <main class="container mx-auto">
    <SearchForm :category="category" :query="query" />
    <Suspense>
      <template #default>
        <SearchContent :category="category" :query="query" />
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
export default {
  name: 'SearchView'
}
</script>

<script setup lang="ts">
import SearchForm from '@/components/SearchForm.vue'
import SearchContent from '@/components/SearchContent.vue'

const { category, query } = defineProps(['category', 'query'])
</script>
