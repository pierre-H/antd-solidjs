import { HddFilled as BaseHddFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HddFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHddFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hdd-filled text-xl"
            role="img"
            aria-label="hdd-filled"
            innerHTML={svgHTMLString}
        />
    );
};