import apiConfig from './api.config'

export default {
  gethashtag: (hashtagId: number) => {
    return apiConfig.jsonClient(`/api/hashtag/${hashtagId}`, {
      method: 'get',
    })
  },
}
