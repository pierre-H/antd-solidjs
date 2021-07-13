import { LayoutTwoTone as BaseLayoutTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LayoutTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLayoutTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-layout-two-tone text-xl"
            role="img"
            aria-label="layout-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};