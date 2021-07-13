import { PoundCircleTwoTone as BasePoundCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PoundCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePoundCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pound-circle-two-tone text-xl"
            role="img"
            aria-label="pound-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};