<template>
  <!-- <form class="mt-9" @submit.prevent="search()">
    <div class="flex">
      <select
        v-model="category"
        class="cursor-pointer flex-shrink-0 z-10 inline-flex items-center py-2.5 pl-4 pr-10 text-sm font-medium text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
        required
      >
        <option value="" disabled selected>{{ $t('Select a category') }}</option>
        <option v-for="item in dropdownTypes" :key="item" :value="item">
          {{ $t(capitalize(item)) }}
        </option>
      </select>
      <div class="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-green-500 focus:border-green-500"
          :placeholder="$t('Search')"
          v-model="query"
        />
        <button
          type="submit"
          class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-custom-green rounded-e-lg border border-custom-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 disabled:bg-gray-300 disabled:border-gray-300"
          :disabled="!category || !query"
        >
          <IconSearch width="20" height="20" class="fill-white" />
        </button>
      </div>
    </div>
  </form> -->

  <SearchCommon>
    <template
      #default="{ dropdownTypes, category, query, search, capitalize, updateCategory, updateQuery }"
    >
      <form class="mt-9" @submit.prevent="search()">
        <div class="flex">
          <select
            :value="category"
            @change="updateCategory"
            class="cursor-pointer flex-shrink-0 z-10 inline-flex items-center py-2.5 pl-4 pr-10 text-sm font-medium text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
            required
          >
            <option value="" disabled selected>{{ $t('Select a category') }}</option>
            <option v-for="item in dropdownTypes" :key="item" :value="item">
              {{ $t(capitalize(item)) }}
            </option>
          </select>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-green-500 focus:border-green-500"
              :placeholder="$t('Search')"
              :value="query"
              @keyup="updateQuery"
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-custom-green rounded-e-lg border border-custom-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 disabled:bg-gray-300 disabled:border-gray-300"
              :disabled="!category || !query"
            >
              <IconSearch width="20" height="20" class="fill-white" />
            </button>
          </div>
        </div>
      </form>
    </template>
  </SearchCommon>
</template>

<script lang="ts">
export default {
  name: 'SearchForm'
}
</script>

<script setup lang="ts">
import SearchCommon from '@/components/SearchCommon.vue'

import IconSearch from '@/assets/icons/search.svg?component'
</script>

<style scoped>
select {
  -moz-padding-start: calc(1rem - 3px);
  background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 10px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
