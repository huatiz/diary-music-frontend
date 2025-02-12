<template>
  <button
    v-for="l in languages"
    :key="l.code"
    @click="toggleLanguage(l.code, l.lang)"
    :class="{ 'text-blue-700 font-bold': curLanguage === l.code }"
    class="mx-1 hover:text-blue-500"
  >
    {{ l.name }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'LanguageGroup'
}
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
let curLanguage = ref(locale.value)

let languages = reactive([
  { name: 'English', code: 'en-US', lang: 'en' },
  { name: '中文', code: 'zh-TW', lang: 'zh-TW' }
])

const toggleLanguage = (code: string, lang: string) => {
  locale.value = code
  curLanguage.value = locale.value
  document.documentElement.lang = lang
}
</script>
