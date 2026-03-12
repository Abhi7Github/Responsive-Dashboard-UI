import { useContext, createContext } from "react";


const ThemeContext = createContext({
    theme: "light",
    darkMode: () => { },
    lightMode: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}

export default ThemeContext;