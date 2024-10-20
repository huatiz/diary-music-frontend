// import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useOpenDataStore = defineStore('opendata', () => {
  const getActivities = async (category: number) => {
    const url =
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=' +
      category

    try {
      const { data } = await axios.get(url)

      return data
    } catch (error) {
      console.error(error)
    }
  }

  const getActivityImageSrc = (id: any, imageSrc = '') =>
    imageSrc || `https://imgs2.utiki.com.tw/Data/ERA/Images/UTK2401/${id}_Other.JPG`

  const getActivityInfo = async (id: any) => {
    let targetItem: any

    const activities = await getActivities(17)

    activities.forEach((item: { UID: string }) => {
      if (item.UID === id) {
        targetItem = item
        return
      }
    })

    return targetItem
  }

  return {
    getActivities,
    getActivityImageSrc,
    getActivityInfo
  }
})
