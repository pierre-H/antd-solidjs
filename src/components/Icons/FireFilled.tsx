import { FireFilled as BaseFireFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FireFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFireFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fire-filled text-xl"
            role="img"
            aria-label="fire-filled"
            innerHTML={svgHTMLString}
        />
    );
};