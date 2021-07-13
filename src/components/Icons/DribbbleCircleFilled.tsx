import { DribbbleCircleFilled as BaseDribbbleCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DribbbleCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dribbble-circle-filled text-xl"
            role="img"
            aria-label="dribbble-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};