import { PicLeftOutlined as BasePicLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PicLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePicLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pic-left-outlined text-xl"
            role="img"
            aria-label="pic-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};