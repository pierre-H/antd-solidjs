import { CodeTwoTone as BaseCodeTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-two-tone text-xl"
            role="img"
            aria-label="code-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};