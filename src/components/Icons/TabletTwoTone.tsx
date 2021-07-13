import { TabletTwoTone as BaseTabletTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TabletTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTabletTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tablet-two-tone text-xl"
            role="img"
            aria-label="tablet-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};