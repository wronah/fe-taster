<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { toggleDarkMode, isDarkMode } from '../services/darkModeService';
</script>

<template>
    <Button @click="toggleDarkMode()">
        <Sun v-if="isDarkMode"/>
        <Moon v-else />
    </Button>
</template>