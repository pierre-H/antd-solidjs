import { RightCircleTwoTone as BaseRightCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-circle-two-tone text-xl"
            role="img"
            aria-label="right-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};