import { FileUnknownTwoTone as BaseFileUnknownTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileUnknownTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileUnknownTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-unknown-two-tone text-xl"
            role="img"
            aria-label="file-unknown-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};