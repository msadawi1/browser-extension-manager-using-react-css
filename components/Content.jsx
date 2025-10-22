import ExtensionList from "./ExtensionList"

export default function Content() {
    return (
        <div id="content">
            <div id="tool-bar">
                <h1>Extensions List</h1>
                <div id="tool-buttons">
                    <button className="tool-button">All</button>
                    <button className="tool-button">Active</button>
                    <button className="tool-button">Inactive</button>
                </div>
            </div>
            <ExtensionList />
        </div>
    )
}