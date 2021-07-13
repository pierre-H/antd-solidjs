import { CodeSandboxCircleFilled as BaseCodeSandboxCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeSandboxCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeSandboxCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-sandbox-circle-filled text-xl"
            role="img"
            aria-label="code-sandbox-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};