import axios from 'axios'

export const getActivities = async (category: number) => {
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
