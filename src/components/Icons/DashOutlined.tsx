import { DashOutlined as BaseDashOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DashOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDashOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dash-outlined text-xl"
            role="img"
            aria-label="dash-outlined"
            innerHTML={svgHTMLString}
        />
    );
};