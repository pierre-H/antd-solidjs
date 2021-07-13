import { BulbFilled as BaseBulbFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BulbFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBulbFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bulb-filled text-xl"
            role="img"
            aria-label="bulb-filled"
            innerHTML={svgHTMLString}
        />
    );
};