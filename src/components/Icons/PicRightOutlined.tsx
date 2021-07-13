import { PicRightOutlined as BasePicRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PicRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePicRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pic-right-outlined text-xl"
            role="img"
            aria-label="pic-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};