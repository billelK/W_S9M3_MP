import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key,isOn) => {
    const [darkModeIsOn, toggleDarkMode] = useLocalStorage(key,isOn)
    return [darkModeIsOn, toggleDarkMode]
}

