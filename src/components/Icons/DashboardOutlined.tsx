import { DashboardOutlined as BaseDashboardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DashboardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDashboardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dashboard-outlined text-xl"
            role="img"
            aria-label="dashboard-outlined"
            innerHTML={svgHTMLString}
        />
    );
};