import { LayoutFilled as BaseLayoutFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LayoutFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLayoutFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-layout-filled text-xl"
            role="img"
            aria-label="layout-filled"
            innerHTML={svgHTMLString}
        />
    );
};