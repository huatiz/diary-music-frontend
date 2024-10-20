import { defineStore } from 'pinia'
import axios from 'axios'

export const useSpotifyStore = defineStore('spotify', () => {
  const getLyric = async (track: string, artist: string) => {
    const url = `/api/lyrics?track=${track}&artist=${artist}`

    try {
      const { data } = await axios.get(url)

      return data.message.body?.lyrics.lyrics_body || ''
    } catch (error) {
      console.error(error)
    }
  }
  const getMusicCategories = async (locale = 'en', limit = 20, offset = 0) => {
    const url = `/api/genres?locale=${locale}&limit=${limit}&offset=${offset}`

    try {
      const { data } = await axios.get(url)

      return data
    } catch (error) {
      console.error(error)
    }
  }

  const getNewReleaseAlbums = async (limit = 20, offset = 0) => {
    const url = `/api/new-releases?limit=${limit}&offset=${offset}`

    try {
      const { data } = await axios.get(url)

      return data
    } catch (error) {
      console.error(error)
    }
  }

  const search = async (category: string, query: string, limit = 20, offset = 0) => {
    const url = `/api/search?q=${query}&type=${category}&limit=${limit}&offset=${offset}`

    try {
      const { data } = await axios.get(url)

      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getLyric,
    getMusicCategories,
    getNewReleaseAlbums,
    search
  }
})
