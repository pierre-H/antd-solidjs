import { DropboxOutlined as BaseDropboxOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DropboxOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDropboxOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dropbox-outlined text-xl"
            role="img"
            aria-label="dropbox-outlined"
            innerHTML={svgHTMLString}
        />
    );
};