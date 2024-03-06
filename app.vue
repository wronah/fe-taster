<script setup lang="ts">
import { setMode } from './lib/utils';

onMounted(() => {
  setMode()
})
</script>

<template>
  <div>
    <Header />
  </div>
</template>
