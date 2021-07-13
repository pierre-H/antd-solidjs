import { CopyOutlined as BaseCopyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copy-outlined text-xl"
            role="img"
            aria-label="copy-outlined"
            innerHTML={svgHTMLString}
        />
    );
};