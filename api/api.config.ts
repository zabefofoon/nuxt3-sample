export default {
  jsonClient: $fetch.create({
    headers: {
      'Content-Type': 'application/json',
    },
    onRequest(context) {
      context.options.headers = {
        ...context.options.headers,
        'additional-value': 'test',
      }
    },
    onResponse(context) {
      if (!context.response.ok) {
        console.log('intercept error')
      }
    },
  }),
  multipartClient: $fetch.create({
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onRequest(context) {},
    onResponse(context) {},
  }),
}
