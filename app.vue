<script setup lang="ts">
import { setMode } from './services/darkModeService';

onMounted(() => {
  setMode()
})
</script>

<template>
  <div>
    <Header />
  </div>
</template>
