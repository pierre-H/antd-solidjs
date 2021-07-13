import { FilePptTwoTone as BaseFilePptTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePptTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePptTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-ppt-two-tone text-xl"
            role="img"
            aria-label="file-ppt-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};