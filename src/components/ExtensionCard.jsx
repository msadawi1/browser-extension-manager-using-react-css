import Switch from "react-switch";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ExtensionCard({ name, logo, description, isActive, onRemove, onToggle }) {    
    const { theme } = useThemeContext();
    return (
        <div className="extension-card component">
            <img src={import.meta.env.BASE_URL+logo} alt={`${name} Logo`} />
            <div className="extension-content">
                <span>{name}</span>
                <p>{description}</p>
            </div>
            <div className="extension-footer">
                <button title="Remove Extension" aria-label="Remove extension" className="extension-remove-button transition-01s-einout" onClick={onRemove} type="button">
                    Remove
                </button>
                <Switch
                    aria-label="Toggle extension"
                    checked={isActive}
                    onChange={onToggle}
                    onColor={theme === "light" ? "#c7221a" : "#de473f"}
                    offColor="#c7c7c7"
                    onHandleColor="#ffffff"
                    handleDiameter={18}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    activeBoxShadow="none"
                    height={24}
                    width={42}
                />
            </div>
        </div>
    )
}