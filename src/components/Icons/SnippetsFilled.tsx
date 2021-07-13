import { SnippetsFilled as BaseSnippetsFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SnippetsFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSnippetsFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-snippets-filled text-xl"
            role="img"
            aria-label="snippets-filled"
            innerHTML={svgHTMLString}
        />
    );
};