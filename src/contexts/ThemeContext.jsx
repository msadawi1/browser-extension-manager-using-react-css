import { useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

// state goes here
export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// logic goes here (hook to be used inside the App)
export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Error: useThemeContext must be used inside a ThemeContextProvider");
    }
    const { theme, setTheme } = context;

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

    return { theme, toggleTheme };
}