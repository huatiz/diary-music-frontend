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
import AppLoading from '@/components/common/AppLoading.vue'
import HomeSearch from '@/components/home/HomeSearch.vue'
import HomeContent from '@/components/home/HomeContent.vue'
</script>
