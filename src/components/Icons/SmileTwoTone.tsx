import { SmileTwoTone as BaseSmileTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SmileTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSmileTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-smile-two-tone text-xl"
            role="img"
            aria-label="smile-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};