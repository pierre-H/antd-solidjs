import { FileAddFilled as BaseFileAddFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileAddFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileAddFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-add-filled text-xl"
            role="img"
            aria-label="file-add-filled"
            innerHTML={svgHTMLString}
        />
    );
};