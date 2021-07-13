import { FilePptFilled as BaseFilePptFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePptFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePptFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-ppt-filled text-xl"
            role="img"
            aria-label="file-ppt-filled"
            innerHTML={svgHTMLString}
        />
    );
};