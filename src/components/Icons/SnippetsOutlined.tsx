import { SnippetsOutlined as BaseSnippetsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SnippetsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSnippetsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-snippets-outlined text-xl"
            role="img"
            aria-label="snippets-outlined"
            innerHTML={svgHTMLString}
        />
    );
};