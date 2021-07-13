import { LeftCircleTwoTone as BaseLeftCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-circle-two-tone text-xl"
            role="img"
            aria-label="left-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};