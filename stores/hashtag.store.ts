import hashtagApi from '~/api/hashtag.api'
import { HashTag } from '~/models/HashTag'

export const useHashtagStore = defineStore('hashtag', () => {
  const gethashtag = async (hashtagId: number) => {
    const result = await hashtagApi.gethashtag(hashtagId)
    console.log(result)
    return HashTag.of(result)
    return result
  }

  return { gethashtag }
})
