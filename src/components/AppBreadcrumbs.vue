<template>
  <ul class="flex flex-wrap mt-6 md:mt-14">
    <li v-for="(l, index) in lists" :key="l.name" class="">
      <div :class="{ 'breadcrumbs-decor': index }">
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

<style scoped>
.breadcrumbs-decor::before {
  content: '/';
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
