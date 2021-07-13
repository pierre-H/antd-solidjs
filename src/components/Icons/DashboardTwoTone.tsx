import { DashboardTwoTone as BaseDashboardTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DashboardTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDashboardTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dashboard-two-tone text-xl"
            role="img"
            aria-label="dashboard-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};