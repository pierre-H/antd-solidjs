import { ExclamationOutlined as BaseExclamationOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExclamationOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExclamationOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-exclamation-outlined text-xl"
            role="img"
            aria-label="exclamation-outlined"
            innerHTML={svgHTMLString}
        />
    );
};