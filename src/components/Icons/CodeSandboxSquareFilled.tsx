import { CodeSandboxSquareFilled as BaseCodeSandboxSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeSandboxSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeSandboxSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-sandbox-square-filled text-xl"
            role="img"
            aria-label="code-sandbox-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};