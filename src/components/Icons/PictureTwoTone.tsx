import { PictureTwoTone as BasePictureTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PictureTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePictureTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-picture-two-tone text-xl"
            role="img"
            aria-label="picture-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};