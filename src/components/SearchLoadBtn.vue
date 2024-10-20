<template>
  <p class="text-center mt-10">
    <template v-if="offset >= total">{{ $t('No more results') }}</template>
    <button
      v-else
      @click="search()"
      class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ $t('Get More') }}
    </button>
  </p>
</template>

<script lang="ts">
export default {
  name: 'SearchLoadBtn'
}
</script>

<script setup lang="ts">
const { offset, total, search } = defineProps(['offset', 'total', 'search'])
</script>
