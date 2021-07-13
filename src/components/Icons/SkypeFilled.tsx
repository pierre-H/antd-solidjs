import { SkypeFilled as BaseSkypeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SkypeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkypeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-skype-filled text-xl"
            role="img"
            aria-label="skype-filled"
            innerHTML={svgHTMLString}
        />
    );
};