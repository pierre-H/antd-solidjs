import { TabletFilled as BaseTabletFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TabletFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTabletFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tablet-filled text-xl"
            role="img"
            aria-label="tablet-filled"
            innerHTML={svgHTMLString}
        />
    );
};