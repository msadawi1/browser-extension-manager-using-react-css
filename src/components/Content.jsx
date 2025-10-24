import { useState } from "react";
import ExtensionList from "./ExtensionList"
import data from "../data.json";

export default function Content() {
    const [extensions, setExtensions] = useState(data);
    const [filter, setFilter] = useState("All");
    function toggleExtension(name) {
        setExtensions(prev => prev.map(
            extension => extension.name === name ? { ...extension, isActive: !extension.isActive } : extension
        ));
    }
    function deleteExtension(name) {
        setExtensions(prev => prev.filter(
            extension => extension.name !== name
        ));
    }
    const filteredExtensions = extensions.filter(
        extension => {
            if (filter === "All") return true;
            if (filter === "Active") return extension.isActive;
            if (filter === "Inactive") return !extension.isActive;
        }
    )
    return (
        <main id="content">
            <div id="tool-bar">
                <h1>Extensions List</h1>
                <div id="tool-buttons">
                    <button title="All Extensions" aria-label="All extensions" type="button" className={`tool-button ${filter === "All" ? "selected" : ""}`} onClick={() => setFilter("All")}>All</button>
                    <button title="Active Extensions" aria-label="Active extensions" type="button" className={`tool-button ${filter === "Active" ? "selected" : ""}`} onClick={() => setFilter("Active")}>Active</button>
                    <button title="Inactive Extensions" aria-label="Inactive extensions" type="button" className={`tool-button ${filter === "Inactive" ? "selected" : ""}`} onClick={() => setFilter("Inactive")}>Inactive</button>
                </div>
            </div>
            <ExtensionList list={filteredExtensions} onRemove={deleteExtension} onToggle={toggleExtension}/>
        </main>
    )
}