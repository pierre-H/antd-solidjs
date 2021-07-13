import { MonitorOutlined as BaseMonitorOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MonitorOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMonitorOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-monitor-outlined text-xl"
            role="img"
            aria-label="monitor-outlined"
            innerHTML={svgHTMLString}
        />
    );
};