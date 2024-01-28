import { createRouter, defineEventHandler, useBase } from 'h3'
import hashtagService from './hashtag.service'

const router = createRouter()

router.get(
  '/:id',
  defineEventHandler(async (event) => {
    const id = event.context.params?.id || 0
    const { data } = await hashtagService.getHashtag(Number(id))
    return data
  })
)

router.get(
  '/**',
  defineEventHandler(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Error',
    })
  })
)

router.post(
  '/**',
  defineEventHandler(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Error',
    })
  })
)

router.put(
  '/**',
  defineEventHandler(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Error',
    })
  })
)

router.delete(
  '/**',
  defineEventHandler(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Error',
    })
  })
)

export default useBase('/api/hashtag', router.handler)
