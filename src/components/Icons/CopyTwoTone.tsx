import { CopyTwoTone as BaseCopyTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copy-two-tone text-xl"
            role="img"
            aria-label="copy-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};