import { DropboxSquareFilled as BaseDropboxSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DropboxSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDropboxSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dropbox-square-filled text-xl"
            role="img"
            aria-label="dropbox-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};