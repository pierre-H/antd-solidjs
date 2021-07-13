import { RedoOutlined as BaseRedoOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedoOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedoOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-redo-outlined text-xl"
            role="img"
            aria-label="redo-outlined"
            innerHTML={svgHTMLString}
        />
    );
};