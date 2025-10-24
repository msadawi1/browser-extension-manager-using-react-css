import { useThemeContext } from "../contexts/ThemeContext"

export default function Header() {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <header id="header" className="component">
            <a href="#">
                <img src={import.meta.env.BASE_URL+`/assets/images/logo${theme === "dark" ? "-dark" : ""}.svg`} alt="Extensions Logo" />
            </a>
            <button id="theme-button" title="Change theme" aria-label="Change theme" onClick={toggleTheme} type="button">
                <img src={import.meta.env.BASE_URL+`/assets/images/icon-${theme === "light" ? "moon" : "sun"}.svg`} alt="" />
            </button>
        </header>
    )
}