import { useLocalStorage } from '@vueuse/core'


export const isDarkMode = useLocalStorage('dark-mode', false)

export function toggleDarkMode() {
    const body = document.body

    if(isDarkMode.value) {
        body!.classList.remove('dark')
        isDarkMode.value = false
    }
    else {
        body!.classList.add('dark')
        isDarkMode.value = true
    }
}

export function setMode() {
    const body = document.body

    if(isDarkMode.value && !body!.classList.contains('dark')) {
        body!.classList.add('dark')
    }
    else if(!isDarkMode.value && body!.classList.contains('dark'))
    {
        body!.classList.remove('dark')
    }
}