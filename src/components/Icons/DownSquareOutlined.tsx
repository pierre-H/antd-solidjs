import { DownSquareOutlined as BaseDownSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-square-outlined text-xl"
            role="img"
            aria-label="down-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};