const BASE_URL = 'https://front-dev.tdeal.kr'

export default defineEventHandler(event => {
  // cors문제로 개발에서만 proxy 사용
  if (!process.dev) return

  if (!event.node.req.url?.startsWith('/tdealApi')) return
  const replacedUrl = event.node.req.url.replace(/^\/tdealApi/g, '')
  const target = new URL(replacedUrl, BASE_URL)

  return proxyRequest(event, target.toString(), {
    headers: {
      host: target.host,
      origin: target.origin
    }
  })
})
