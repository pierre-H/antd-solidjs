import { LinkedinFilled as BaseLinkedinFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LinkedinFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLinkedinFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-linkedin-filled text-xl"
            role="img"
            aria-label="linkedin-filled"
            innerHTML={svgHTMLString}
        />
    );
};