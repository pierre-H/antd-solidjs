import { ExclamationCircleOutlined as BaseExclamationCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExclamationCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExclamationCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-exclamation-circle-outlined text-xl"
            role="img"
            aria-label="exclamation-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};