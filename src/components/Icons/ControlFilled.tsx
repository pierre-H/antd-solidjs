import { ControlFilled as BaseControlFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ControlFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseControlFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-control-filled text-xl"
            role="img"
            aria-label="control-filled"
            innerHTML={svgHTMLString}
        />
    );
};