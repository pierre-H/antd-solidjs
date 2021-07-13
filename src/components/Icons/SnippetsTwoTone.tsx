import { SnippetsTwoTone as BaseSnippetsTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SnippetsTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSnippetsTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-snippets-two-tone text-xl"
            role="img"
            aria-label="snippets-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};