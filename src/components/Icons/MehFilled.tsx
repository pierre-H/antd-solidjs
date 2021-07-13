import { MehFilled as BaseMehFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MehFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMehFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-meh-filled text-xl"
            role="img"
            aria-label="meh-filled"
            innerHTML={svgHTMLString}
        />
    );
};