import { FilePptOutlined as BaseFilePptOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePptOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePptOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-ppt-outlined text-xl"
            role="img"
            aria-label="file-ppt-outlined"
            innerHTML={svgHTMLString}
        />
    );
};