<template>
  <p class="text-center mt-10">
    <AppLoading v-if="showLoading" size="36" />
    <template v-else-if="offset >= total">{{ $t('No more results') }}</template>
    <button
      v-else
      @click="getMore()"
      class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ $t('Load more') }}
    </button>
  </p>
</template>

<script lang="ts">
export default {
  name: 'LoadMoreButton'
}
</script>

<script setup lang="ts">
import AppLoading from '@/components/common/AppLoading.vue'

import { ref, watch, toRefs } from 'vue'

const props = defineProps<{
  offset: number
  total: number
  search: () => void
}>()
const { offset, total } = toRefs(props)

const showLoading = ref(false)

const getMore = () => {
  showLoading.value = true
  props.search()
}

watch(offset, () => {
  showLoading.value = false
})
</script>
