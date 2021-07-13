import { FileUnknownFilled as BaseFileUnknownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileUnknownFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileUnknownFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-unknown-filled text-xl"
            role="img"
            aria-label="file-unknown-filled"
            innerHTML={svgHTMLString}
        />
    );
};