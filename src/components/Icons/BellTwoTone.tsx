import { BellTwoTone as BaseBellTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BellTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBellTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bell-two-tone text-xl"
            role="img"
            aria-label="bell-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};