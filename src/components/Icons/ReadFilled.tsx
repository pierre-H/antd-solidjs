import { ReadFilled as BaseReadFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReadFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReadFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-read-filled text-xl"
            role="img"
            aria-label="read-filled"
            innerHTML={svgHTMLString}
        />
    );
};