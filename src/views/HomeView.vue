<template>
  <main>
    <HomeSearch />
    <Suspense>
      <template #fallback>
        <div class="pt-[60px]">
          <AppLoading />
        </div>
      </template>
      <template #default>
        <HomeContent />
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<script setup lang="ts">
import AppLoading from '@/components/AppLoading.vue'
import HomeSearch from '@/components/HomeSearch.vue'
import HomeContent from '@/components/HomeContent.vue'
</script>
