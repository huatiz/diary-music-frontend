<template>
  <div>
    <slot
      :dropdownTypes="dropdownTypes"
      :category="category"
      :query="query"
      :search="search"
      :capitalize="capitalize"
      :updateCategory="updateCategory"
      :updateQuery="updateQuery"
    ></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchCommon'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dropdownTypes = ['album', 'artist', 'playlist', 'track']

const props = defineProps(['category', 'query'])

const category = ref(props.category || '')
const query = ref(props.query || '')

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const search = () => {
  router.push({
    name: 'search',
    params: {
      category: category.value,
      query: query.value
    }
  })
}

const updateCategory = (event: Event) => {
  category.value = (event.target as HTMLInputElement).value
}

const updateQuery = (event: Event) => {
  query.value = (event.target as HTMLInputElement).value
}
</script>
