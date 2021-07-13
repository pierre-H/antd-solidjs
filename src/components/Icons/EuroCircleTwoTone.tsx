import { EuroCircleTwoTone as BaseEuroCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EuroCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEuroCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-euro-circle-two-tone text-xl"
            role="img"
            aria-label="euro-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};