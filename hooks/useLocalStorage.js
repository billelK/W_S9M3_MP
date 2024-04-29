import {useState} from "react"

export const useLocalStorage = (key, isON) => {
    const [darkMode, setDarkMode] = useState(() => {
        let val = window.localStorage.getItem(key)
        console.log(val);
        return val ? JSON.parse(val) : isON
    })
    const toggleDarkMode = isON => {
        setDarkMode(isON)
        window.localStorage.setItem(key, JSON.stringify(isON))
    }
    return [darkMode,toggleDarkMode]
}