import { CodeSandboxOutlined as BaseCodeSandboxOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeSandboxOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeSandboxOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-sandbox-outlined text-xl"
            role="img"
            aria-label="code-sandbox-outlined"
            innerHTML={svgHTMLString}
        />
    );
};