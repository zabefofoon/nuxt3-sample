<template>
  <div>
    <h3>Store</h3>
    <button @click="counterStore.increment()">
      Counting {{ counterStore.count }}
    </button>
  </div>
  <div class="mt-[80px]">
    <h3>Api</h3>
    <div>
      <h4>Fetch random Number</h4>
      <div>
        <button @click="refresh()">refresh</button>
        data: {{ data }}
      </div>
      <div>
        <button @click="fetchRandomNumber">fetch</button>
        fetchedRandomNumber: {{ fetchedRandomNumber }}
      </div>
    </div>
    <div class="mt-[80px]">
      <NuxtLink to="/hashtag">Go to hashtag</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '~/stores/counter.store'

const counterStore = useCounterStore()

import apiConfig from '~/api/api.config'

// ssr 사용한다면 useAsyncData
// 데이터를 서버로부터 불러오고 난 후, create
const { data, refresh } = await useAsyncData('fetchInitData', () =>
  apiConfig.jsonClient<number>('/api/sample/test/init')
)

const fetchedRandomNumber = ref(0)
// ssr 사용 안한다면 $fetch
// create 후 데이터를 서버로 부터 불러옴
const fetchRandomNumber = async () => {
  fetchedRandomNumber.value = await apiConfig.jsonClient<number>(
    '/api/sample/test'
  )
}
</script>
<style scoped lang="scss">
.mt-\[80px\] {
  margin-top: 80px;
}
</style>
