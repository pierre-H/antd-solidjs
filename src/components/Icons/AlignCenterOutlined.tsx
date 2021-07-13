import { AlignCenterOutlined as BaseAlignCenterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlignCenterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlignCenterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-align-center-outlined text-xl"
            role="img"
            aria-label="align-center-outlined"
            innerHTML={svgHTMLString}
        />
    );
};