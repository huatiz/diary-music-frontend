<template>
  <section class="mt-9">
    <div class="flex justify-between items-end my-3">
      <h1 class="text-2xl text-zinc-900 font-bold">{{ $t(title) }}</h1>
      <template v-if="link">
        <router-link :to="link" class="text-orange mr-2 md:mr-4 hover:text-custom-green"
          >{{ $t('View More') }} ></router-link
        >
      </template>
    </div>
    <slot>No Data</slot>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HomeItem'
}
</script>

<script setup lang="ts">
let { title, link } = defineProps(['title', 'link'])
</script>
