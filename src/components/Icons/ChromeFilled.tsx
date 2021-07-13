import { ChromeFilled as BaseChromeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ChromeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseChromeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-chrome-filled text-xl"
            role="img"
            aria-label="chrome-filled"
            innerHTML={svgHTMLString}
        />
    );
};