import { PicCenterOutlined as BasePicCenterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PicCenterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePicCenterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pic-center-outlined text-xl"
            role="img"
            aria-label="pic-center-outlined"
            innerHTML={svgHTMLString}
        />
    );
};