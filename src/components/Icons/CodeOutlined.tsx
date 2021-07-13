import { CodeOutlined as BaseCodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-code-outlined text-xl"
            role="img"
            aria-label="code-outlined"
            innerHTML={svgHTMLString}
        />
    );
};