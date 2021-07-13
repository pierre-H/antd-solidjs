import { DiffTwoTone as BaseDiffTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DiffTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDiffTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-diff-two-tone text-xl"
            role="img"
            aria-label="diff-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};