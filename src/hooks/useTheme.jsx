import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme(){
    const { currentTheme, toggleTheme } = useContext(ThemeContext)

    return {
        currentTheme,
        toggleTheme
    }
}