<template>
  <div>
    <h3>HashTag page</h3>
    <div>hashtagName: {{ data?.test }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const hashtagStore = useHashtagStore()

const { data } = useAsyncData('fetchHashtag', () => hashtagStore.gethashtag(Number(route.params.id)))

useHead({
  title: data.value?.hashtagName || 'T deal - nuxt3'
})
</script>
