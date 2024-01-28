import { HashTag } from '~/models/HashTag'

/** 
 * useAsyncData를 사용할 때, Custom Class로 매핑할 시,
 * "Cannot stringify arbitary non-POJOs" 에러로,
 * 이곳에서 수동으로 Model 등록.
*/

const registHydrationModel = (key: string, classData: any) => {
  definePayloadReducer(key, (data) => {
    if (data instanceof classData) return JSON.parse(JSON.stringify(data))

  })
  definePayloadReviver(key, (data) => new classData(data))
}

export default definePayloadPlugin(() => {
  registHydrationModel('HashTag', HashTag)
})