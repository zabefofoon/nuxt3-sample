import hashtagApi from './hashtag.api'

export default {
  getHashtag: (hashtagId: number) => {
    return hashtagApi.getHashtag(hashtagId)
  },
}
