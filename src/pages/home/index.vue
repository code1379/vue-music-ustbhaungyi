<template>
  <div>
    Home {{ count }} - {{ double }} <button @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counter';
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { count, double } = storeToRefs(store)
const { increment } = store

</script>

<style scoped>

</style>
