import { AlignRightOutlined as BaseAlignRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlignRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlignRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-align-right-outlined text-xl"
            role="img"
            aria-label="align-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};