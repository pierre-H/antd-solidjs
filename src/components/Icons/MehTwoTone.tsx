import { MehTwoTone as BaseMehTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MehTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMehTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-meh-two-tone text-xl"
            role="img"
            aria-label="meh-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};