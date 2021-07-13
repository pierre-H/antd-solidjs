import { PushpinTwoTone as BasePushpinTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PushpinTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePushpinTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pushpin-two-tone text-xl"
            role="img"
            aria-label="pushpin-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};