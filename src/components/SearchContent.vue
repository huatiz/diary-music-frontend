<template>
  <!-- <div class="my-4">
    {{ $t('Search') }} {{ $t(category) }} <strong>{{ query }}</strong>
  </div> -->
  <div class="mt-4">
    <HomeListGrid :list="items" :type="category" id="result-content">
      <template #artists="{ artists }">
        <p>
          <template v-for="(a, index) in artists" :key="a.id">
            <template v-if="index">, </template>
            <a :href="a.external_urls.spotify" target="_blank">{{ a.name }}</a>
          </template>
        </p>
      </template>
    </HomeListGrid>
    <SearchLoadBtn :offset="offset" :total="total" :search="search" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchContent'
}
</script>

<script setup lang="ts">
import HomeListGrid from '@/components/HomeListGrid.vue'
import SearchLoadBtn from '@/components/SearchLoadBtn.vue'

import { ref, reactive, watch, toRefs, onUpdated } from 'vue'
import { useSpotifyStore } from '@/stores/spotify'

const props = defineProps(['category', 'query'])
const { category, query } = toRefs(props)
const spotify = useSpotifyStore()

const offset = ref(0)
const total = ref(0)
const items = reactive([])
const limit = ref(20)
let categoryStr = props.category + 's'

const setLimit = (dom: any) => {
  if (!dom) {
    return
  }

  const width = dom.clientWidth

  if (width >= 1024) {
    limit.value = 18
  } else if (width >= 768) {
    limit.value = 15
  } else {
    limit.value = 9
  }
}

setLimit(document.getElementsByTagName('body')[0])
search()

onUpdated(() => {
  console.log('updated')
})

async function search() {
  let data = await spotify.search(props.category, props.query, limit.value, offset.value)

  items.push(...(data[categoryStr].items as []))

  total.value = data[categoryStr].total
  offset.value = data[categoryStr].offset + limit.value
}

watch([category, query], () => {
  // Reset values if needed before searching
  offset.value = 0
  items.length = 0
  categoryStr = props.category + 's'

  search()
})
</script>
