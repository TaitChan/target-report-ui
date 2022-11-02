<template>
  <div>hello world</div>
</template>

<script lang="ts" setup>
  import { useCartStore } from '@/stores/cart.js'
  import { storeToRefs } from 'pinia'
  const store = useCartStore()
  const { addItem } = store
  const { rawItems } = storeToRefs(store)
  addItem('11')
  console.log(rawItems)
</script>
