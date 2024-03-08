import { useLocalStorage } from '@vueuse/core'


export const isDarkMode = useLocalStorage('dark-mode', false)

export function toggleDarkMode() {
    if(isDarkMode.value) {
        isDarkMode.value = false
        setMode()
    }
    else {
        isDarkMode.value = true
        setMode()
    }
}

export function setMode() {
    useHead({
        bodyAttrs: {
            tagDuplicateStrategy: 'replace',
            class: isDarkMode.value ? 'dark' : 'light'
        }
    })
}