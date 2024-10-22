import * as opendata_api from '@/api/opendata'
import { reactive } from 'vue'

interface IEventList {
  imageSrc: string
  uid: string
  eventId: string
  startDate: string
  endDate: string
  name: string
  locations: string[]
}

class Activity {
  items: IEventList[] = []

  constructor() {
    this.items = reactive([])
  }

  getActivities = async (limit = 50) => {
    try {
      const data = await opendata_api.getActivities(17)

      data.forEach((item: any, index: number) => {
        if (index >= limit) return

        const locations = <any>[]

        item.showInfo.forEach((item: any) => {
          locations.push(item.location)
        })

        this.items.push({
          imageSrc: item.imageUrl,
          uid: item.UID,
          eventId: item.webSales.split('PRODUCT_ID=')[1],
          startDate: item.startDate,
          endDate: item.endDate,
          name: item.title,
          locations: locations
        })
      })
    } catch (err) {
      this.items.slice(0, this.items.length)
    }
  }

  getActivityImageSrc = (id: any, imageSrc = '') =>
    imageSrc || `https://imgs2.utiki.com.tw/Data/ERA/Images/UTK2401/${id}_Other.JPG`

  getActivityInfo = async (id: any) => {
    let targetItem: any

    const data = await opendata_api.getActivities(17)

    data.forEach((item: { UID: string }) => {
      if (item.UID === id) {
        targetItem = item
        return
      }
    })

    return targetItem
  }
}

export default new Activity()
