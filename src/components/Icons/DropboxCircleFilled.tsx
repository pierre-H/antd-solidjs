import { DropboxCircleFilled as BaseDropboxCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DropboxCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDropboxCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dropbox-circle-filled text-xl"
            role="img"
            aria-label="dropbox-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};