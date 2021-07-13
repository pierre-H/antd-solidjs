import { LeftCircleFilled as BaseLeftCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-circle-filled text-xl"
            role="img"
            aria-label="left-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};