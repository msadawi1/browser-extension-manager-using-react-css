import Switch from "react-switch";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ExtensionCard({ name, logo, description, isActive, onRemove, onToggle }) {    
    const { theme } = useThemeContext();
    return (
        <div className="extension-card component">
            <img src={import.meta.env.BASE_URL+logo} alt={`${name} Logo`} />
            <div class="extension-content">
                <span style={{fontSize: '1.17rem', fontWeight: '700'}}>{name}</span>
                <p>{description}</p>
            </div>
            <div class="extension-footer">
                <button className="extension-remove-button" onClick={onRemove}>
                    Remove
                </button>
                <Switch
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