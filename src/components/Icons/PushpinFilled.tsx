import { PushpinFilled as BasePushpinFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PushpinFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePushpinFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pushpin-filled text-xl"
            role="img"
            aria-label="pushpin-filled"
            innerHTML={svgHTMLString}
        />
    );
};