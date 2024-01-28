export default defineEventHandler(async (event) => {
  console.log('reqUrl at middleware: ', event.node.req.url)
  console.log('resStatus at middleware: ', event.node.res.statusCode)
})
