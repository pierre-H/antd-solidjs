import { BulbTwoTone as BaseBulbTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BulbTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBulbTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bulb-two-tone text-xl"
            role="img"
            aria-label="bulb-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};