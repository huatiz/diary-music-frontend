<template>
  <div class="w-full h-full rounded-lg" ref="mapContainer"></div>
</template>

<script lang="ts">
export default {
  name: 'AppMap'
}
</script>

<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'

const mapContainer = ref(null)

let { lat, lng, zoom } = defineProps(['lat', 'lng', 'zoom'])

onMounted(() => {
  if (mapContainer.value === null) {
    return
  }

  const map = L.map(mapContainer.value, {
    center: [lat, lng],
    zoom: zoom || 15
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  let marker = L.marker([lat, lng]).addTo(map)
})
</script>
