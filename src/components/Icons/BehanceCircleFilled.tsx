import { BehanceCircleFilled as BaseBehanceCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BehanceCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBehanceCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-behance-circle-filled text-xl"
            role="img"
            aria-label="behance-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};