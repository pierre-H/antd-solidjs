import { RedEnvelopeFilled as BaseRedEnvelopeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedEnvelopeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedEnvelopeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-red-envelope-filled text-xl"
            role="img"
            aria-label="red-envelope-filled"
            innerHTML={svgHTMLString}
        />
    );
};