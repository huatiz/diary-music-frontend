<template>
  <ul class="flex flex-wrap mt-6 md:mt-14">
    <li v-for="(l, index) in lists" :key="l.name" class="">
      <div :class="index ? 'before:content-[\'/\'] before:mx-2' : ''">
        <template v-if="l.url">
          <router-link :to="l.url" class="text-custom-green">{{ $t(l.name) }}</router-link>
        </template>
        <template v-else>{{ $t(l.name) }}</template>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'AppBreadcrumbs'
}
</script>

<script setup lang="ts">
let { lists } = defineProps(['lists'])
</script>
