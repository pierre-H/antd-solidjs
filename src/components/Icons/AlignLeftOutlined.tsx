import { AlignLeftOutlined as BaseAlignLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlignLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlignLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-align-left-outlined text-xl"
            role="img"
            aria-label="align-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};