import { LeftSquareOutlined as BaseLeftSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-square-outlined text-xl"
            role="img"
            aria-label="left-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};