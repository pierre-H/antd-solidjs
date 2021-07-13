import { SmallDashOutlined as BaseSmallDashOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SmallDashOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSmallDashOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-small-dash-outlined text-xl"
            role="img"
            aria-label="small-dash-outlined"
            innerHTML={svgHTMLString}
        />
    );
};