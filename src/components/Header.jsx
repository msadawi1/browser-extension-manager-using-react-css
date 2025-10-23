import { useThemeContext } from "../contexts/ThemeContext"

export default function Header() {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div id="header" className="component">
            <a href="#">
                <img src={import.meta.env.BASE_URL+`/assets/images/logo${theme === "dark" ? "-dark" : ""}.svg`} alt="Extensions Logo" />
            </a>
            <button id="theme-button" onClick={toggleTheme}>
                <img src={import.meta.env.BASE_URL+`/assets/images/icon-${theme === "light" ? "moon" : "sun"}.svg`} alt="Theme Icon" />
            </button>
        </div>
    )
}