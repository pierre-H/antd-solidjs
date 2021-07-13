import { SkinTwoTone as BaseSkinTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SkinTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkinTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-skin-two-tone text-xl"
            role="img"
            aria-label="skin-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};