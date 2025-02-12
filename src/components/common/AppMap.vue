<template>
  <div class="w-full h-full rounded-lg" ref="mapContainer"></div>
</template>

<script lang="ts">
export default {
  name: 'AppMap'
}
</script>

<script setup lang="ts">
import markerIconUrl from '/node_modules/leaflet/dist/images/marker-icon.png'
import markerIconRetinaUrl from '/node_modules/leaflet/dist/images/marker-icon-2x.png'
import markerShadowUrl from '/node_modules/leaflet/dist/images/marker-shadow.png'

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

  // fix leaflet marker showing on vite
  L.Icon.Default.prototype.options.iconUrl = markerIconUrl
  L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl
  L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl
  L.Icon.Default.imagePath = ''

  L.marker([lat, lng]).addTo(map)
})
</script>
