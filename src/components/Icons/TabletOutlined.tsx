import { TabletOutlined as BaseTabletOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TabletOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTabletOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tablet-outlined text-xl"
            role="img"
            aria-label="tablet-outlined"
            innerHTML={svgHTMLString}
        />
    );
};