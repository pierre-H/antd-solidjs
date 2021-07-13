import { MediumCircleFilled as BaseMediumCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MediumCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMediumCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medium-circle-filled text-xl"
            role="img"
            aria-label="medium-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};