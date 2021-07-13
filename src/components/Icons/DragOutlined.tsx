import { DragOutlined as BaseDragOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DragOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDragOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-drag-outlined text-xl"
            role="img"
            aria-label="drag-outlined"
            innerHTML={svgHTMLString}
        />
    );
};