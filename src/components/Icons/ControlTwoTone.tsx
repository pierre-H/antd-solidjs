import { ControlTwoTone as BaseControlTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ControlTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseControlTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-control-two-tone text-xl"
            role="img"
            aria-label="control-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};