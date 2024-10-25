<template>
  <div class="w-full flex justify-center">
    <IconSpinner :width="actualSize" :height="actualSize" color="#5f6368" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppLoading'
}
</script>

<script setup lang="ts">
import IconSpinner from '@/assets/icons/spinner.svg?component'

const { size } = defineProps(['size'])
const defaultSize = 56
const actualSize = size || defaultSize
</script>
