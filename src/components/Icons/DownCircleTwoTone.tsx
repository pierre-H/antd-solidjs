import { DownCircleTwoTone as BaseDownCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-circle-two-tone text-xl"
            role="img"
            aria-label="down-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};