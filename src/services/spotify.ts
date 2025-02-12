import { ref, reactive, type Ref } from 'vue'
import * as spotify_api from '@/api/spotify'

class Spotify {
  offset: Ref<number>
  total: Ref<number>
  limit: Ref<number>
  items: Array<any>

  constructor() {
    this.offset = ref(0)
    this.total = ref(0)
    this.limit = ref(20)
    this.items = reactive([])
  }

  setLimit = (limit: number) => {
    this.limit.value = limit
  }

  setLimitByWidth = (dom: HTMLElement) => {
    if (!dom) {
      return
    }

    const width = dom.clientWidth

    if (width >= 1024) {
      this.limit.value = 18
    } else if (width >= 768) {
      this.limit.value = 15
    } else {
      this.limit.value = 9
    }
  }
}

class Genre extends Spotify {
  constructor() {
    super()
  }

  getUrl = (id: string) => {
    return `https://open.spotify.com/genre/${id}`
  }

  search = async () => {
    try {
      const data = await spotify_api.getMusicCategories('', this.limit.value, this.offset.value)

      if (data.items) {
        this.items.push(...(data.items as []))
      }

      this.total.value = data.total
      this.offset.value = data.offset + this.limit.value
    } catch (error) {
      console.error(error)
      this.items.splice(0, this.items.length)
    }
  }
}

class NewRelease extends Spotify {
  constructor() {
    super()
  }

  search = async () => {
    try {
      const data = await spotify_api.getNewReleaseAlbums(this.limit.value, this.offset.value)

      if (data.items) {
        this.items.push(...(data.items as []))
      }

      this.total.value = data.total
      this.offset.value = data.offset + this.limit.value
    } catch (error) {
      console.error(error)
      this.items.splice(0, this.items.length)
    }
  }
}

class Search extends Spotify {
  constructor() {
    super()
  }

  search = async (category: string, query: string) => {
    try {
      const categoryStr = category + 's'

      const data = await spotify_api.search(category, query, this.limit.value, this.offset.value)
      this.items.push(...(data[categoryStr].items as []))

      this.total.value = data[categoryStr].total
      this.offset.value = data[categoryStr].offset + this.limit.value
    } catch (error) {
      console.error(error)
      this.items.splice(0, this.items.length)
    }
  }

  resetSearch = (category: string, query: string) => {
    this.items.splice(0, this.items.length)
    this.offset.value = 0
    this.total.value = 0

    this.search(category, query)
  }
}

export default {
  Genre,
  NewRelease,
  Search
}
