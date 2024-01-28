export default defineNuxtRouteMiddleware((to, from) => {
  // 라우트 이동 막기
  // return abortNavigation()

  // 라우트 리디렉션
  // return navigateTo('/')

  console.log('toName at middleware: ', to.name)
  console.log('toName at middleware: ', from.name)
})
