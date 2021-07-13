import { SafetyOutlined as BaseSafetyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SafetyOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSafetyOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-safety-outlined text-xl"
            role="img"
            aria-label="safety-outlined"
            innerHTML={svgHTMLString}
        />
    );
};