import { RightSquareOutlined as BaseRightSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-square-outlined text-xl"
            role="img"
            aria-label="right-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};