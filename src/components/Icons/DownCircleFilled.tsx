import { DownCircleFilled as BaseDownCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-circle-filled text-xl"
            role="img"
            aria-label="down-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};