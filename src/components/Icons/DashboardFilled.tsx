import { DashboardFilled as BaseDashboardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DashboardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDashboardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dashboard-filled text-xl"
            role="img"
            aria-label="dashboard-filled"
            innerHTML={svgHTMLString}
        />
    );
};