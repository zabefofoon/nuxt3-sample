import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get(
  '/test',
  defineEventHandler((event) => {
    const additionalValue = getHeader(event, 'additional-value')
    console.log('additional header value: ', additionalValue)
    // throw createError({status: 500})
    return Math.random()
  })
)

router.get(
  '/test/init',
  defineEventHandler(() => Math.random())
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

export default useBase('/api/sample', router.handler)
