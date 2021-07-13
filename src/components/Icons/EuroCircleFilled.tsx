import { EuroCircleFilled as BaseEuroCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EuroCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEuroCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-euro-circle-filled text-xl"
            role="img"
            aria-label="euro-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};