import { FileTextFilled as BaseFileTextFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileTextFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileTextFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-text-filled text-xl"
            role="img"
            aria-label="file-text-filled"
            innerHTML={svgHTMLString}
        />
    );
};