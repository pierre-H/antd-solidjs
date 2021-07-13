import { PoundCircleFilled as BasePoundCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PoundCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePoundCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pound-circle-filled text-xl"
            role="img"
            aria-label="pound-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};