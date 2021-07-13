import { FileFilled as BaseFileFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-filled text-xl"
            role="img"
            aria-label="file-filled"
            innerHTML={svgHTMLString}
        />
    );
};