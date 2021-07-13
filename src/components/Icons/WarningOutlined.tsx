import { WarningOutlined as BaseWarningOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WarningOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWarningOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-warning-outlined text-xl"
            role="img"
            aria-label="warning-outlined"
            innerHTML={svgHTMLString}
        />
    );
};