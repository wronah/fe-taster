<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

function toggleDarkMode() {
    const body = document.querySelector('body')
    isDark.value = body!.classList.contains('dark')

    if(isDark.value) {
        body!.classList.remove('dark')
        isDark.value = false
    }
    else {
        body!.classList.add('dark')
        isDark.value = true
    }
}

</script>
<template>
    <div class="flex flex-row justify-end p-3">
        <Button @click="toggleDarkMode()">
            <Sun v-if="isDark"/>
            <Moon v-else />
        </Button>
    </div>
</template>
