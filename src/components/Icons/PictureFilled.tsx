import { PictureFilled as BasePictureFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PictureFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePictureFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-picture-filled text-xl"
            role="img"
            aria-label="picture-filled"
            innerHTML={svgHTMLString}
        />
    );
};