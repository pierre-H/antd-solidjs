import { UnorderedListOutlined as BaseUnorderedListOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UnorderedListOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnorderedListOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-unordered-list-outlined text-xl"
            role="img"
            aria-label="unordered-list-outlined"
            innerHTML={svgHTMLString}
        />
    );
};