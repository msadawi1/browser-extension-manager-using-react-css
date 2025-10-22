import { useState } from "react";
import Switch from "react-switch";

export default function ExtensionCard() {
    const [state, setState] = useState(false);
    return (
        <div className="extension-card component">
            <img src="src/assets/images/logo-devlens.svg" alt="DevLens Logo" />
            <div class="extension-content">
                <h3>DevLens</h3>
                <p>Quickly inspect page layouts and visualize element boundaries.</p>
            </div>
            <div class="extension-footer">
                <button className="extension-remove-button">
                    Remove
                </button>
                <Switch
                    checked={state}
                    onChange={() => {setState(!state)}}
                    onColor="#c7221a"
                    offColor="#c7c7c7"
                    onHandleColor="white"
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