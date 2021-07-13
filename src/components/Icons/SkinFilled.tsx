import { SkinFilled as BaseSkinFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SkinFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkinFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-skin-filled text-xl"
            role="img"
            aria-label="skin-filled"
            innerHTML={svgHTMLString}
        />
    );
};