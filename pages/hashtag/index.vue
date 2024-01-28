<template>
  <div>
    <h3>HashTag page</h3>
    <div>hashtagName: {{ data?.test }}</div>
  </div>
</template>

<script setup lang="ts">
const hashtagStore = useHashtagStore()

const { data } = useAsyncData('fetchHashtag', () => hashtagStore.gethashtag(96))
</script>
