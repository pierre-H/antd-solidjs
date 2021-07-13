import { CopyFilled as BaseCopyFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copy-filled text-xl"
            role="img"
            aria-label="copy-filled"
            innerHTML={svgHTMLString}
        />
    );
};