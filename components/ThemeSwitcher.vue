<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
</script>

<template>
  <ColorScheme tag="theme-switcher">
    <Button variant="outline" class="w-8 h-8 border-none" size="icon" @click="() => colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'">
      <Sun class="w-4 h-4" v-if="colorMode.preference === 'dark'"/>
      <Moon class="w-4 h-4" v-else />
    </Button>
  </ColorScheme>
</template>