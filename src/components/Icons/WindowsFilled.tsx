import { WindowsFilled as BaseWindowsFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WindowsFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWindowsFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-windows-filled text-xl"
            role="img"
            aria-label="windows-filled"
            innerHTML={svgHTMLString}
        />
    );
};