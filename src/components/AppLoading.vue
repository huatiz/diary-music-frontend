<template>
  <div class="w-full flex justify-center pt-[60px]">
    <IconSpinner width="56" height="56" color="#5f6368" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppLoading'
}
</script>

<script setup lang="ts">
import IconSpinner from '@/assets/icons/spinner.svg?component'
</script>
