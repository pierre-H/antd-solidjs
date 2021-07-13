import { DribbbleSquareOutlined as BaseDribbbleSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DribbbleSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dribbble-square-outlined text-xl"
            role="img"
            aria-label="dribbble-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};