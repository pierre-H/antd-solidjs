import { InfoCircleTwoTone as BaseInfoCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InfoCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInfoCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-info-circle-two-tone text-xl"
            role="img"
            aria-label="info-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};