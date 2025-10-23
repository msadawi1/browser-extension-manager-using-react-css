import ExtensionCard from "./ExtensionCard"

export default function ExtensionList({ list, onRemove, onToggle }) {
    return (
        <div id="extension-list">
            {list.length > 0 ?
                list.map(extension =>
                    <ExtensionCard
                        key={extension.name}
                        name={extension.name}
                        logoPath={extension.logo}
                        description={extension.description}
                        isActive={extension.isActive}
                        onRemove={() => onRemove(extension.name)}
                        onToggle={() => onToggle(extension.name)}
                    />)
                :
                <h5>No extensions found.</h5>
            }
        </div>
    )
}