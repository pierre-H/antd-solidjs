import { CarryOutOutlined as BaseCarryOutOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarryOutOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarryOutOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-carry-out-outlined text-xl"
            role="img"
            aria-label="carry-out-outlined"
            innerHTML={svgHTMLString}
        />
    );
};