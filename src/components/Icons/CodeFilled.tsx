import { CodeFilled as BaseCodeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-filled text-xl"
            role="img"
            aria-label="code-filled"
            innerHTML={svgHTMLString}
        />
    );
};