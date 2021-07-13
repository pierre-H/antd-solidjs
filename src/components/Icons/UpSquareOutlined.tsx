import { UpSquareOutlined as BaseUpSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-square-outlined text-xl"
            role="img"
            aria-label="up-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};