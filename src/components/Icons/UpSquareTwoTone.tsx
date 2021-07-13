import { UpSquareTwoTone as BaseUpSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-square-two-tone text-xl"
            role="img"
            aria-label="up-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};