import { CloseSquareOutlined as BaseCloseSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-square-outlined text-xl"
            role="img"
            aria-label="close-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};