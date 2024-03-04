<script setup lang="ts">

function toggleDarkMode() {
    const body = document.querySelector('body')
    body?.classList.toggle('dark')
}

</script>
<template>
    <div class="flex flex-row justify-end p-3">
        <Button @click="toggleDarkMode()"></Button>
    </div>
</template>
