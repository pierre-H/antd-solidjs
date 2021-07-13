import { RightCircleFilled as BaseRightCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-circle-filled text-xl"
            role="img"
            aria-label="right-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};