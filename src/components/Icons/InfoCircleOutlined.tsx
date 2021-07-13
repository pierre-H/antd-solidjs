import { InfoCircleOutlined as BaseInfoCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InfoCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInfoCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-info-circle-outlined text-xl"
            role="img"
            aria-label="info-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};