import { GoldenFilled as BaseGoldenFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoldenFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoldenFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-golden-filled text-xl"
            role="img"
            aria-label="golden-filled"
            innerHTML={svgHTMLString}
        />
    );
};