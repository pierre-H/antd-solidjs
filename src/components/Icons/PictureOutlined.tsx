import { PictureOutlined as BasePictureOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PictureOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePictureOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-picture-outlined text-xl"
            role="img"
            aria-label="picture-outlined"
            innerHTML={svgHTMLString}
        />
    );
};