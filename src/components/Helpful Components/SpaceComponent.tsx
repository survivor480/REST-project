import SpaceComponentInterface from "../TemplateExport.tsx/ExportDefaultTemplate";

export default function SpaceComponent(props:SpaceComponentInterface) {
    return (
        <div style={{height: `${props.height}px`}}></div>
    )
}