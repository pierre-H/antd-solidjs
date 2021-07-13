import { FileTwoTone as BaseFileTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-two-tone text-xl"
            role="img"
            aria-label="file-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};