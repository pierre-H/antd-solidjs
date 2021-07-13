import { CloudFilled as BaseCloudFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-filled text-xl"
            role="img"
            aria-label="cloud-filled"
            innerHTML={svgHTMLString}
        />
    );
};