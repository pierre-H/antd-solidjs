import { BellFilled as BaseBellFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BellFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBellFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bell-filled text-xl"
            role="img"
            aria-label="bell-filled"
            innerHTML={svgHTMLString}
        />
    );
};