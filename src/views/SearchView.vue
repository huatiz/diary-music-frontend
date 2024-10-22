<template>
  <ViewCommon>
    <template #header>
      <SearchForm :category="category" :query="query" />
    </template>
    <template #default>
      <SearchContent :category="category" :query="query" />
    </template>
  </ViewCommon>
</template>

<script lang="ts">
export default {
  name: 'SearchView'
}
</script>

<script setup lang="ts">
import ViewCommon from '@/components/ViewCommon.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchContent from '@/components/SearchContent.vue'

const { category, query } = defineProps(['category', 'query'])
</script>
