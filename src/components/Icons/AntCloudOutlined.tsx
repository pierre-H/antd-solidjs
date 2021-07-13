import { AntCloudOutlined as BaseAntCloudOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AntCloudOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAntCloudOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ant-cloud-outlined text-xl"
            role="img"
            aria-label="ant-cloud-outlined"
            innerHTML={svgHTMLString}
        />
    );
};