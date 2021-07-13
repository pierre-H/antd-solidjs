import { InfoCircleFilled as BaseInfoCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InfoCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInfoCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-info-circle-filled text-xl"
            role="img"
            aria-label="info-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};