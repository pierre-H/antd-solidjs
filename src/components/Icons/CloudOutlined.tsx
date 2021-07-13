import { CloudOutlined as BaseCloudOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-outlined text-xl"
            role="img"
            aria-label="cloud-outlined"
            innerHTML={svgHTMLString}
        />
    );
};