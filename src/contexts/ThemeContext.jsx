import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light')

    const toggleTheme = () => {
        setCurrentTheme(
            currentTheme === 'light' ? 'dark' : 'light'
        )
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            toggleTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}