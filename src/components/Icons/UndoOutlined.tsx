import { UndoOutlined as BaseUndoOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UndoOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUndoOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-undo-outlined text-xl"
            role="img"
            aria-label="undo-outlined"
            innerHTML={svgHTMLString}
        />
    );
};