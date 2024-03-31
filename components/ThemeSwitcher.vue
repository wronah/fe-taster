<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
</script>

<template>
    <ColorScheme tag="theme-switcher">
        <Button @click="() => colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'">
            <Sun v-if="colorMode.preference === 'dark'"/>
            <Moon v-else />
        </Button>
    </ColorScheme>
</template>