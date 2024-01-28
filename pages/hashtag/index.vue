<template>
  <div>
    <h3>HashTag page</h3>
    <div>hashtagName: {{ data?.hashtagName }}</div>
  </div>
</template>

<script setup lang="ts">
import apiConfig from '~/api/api.config'

const { data } = useAsyncData('fetchHashtag', () =>
  apiConfig.jsonClient('/api/hashtag/96')
)
</script>
