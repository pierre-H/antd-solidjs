import { CloudTwoTone as BaseCloudTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-two-tone text-xl"
            role="img"
            aria-label="cloud-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};