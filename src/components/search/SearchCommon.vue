<template>
  <div>
    <slot :dropdownTypes="dropdownTypes" :search="search" :capitalize="capitalize"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchCommon'
}
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const dropdownTypes = ['album', 'artist', 'playlist', 'track']

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const search = (val: any) => {
  router.push({
    name: 'search',
    params: {
      category: val.category,
      query: val.query
    }
  })
}
</script>
