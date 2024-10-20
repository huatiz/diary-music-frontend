<template>
  <SearchCommon>
    <template
      #default="{ dropdownTypes, category, query, search, capitalize, updateCategory, updateQuery }"
    >
      <div
        class="mt-2 mb-10 md:flex md:justify-center md:items-center md:gap-x-4 md:mt-20 md:mb-15 md:px-20"
      >
        <div class="w-full flex justify-center mb-8 md:mb-0 md:w-auto">
          <p
            class="font-roboto text-3xl text-center leading-tight max-w-[400px] md:text-5xl md:text-start md:leading-tight md:max-w-[600px]"
          >
            ONE <span class="border-solid border-b-2 border-custom-yellow">SONG</span> A DAY KEEPS
            THE <span class="text-sky-600">BLUES</span> AWAY!
          </p>
        </div>
        <form class="md:min-w-[350px] flex-shrink-0" @submit.prevent="search()">
          <div>
            <select
              :value="category"
              @change="updateCategory"
              class="mb-2.5 cursor-pointer w-full z-10 items-center py-2.5 pl-4 pr-10 text-sm font-medium text-custom-green bg-white-100 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300"
              required
            >
              <option value="" disabled selected>{{ $t('Select a category') }}</option>
              <option v-for="item in dropdownTypes" :key="item" :value="item">
                {{ $t(capitalize(item)) }}
              </option>
            </select>
            <input
              type="search"
              id="search-dropdown"
              class="mb-2.5 block px-4 py-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-green-500 focus:border-green-500"
              :placeholder="$t('Search')"
              :value="query"
              @keyup="updateQuery"
            />
            <button
              type="submit"
              class="w-full flex justify-center items-center p-2.5 text-sm font-medium text-white bg-custom-green rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 disabled:bg-gray-300 disabled:border-gray-300"
              :disabled="!category || !query"
            >
              <IconSearch width="20" height="20" class="fill-white" />
              <span class="tracking-widest ms-3">{{ $t('Search') }}</span>
            </button>
          </div>
        </form>
      </div>
    </template>
  </SearchCommon>
</template>

<script lang="ts">
export default {
  name: 'HomeSearch'
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
