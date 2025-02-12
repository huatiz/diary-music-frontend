<template>
  <div
    class="w-full flex justify-center items-center pt-[60px] md:pt-[120px]"
    :class="
      hasBreadcrumbs
        ? 'h-[calc(100vh_-_232px)] md:h-[calc(100vh_-_344px)]'
        : 'h-[calc(100vh_-_184px)] md:h-[calc(100vh_-_264px)]'
    "
  >
    <IconSpinner class="animate-spin" width="56" height="56" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppSpinner'
}
</script>

<script setup lang="ts">
import IconSpinner from '@/assets/icons/progress_activity.svg?component'
const { hasBreadcrumbs } = defineProps(['hasBreadcrumbs'])
</script>
