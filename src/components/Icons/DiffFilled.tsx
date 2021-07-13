import { DiffFilled as BaseDiffFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DiffFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDiffFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-diff-filled text-xl"
            role="img"
            aria-label="diff-filled"
            innerHTML={svgHTMLString}
        />
    );
};