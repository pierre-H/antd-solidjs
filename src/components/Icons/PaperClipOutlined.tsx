import { PaperClipOutlined as BasePaperClipOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PaperClipOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePaperClipOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-paper-clip-outlined text-xl"
            role="img"
            aria-label="paper-clip-outlined"
            innerHTML={svgHTMLString}
        />
    );
};