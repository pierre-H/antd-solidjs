import { EuroTwoTone as BaseEuroTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EuroTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEuroTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-euro-two-tone text-xl"
            role="img"
            aria-label="euro-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};