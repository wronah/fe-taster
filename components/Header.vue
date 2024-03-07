<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { toggleDarkMode, isDarkMode } from '../services/darkModeService';
</script>
<template>
    <div class="flex flex-row justify-end p-2" >
        <Button @click="toggleDarkMode()">
            <Sun v-if="isDarkMode"/>
            <Moon v-else />
        </Button>
    </div>
</template>
