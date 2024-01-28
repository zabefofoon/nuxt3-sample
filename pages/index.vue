<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">
      Learn more about Nuxt Routing
    </a>
  </div>
  <div>
    {{ counterStore.count }}
    <button @click="counterStore.increment()">Counting</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '~/stores/counter.store'
const route = useRoute()

const counterStore = useCounterStore()
</script>
