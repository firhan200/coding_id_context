import useTheme from "../hooks/useTheme"

export default function ToggleTheme(){
    const { currentTheme, toggleTheme } = useTheme()
    
    return (
        <button type="button" onClick={() => toggleTheme()}>
            { currentTheme === 'light' ? 'Dark' : 'Light' }
        </button>
    )
}